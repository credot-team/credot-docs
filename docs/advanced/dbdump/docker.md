---
title: docker
sidebar_position: 1
---

## sh

```sh
container_name=postgres
db_user=root
db_pw=2wsx4rfv6yhn
database_name=peman
backup_path=/root/dbbackup/$database_name
count=30
date_time=`date +%Y-%m-%d-%H-%M`
sql_command="pg_dump -U ${db_user} ${database_name}"
# msql
# mysqldump -u ${db_user} -p ${db_pw} ${database_name} 

#如果資料夾不存在則建立
if [ ! -d $backup_path ];
then
 mkdir -p $backup_path;
fi

docker exec $container_name sh -c "${sql_command}" > $backup_path/$database_name-$date_time.sql

#開始壓縮
cd $backup_path
tar -zcvf $database_name-$date_time.tar.gz $database_name-$date_time.sql

#刪除原始檔
rm -rf $backup_path/$database_name-$date_time.sql

#更新備份日誌
echo "create $backup_path/$database_name-$date_time.tar.gz" >> $backup_path/dump.log

#找出需要刪除的備份
delfile=`ls -l -crt $backup_path/*.tar.gz | awk '{print $9 }' | head -1`

#判斷現在的備份數量是否大於閾值
number=`ls -l -crt $backup_path/*.tar.gz | awk '{print $9 }' | wc -l`

if [ $number -gt $count ]
then
 #刪除最早生成的備份，只保留count數量的備份
 rm $delfile
 #更新刪除檔案日誌
 echo "delete $delfile" >> $backup_path/dump.log
fi
```

## 備份

- 全部資料庫備份

```docker
docker exec some-mysql sh -c 'exec mysqldump --all-databases -u root -p"$MYSQL_ROOT_PASSWORD"' > /some/path/on/your/host/all-databases.sql
```

- 備份指定資料庫

```docker
docker exec some-mysql sh -c 'exec mysqldump --databases db1 -uroot -p"$MYSQL_ROOT_PASSWORD"' > /some/path/on/your/host/db1.sql
```

## cron

> crontab -e

- 新增指令

>  0 * * * * /app/dump_db.sh

```
minute hour day month week
```

- 查看cron工作

> crontab -l


## 還原

- 解壓縮

> tar zxvf my-file.tgz

### postgres


- 還原

```
docker exec -i postgres sh -c 'exec psql peman' < peman-2021-05-27-05-55.sql
```

### mysql

- 全部還原

```docker
docker exec -i some-mysql sh -c 'exec mysql -u root -p"$MYSQL_ROOT_PASSWORD"' < /some/path/on/your/host/all-databases.sql
```

- 單個還原
  
```sh
# 檢視備份的資料庫sql
[root@VM_0_9_centos sqlbackup]# ls
76base_20200508.sql  backup_database.sh  backup.log  clear_history_backup.sh  clear.log  pizza_20200508.sql

# 複製備份過的sql到mysql容器的根目錄
[root@VM_0_9_centos sqlbackup]# docker cp ./76base_20200508.sql mysql_5.7:/

# 進入mysql容器
[root@VM_0_9_centos sqlbackup]# docker exec -it mysql_5.7 /bin/bash

# 登入msyql
root@3527bdeca151:/# mysql -uroot -proot

# 切換到要恢復的資料庫
mysql> use 76base;
Database changed

# 恢復資料庫
mysql> source /76base_20200508.sql
```


## 參考連結

- [docker 中 MySQL 備份及恢復](https://iter01.com/505137.html)
- [cron設定](https://blog.gtwang.org/linux/linux-crontab-cron-job-tutorial-and-examples/)


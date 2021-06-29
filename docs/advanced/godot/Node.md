---
title: Node 
sidebar_position: 4
---


## Tween

> 將任何屬性動畫化

### interpolate_property

> 七個引數

1. 節點參照，要動畫化的屬性的節點
2. 屬性的識別子，以字串傳入
3. 起始值
4. 終止值
5. 動畫時間，以秒為單位
6. 轉場類型
7. 與方程結合使用的緩動 (Easing) 方式。


```
tween.interpolate_property(self, "animated_health", animated_health, new_value, 0.6)
```

### active

> 需要至少一次啟動動畫

```
if not tween.is_active():
	tween.start()
```


## AnimationPlayer

> 新增動畫後,所有屬性都會有鑰匙圖示,表示所有屬性都可以被動畫化

點擊鑰匙可以新增關鍵影格,shift+D可以播放



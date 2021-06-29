---
title: Script
sidebar_position: 2
---

> 於腳本上建立gd

### 實體化

```
export (PackedScene) var Mob
```

- export之後可以在Node/Script Variables內看到Mob
- 點選load可以選擇要載入的scene

### 變數宣告


```shell
export var speed = 400
var screen_size
```

### signal

```
signal hit
```

- 定義signal後到Player/Node內查詢能夠送出的訊號,可以看到來自Player.gd的signal

```
func _on_Player_body_entered(body):
    hide()  # Player disappears after being hit.
    emit_signal("hit") #送出訊號
    $CollisionShape2D.set_deferred("disabled", true) #關閉玩家的碰撞偵測,避免觸發超過一次的碰撞
```


### function

> 釋放

- 依序釋放

```
queue_free()
```

> Random

```
randi() % n
```

將會回傳 0 ~ n-1 之間的整數


> _ready: 表示進入場景後會呼叫的程式,會在所有節點載入到遊戲開始前呼叫

```shell
func _ready():
    screen_size = get_viewport_rect().size
```

> _process: 每一幀都會被呼叫

- $ 是 get_node()的簡寫。所以程式碼中 $AnimatedSprite.play() 等同於 get_node("AnimatedSprite").play()
- 由於AnimateSprite是目前節點的子節點,因此可以寫成$AnimatedSprite
- delta 參數代表了 影格時長, 即是自從上一個影格到現在這個影格所花費的時間。通過這個數值可以確保即使幀率發生變化，移動的距離也能保持不變。

```godot
func _process(delta):
    var velocity = Vector2()  # The player's movement vector.
    if Input.is_action_pressed("ui_right"):
        velocity.x += 1
    if Input.is_action_pressed("ui_left"):
        velocity.x -= 1
    if Input.is_action_pressed("ui_down"):
        velocity.y += 1
    if Input.is_action_pressed("ui_up"):
        velocity.y -= 1
    if velocity.length() > 0:
        velocity = velocity.normalized() * speed
        $AnimatedSprite.play()
    else:
        $AnimatedSprite.stop()
    
    // 移動,並限制區間
    position += velocity * delta
    position.x = clamp(position.x, 0, screen_size.x)
    position.y = clamp(position.y, 0, screen_size.y)

    // 指定動畫及根據方向翻轉動畫
    if velocity.x != 0:
		$AnimatedSprite.animation = "walk"
		$AnimatedSprite.flip_v = false
		# See the note below about boolean assignment
		$AnimatedSprite.flip_h = velocity.x < 0
	elif velocity.y != 0:
		$AnimatedSprite.animation = "up"
		$AnimatedSprite.flip_v = velocity.y > 0
```

- clamp表示將值限定在某個區間內

> enter_tree & exit_tree

- 進入節點與節點消失時呼叫


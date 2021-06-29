---
title: Readmd
sidebar_position: 1
---

## Readme

- [First Project](https://docs.godotengine.org/zh_TW/stable/getting_started/step_by_step/your_first_game.html)
- [UI設計](https://docs.godotengine.org/zh_TW/stable/getting_started/step_by_step/ui_introduction_to_the_ui_system.html)


## 風格

> GDScript： 類別 (節點) 使用大駝峰法 (PascalCase)，變數與函式名稱使用蛇形法 (snake_case)，常數則使用全大寫 (ALL_CAPS)  

> 類別與匯出的變數與方法使用大駝峰法 (PascalCase)，Private 欄位使用底線加小駝峰 (_camelCase)，區域變數與參數使用小駝峰法 (camelCase) 

## Run

- Cmd + R: 可以只執行一個scene
- Cmd + B: 執行整個Project
- Cmd + A: 新增節點
- Cmd + D: 快速複製節點

## setting

### 視窗

> 專案->專案設定->Display->Window

## Node

- 確保物件的子級項目無法被選擇: 用來讓目標不會因為點選而被移動
- Control節點: Control 節點有獨特的屬性能夠，能夠讓一個 Control 節點與另一個 Control 節點互相配合,適合做UI

### Area2D

- Signals
  - body_entered(碰撞時會傳送訊號)

### AmimatedSprite

> 用來處理外觀及動畫效果

- 必須要有一個SpriteFrames資源 (於Inspector內的Frames上點選新增來建立)
- Inspector/Node2D/Scale 可以設定縮放
- Playing On可以自動跑動畫

### CollisionShape2D

> 用來判斷碰撞體積

- Inspector/Shap: 用來指定形狀
- Rotation Degrees: 設定旋轉角度

#### Frames

- Animations(新增動畫)
- Animation Frames(動畫影格)

### RigidBody2D

> 無法直接控制RigidBody,而是受控於gravity等等物理引擎

> 四種行為模式
- Rigid
- Static
- Character
- Kinematic

> 屬性
- Gravity Scale (設定為0便不會下墜)
- Collision/Mask 取消可以確保相同物體之間不會碰撞

### VisibilityNotifier2D

#### sign

- screen_exited(): 場景離開畫面時觸發

### Timer

> 計時器

- Wait time (等待時間)
- One Shot (只會計時一次)
- 結束時會送出timeout的signal

### TextureRect

具有貼圖效果的文字

### StartPosition

> 起始位置

### Path2D

> 設定路徑

### PathFollow2D

> 會根據位置去決定方向的path

### CanvasLayer

> 在遊戲上方的塗層繪製UI,避免被其他元素給擋住

### Label

- Control/Custom Fonts(自定義字體),選擇DynamicFont,Load font字型
- 字型設定可以複製到別的label上

### ColorRect 

> 放在第一個節點才會被繪製於其他節點下面

- Layout/Full Rect 可以覆蓋整個畫面

### AudioStreamPlayer 

> 聲音節點

- Stream/Load 可以入音訊檔案

```
$Music.play()
$Music.stop()
```

### Button

- Shortcut屬性/新增InputEventAction

##### ShortCut

- ui_select: 空白鍵


## scene

> 在Scene可以實體化子node


## Group

> 新遊戲開始前,可以讓所有在群組裡面的怪物消失

- Node/Groups

```
get_tree().call_group("mobs", "queue_free")
```

## resource

> 除了在編輯器設定也可以在程式內載入資源

```
func _ready():
  var res = load("res://robi.png") # Godot loads the Resource when it reads the line.
  get_node("sprite").texture = res
```

- preload: 編譯時期載入

```
func _ready():
  var res = preload("res://robi.png") # Godot loads the resource at compile-time
  get_node("sprite").texture = res
```

- 場景也可以載入

```
func _on_shoot():
  var bullet = preload("res://bullet.tscn").instance()
  add_child(bullet)
```



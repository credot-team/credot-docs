---
title: UI
sidebar_position: 3
---

## UI打造原則

1. 將 UI 拆解成互相嵌套的框框。最大的框框包含所有東西，而最小框框的則放置一些如帶有標籤的進度條或有按鈕的面板之類的單一界面元素。
2. 如果框框的周圍有內邊距，則使用 MarginContainer 。
3. 如果元素是使用行或列來排列的，則使用 HBoxContainer 或 VBoxContainer 。

## Container

>  Container 是 回應式

- MarginContainer, to add margins around parts of the UI
- [CenterContainer](#CenterContainer): 置中容器，用來將子元素放在定界框中間
- VboxContainer 與 HboxContainer，垂直框容器與水平框容器，用來以行或列排列 UI 元素
- GridContainer，柵欄容器，用來以類似柵欄系統的方式排列 Control 節點

- BoxContainer: 屬於 Helper 類別, 所以 BoxContainer 無法直接使用, 請使用Vbox以及Hbox
- HSplitContainer: 將區塊分成左右或上下
- HBoxContainer: 有幾個節點就切成幾列

### 屬性

- 使用layout可以填滿整個畫面
- Layout/TopWide: 左右延伸並且置頂
- Size Flags/Horizontal Expand表示水平延展

### GridContainer

> 以用類似柵欄系統的方式來排列 UI 元素。其中只有列數能控制，行數會自動依據子節點的數量來調整。若有九個子節點，列數設為三，則最後會有 9÷3 = 3 行。

### CenterContainer

- sizeflags
  - Fill 填滿
  - Expand 延展

### VBoxContainer

- Custom Constants/Separation: 表內部元素之間的分隔

## Control節點 主屬性

1. [Anchor](#Anchor)：錨點
2. Bouding Rectangle：邊界矩形
3. Focus 與 Focus Neighbor：焦點與相鄰焦點
4. [Size Flags](#size-flag)：大小標誌
5. Margin：外邊距
6. 可選的 UI 主題

## 常見UI元素

1. [Label](#Label)：標籤，用來顯示文字
2. [TextureRect](#TextureRect)：紋理貼圖矩形，通常用來作背景，或是其他顯示靜態圖片的地方
3. [TextureProgress](#TextureProgress)：紋理貼圖進度條，用於血槽、載入進度條，可以是任何水平、垂直、或放射性的
4. [NinePatchRect](#NinePatchRect)：9-Patch 矩形，用於可縮放的面板
5. [TextureButton](#TextureButton)：紋理貼圖按鈕，用於製作按鈕

### Label

-  Autowrap: 自動斷行
-  Align: 對齊
-  Valign: 垂直對齊

### TextureRect

>  TextureRect 可以在 UI 中顯示紋理貼圖或圖片。看起來很像 Sprite 節點,但提供多種Stretch Mode(拉伸模式)

- Modulate 作為屬性的色彩選擇器

#### Stretch Mode

- Scale On Expand (compat): 僅當 expand 屬性設為 true 時將紋理貼圖縮放至符合節點的邊界矩形。其餘情況則與 Keep 模式行為相同
- Scale: 縮放，將紋理貼圖縮放至節點的邊界矩形
- Tile: 平鋪，重複紋理貼圖，但不進行縮放
- Keep/Keep Centered: 保持與保持居中，強制紋理貼圖保持原始大小，分別置於框架的左上角或中間。
- Keep Aspect/Keep Aspect Centered: 保持長寬比與居中保持長寬比，將紋理貼圖縮放但強制其維持原始的長寬比，分別置於框架的左上角或中間。
- Keep Aspect Covered: 保持長寬比覆蓋，行為與 Keep Aspect Centered 相同，但短邊會配合邊界矩形，另一邊則會超出節點邊界並剪裁掉。

### TextureButton

> TextureButton 類似 TextureRect，不同的地方是 TextureButton 有六個紋理貼圖欄位，每個按鈕的狀態都有一個貼圖。

> 大多數會使用到 Normal,Pressed與Hover的貼圖。

- Toggle Mode:點擊按鈕會在Active及normal狀態間切換
- Disable: 啟動時會預設禁用,有自己的貼圖
- Modulate: 調整色彩

### TextureProgress

> TextureProgress 可使用最多三個圖層的 Sprite 來建立進度條。 Under 與 Over 紋理貼圖中間夾著顯示進度條數值的 Progress 貼圖。

- Mode: 控制進度條的方向: 水平,垂直,或放射狀
- Under: 背景,選擇貼圖
- Progress: 進度條,選擇貼圖
- Value: 屬性值

### NinePatchRect

> 將紋理貼圖分隔成三行三列。中間與側面的貼圖會在縮放貼圖時平鋪，而角落的貼圖則不會被縮放。適合用來製作 UI 中的面板、對話框、與可伸縮的背景。


## Anchor

> 錨點

- 通常於面板中使用Layout設定
- 每個錨點的值都介於 0 與 1, 表示相對於母容器的大小, 因此左邊與上面越小表示邊距越小, 右邊與下面則相反
- 左邊與上面的錨點中，值為 0 則代表沒有任何外邊距。節點的邊距會保持與母節點中的左側與上面的邊緣對齊。
- 而右邊與下面的錨點，值為 1 則代表會與母容器的右邊與下面的邊緣對齊。

## Size Flag

> 旗標用來控制 Container 如何縮放其中的 UI 元素

- Fill: 若在Horizontal或Vertical屬性上新增，則節點的定界框會佔用所有可用的空間
- Expand: 會讓 UI 元素佔滿所有可用的空間，並擠壓同級元素。










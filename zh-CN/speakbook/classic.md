---
layout: SpeakBook
classic_edition: true
text:
  ring_bind_edge: 环沿着这条边装订
  cut_out_this_part: 切出这部分内容。
  SPEAKBOOK: SPEAKBOOK
  classic: classic
  EDITION: 版
  color_blind: 色盲
  friendly: 友好！
  instructions: 说明
  HOME_PAGE: 主页
  SPELL: 拼写
  HOME: 家
  THANK_YOU: 谢谢
  A: 日
  B: 月
  C: 金
  D: 木
  E: 水
  F: 火
  G: 土
  H: 竹
  I: 戈
  J: 十
  K: 大
  L: 中
  M: 一
  N: 弓
  O: 人
  P: 心
  Q: 手
  R: 口
  S: 尸
  T: 廿
  U: 山
  V: 女
  W: 田
  X: 難
  Y: 卜
  Z: Ｚ
  _zero: "0"
  _one: "1"
  _two: "2"
  _three: "3"
  _four: "4"
  _five: 五
  _six: "6"
  _seven: "7"
  _eight: "8"
  _nine: "9"
  im_too_hot: 我太热
  im_too_cold: 我太冷了
  cup_of_tea: 一杯茶！
  cup_of_coffee: 一杯咖啡！
  i_love_you: 我爱你
  yes: 是
  no: 没有
  CAR: 汽车
  BED: 床
  CLOTHING: 服装
  BATHTIME: 洗澡时间
  MEALS: 膳食
  COMFORT: 安慰
  TOILET: 厕所
  DRINKS: 饮料
  TRAINING_PAGE: 培训页面
  training_page: 交易页面
  _GBP: £
  _USD: $
  _percent: ％
  _plus: +
  _minus: " - "
  _slash: /
  _X: X
  _equal: =
  _question_mark: ？
  _atsign: "@"
  YES: 是
  NO: 没有
  edition_nth: 第四
slots_in_need_for_translation:
  - training-page-description
  - last-page-heading
  - cover-footer
  - inst-01-flt-right-content
  - inst-01-content
  - inst-02-flt-right-label
  - inst-02-content
inlinecss:
  --page-width: 210mm
  --page-height: 297mm
  --cut-out-center-guide-width: 68mm
  --cut-out-center-guide-height: 162mm
instruction_pages:
  - content_slotname: inst-01-content
    floating_elements:
      - comment: left spacing
        dir: left
        inlinecss:
          --spacing-offset-top: 17mm
          --left-spacing: 13mm
          --max-left-spacing: 40mm
          width: var(--max-left-spacing)
          height: var(--page-height)
          shape-outside: polygon(0 var(--spacing-offset-top), var(--max-left-spacing)
            var(--spacing-offset-top), var(--left-spacing)
            calc(var(--spacing-offset-top) + 20mm), var(--left-spacing)
            var(--page-height), 0 var(--page-height))
      - comment: floating content at center right
        dir: right
        mode: fixed
        inlinecss:
          --flt-width: 137mm
          --flt-height: var(--page-height)
          --flt-shape-width: var(--flt-width)
          --flt-shape-height: 175mm
          shape-outside: polygon(0 55mm, 100% 55mm, 100% 230mm, 0 230mm)
          top: 56mm
        slotname: inst-01-flt-right-content
  - content_slotname: inst-02-content
    floating_elements:
      - comment: right side cut out guide
        dir: right
        slotname: cut-out-right-side-guide-02
        inlinecss:
          width: 10mm
      - comment: right side label
        dir: right
        mode: fixed
        inlinecss:
          --flt-width: 44mm
          --flt-height: 44mm
          --flt-shape-width: var(--flt-width)
          --flt-shape-height: var(--flt-height)
          shape-outside: polygon(0 0, 100% 100%, 100% 0)
        slotname: inst-02-flt-right-label
      - dir: left
        mode: center-fixed
        inlinecss:
          --flt-shape-width: 137mm
          --flt-shape-height: 168mm
          --chrome-bugfix-bottom-offset: 6mm
        slotname: inst-02-flt-left-content
grid_pages:
  - name: page04
    comment: no cut out
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top left
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center left
            type: coloured-circle
            colour: yellow
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
          - comment: space in middle
            inlinecss:
              width: var(--cut-out-center-guide-width)
              height: var(--cut-out-center-guide-height)
          - comment: At bottom center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center right
            type: coloured-circle
            colour: purple
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page05
    start_spacing_slotname: cut-out-right-side-guide-03
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top left
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center left
            type: coloured-circle
            colour: yellow
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
          - comment: Guide at center
            type: custom
            slotname: cut-out-center-guide
            inlinecss:
              flex-grow: 1
              transform: rotate(180deg)
          - comment: At bottom center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center right
            type: coloured-circle
            colour: purple
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page06
    comment: no cut out
    columns:
      - comment: Left column
        inlinecss:
          width: 55mm
        rows:
          - comment: At top left
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-yellow)
            entries:
              - text_key: S
                inlinecss:
                  color: var(--color-purple)
              - text_key: T
                inlinecss:
                  color: var(--color-white)
              - text_key: U
                inlinecss:
                  color: var(--color-green)
              - text_key: V
                inlinecss:
                  color: var(--color-yellow)
              - text_key: W
                inlinecss:
                  color: var(--color-orange)
              - text_key: X
                inlinecss:
                  color: var(--color-cyan)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-orange)
            entries:
              - text_key: Y
                inlinecss:
                  color: var(--color-purple)
              - text_key: Z
                inlinecss:
                  color: var(--color-white)
              - text_key: _one
                inlinecss:
                  color: var(--color-green)
              - text_key: _two
                inlinecss:
                  color: var(--color-yellow)
              - text_key: _three
                inlinecss:
                  color: var(--color-orange)
              - text_key: _four
                inlinecss:
                  color: var(--color-cyan)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-cyan)
            entries:
              - text_key: _five
                inlinecss:
                  color: var(--color-purple)
              - text_key: _six
                inlinecss:
                  color: var(--color-white)
              - text_key: _seven
                inlinecss:
                  color: var(--color-green)
              - text_key: _eight
                inlinecss:
                  color: var(--color-yellow)
              - text_key: _nine
                inlinecss:
                  color: var(--color-orange)
              - text_key: HOME
                inlinecss:
                  color: var(--color-cyan)
                  font-size: 18pt
      - comment: Center
        inlinecss:
          width: 76mm
      - comment: Right column
        inlinecss:
          width: 55mm
        rows:
          - comment: At top right
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-purple)
            entries:
              - text_key: A
                inlinecss:
                  color: var(--color-purple)
              - text_key: B
                inlinecss:
                  color: var(--color-white)
              - text_key: C
                inlinecss:
                  color: var(--color-green)
              - text_key: D
                inlinecss:
                  color: var(--color-yellow)
              - text_key: E
                inlinecss:
                  color: var(--color-orange)
              - text_key: F
                inlinecss:
                  color: var(--color-cyan)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-white)
              border: 1px solid var(--color-black)
            entries:
              - text_key: G
                inlinecss:
                  color: var(--color-purple)
              - text_key: H
                inlinecss:
                  color: var(--color-white)
              - text_key: I
                inlinecss:
                  color: var(--color-green)
              - text_key: J
                inlinecss:
                  color: var(--color-yellow)
              - text_key: K
                inlinecss:
                  color: var(--color-orange)
              - text_key: L
                inlinecss:
                  color: var(--color-cyan)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-green)
            entries:
              - text_key: M
                inlinecss:
                  color: var(--color-purple)
              - text_key: N
                inlinecss:
                  color: var(--color-white)
              - text_key: O
                inlinecss:
                  color: var(--color-green)
              - text_key: P
                inlinecss:
                  color: var(--color-yellow)
              - text_key: Q
                inlinecss:
                  color: var(--color-orange)
              - text_key: R
                inlinecss:
                  color: var(--color-cyan)
  - name: page07
    start_spacing_slotname: cut-out-right-side-guide-04
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
    columns:
      - comment: Left column
        inlinecss:
          width: 55mm
        rows:
          - comment: At top left
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-yellow)
            entries:
              - text_key: S
                inlinecss:
                  color: var(--color-purple)
              - text_key: T
                inlinecss:
                  color: var(--color-white)
              - text_key: U
                inlinecss:
                  color: var(--color-green)
              - text_key: V
                inlinecss:
                  color: var(--color-yellow)
              - text_key: W
                inlinecss:
                  color: var(--color-orange)
              - text_key: X
                inlinecss:
                  color: var(--color-cyan)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-orange)
            entries:
              - text_key: Y
                inlinecss:
                  color: var(--color-purple)
              - text_key: Z
                inlinecss:
                  color: var(--color-white)
              - text_key: _one
                inlinecss:
                  color: var(--color-green)
              - text_key: _two
                inlinecss:
                  color: var(--color-yellow)
              - text_key: _three
                inlinecss:
                  color: var(--color-orange)
              - text_key: _four
                inlinecss:
                  color: var(--color-cyan)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-cyan)
            entries:
              - text_key: _five
                inlinecss:
                  color: var(--color-purple)
              - text_key: _six
                inlinecss:
                  color: var(--color-white)
              - text_key: _seven
                inlinecss:
                  color: var(--color-green)
              - text_key: _eight
                inlinecss:
                  color: var(--color-yellow)
              - text_key: _nine
                inlinecss:
                  color: var(--color-orange)
              - text_key: HOME
                inlinecss:
                  color: var(--color-cyan)
                  font-size: 18pt
      - comment: Center
        inlinecss:
          width: 76mm
        rows:
          - comment: Guide at center
            type: custom
            slotname: cut-out-center-guide
            inlinecss:
              flex-grow: 1
              transform: rotate(180deg)
      - comment: Right column
        inlinecss:
          width: 55mm
        rows:
          - comment: At top right
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-purple)
            entries:
              - text_key: A
                inlinecss:
                  color: var(--color-purple)
              - text_key: B
                inlinecss:
                  color: var(--color-white)
              - text_key: C
                inlinecss:
                  color: var(--color-green)
              - text_key: D
                inlinecss:
                  color: var(--color-yellow)
              - text_key: E
                inlinecss:
                  color: var(--color-orange)
              - text_key: F
                inlinecss:
                  color: var(--color-cyan)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-white)
              border: 1px solid var(--color-black)
            entries:
              - text_key: G
                inlinecss:
                  color: var(--color-purple)
              - text_key: H
                inlinecss:
                  color: var(--color-white)
              - text_key: I
                inlinecss:
                  color: var(--color-green)
              - text_key: J
                inlinecss:
                  color: var(--color-yellow)
              - text_key: K
                inlinecss:
                  color: var(--color-orange)
              - text_key: L
                inlinecss:
                  color: var(--color-cyan)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: letters-grid
            inlinecss:
              --grid-item-width: 55mm
              --grid-item-height: 62mm
              height: var(--grid-item-height)
              background-color: var(--color-green)
            entries:
              - text_key: M
                inlinecss:
                  color: var(--color-purple)
              - text_key: N
                inlinecss:
                  color: var(--color-white)
              - text_key: O
                inlinecss:
                  color: var(--color-green)
              - text_key: P
                inlinecss:
                  color: var(--color-yellow)
              - text_key: Q
                inlinecss:
                  color: var(--color-orange)
              - text_key: R
                inlinecss:
                  color: var(--color-cyan)
  - name: page08
    comment: no cut out
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: HOME
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center left
            type: coloured-circle
            colour: yellow
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
          - comment: space in middle
            inlinecss:
              width: var(--cut-out-center-guide-width)
              height: var(--cut-out-center-guide-height)
          - comment: At bottom center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center right
            type: coloured-circle
            colour: purple
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page09
    start_spacing_slotname: cut-out-right-side-guide-05
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: HOME
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center left
            type: coloured-circle
            colour: yellow
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
          - comment: Guide at center
            type: custom
            slotname: cut-out-center-guide
            inlinecss:
              flex-grow: 1
              transform: rotate(180deg)
          - comment: At bottom center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center right
            type: coloured-circle
            colour: purple
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page10
    comment: no cut out
    copyof: page08
  - name: page11
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-06
  - name: page12
    comment: no cut out
    copyof: page08
  - name: page13
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-07
  - name: page14
    comment: no cut out
    copyof: page08
  - name: page15
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-08
  - name: page16
    comment: no cut out
    copyof: page08
  - name: page17
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-09
  - name: page18
    comment: no cut out
    copyof: page08
  - name: page19
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-10
  - name: page20
    comment: no cut out
    copyof: page08
  - name: page21
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-11
  - name: page22
    comment: no cut out
    copyof: page08
  - name: page23
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-12
  - name: page24
    comment: no cut out
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top left
            type: coloured-table02
            rowheight: 12mm
            overlay_slotname: table-overlay-01
            rows:
              - text_key: i_love_you
              - text_key: yes
                inlinecss:
                  margin-left: 14mm
              - text_key: no
                inlinecss:
                  margin-left: 30mm
              - text_key: CAR
                inlinecss:
                  margin-left: 43mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: text-with-coloured-circle
            fixed: true
            colour: yellow
            text_slotname: training-page-description
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: COMFORT
              - text_key: TOILET
              - text_key: DRINKS
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
          - comment: space in middle
            inlinecss:
              width: var(--cut-out-center-guide-width)
              height: var(--cut-out-center-guide-height)
          - comment: At bottom center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: im_too_hot
              - text_key: im_too_cold
              - text_key: cup_of_tea
              - text_key: cup_of_coffee
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: text-with-coloured-circle
            colour: purple
            text_key: TRAINING_PAGE
            text_inlinecss:
              font-size: 18pt
            text_at_top: true
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: BED
              - text_key: CLOTHING
              - text_key: BATHTIME
              - text_key: MEALS
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page25
    start_spacing_slotname: cut-out-right-side-guide-13
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At bottom right
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: COMFORT
              - text_key: TOILET
              - text_key: DRINKS
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: text-with-coloured-circle
            fixed: true
            colour: yellow
            text_slotname: training-page-description
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At top right
            type: coloured-table02
            overlay_slotname: table-overlay-02
            rowheight: 12mm
            rows:
              - text_key: i_love_you
              - text_key: yes
                inlinecss:
                  margin-right: 14mm
              - text_key: no
                inlinecss:
                  margin-right: 30mm
              - text_key: CAR
                inlinecss:
                  margin-right: 43mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At bottom center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
          - comment: Guide at center
            type: custom
            slotname: cut-out-center-guide
            inlinecss:
              flex-grow: 1
              transform: rotate(180deg)
          - comment: At top center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At left bottom
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: BED
              - text_key: CLOTHING
              - text_key: BATHTIME
              - text_key: MEALS
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: text-with-coloured-circle
            colour: purple
            text_key: TRAINING_PAGE
            text_inlinecss:
              font-size: 18pt
            text_at_top: true
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At top left
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: im_too_hot
              - text_key: im_too_cold
              - text_key: cup_of_tea
              - text_key: cup_of_coffee
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)

---
::: slot redheart-img
<img style="width: var(--img-width); height: var(--img-width);" :src="$withBase('/speakbook/shapes/redheart.svg')" />
:::
::: slot smileyface-img
<img style="width: var(--img-width); height: var(--img-width);" :src="$withBase('/speakbook/shapes/smileyface.svg')" />
:::
::: slot last-page-heading
<div class="float-left" style="width: 40mm; height: 37mm; shape-outside: polygon(0 0, 40mm 0, 10mm 100%, 0 100%);"></div>
<h2 class="my-2">手指拼写页。</h2>
<p class="my-2">如果你仍然有使用你的手，那么这个页面是给你的。
  用手指指着你可以拼写出单词和短语，你的合作伙伴。
  常用的单词可以写在空白框。
  指着字<strong class="bold">“HOME“*</strong>你现在指示你的伴侣
  要使用主簿你的眼睛进行沟通。</p>
:::
::: slot training-page-description
<p class="fsize-3">当你学会了使用此训练页面的基本技术，
  你可以在这本书中使用空白的人写自己的网页。</p>
:::
::: slot table-overlay-01
<div class="abs-at-top-left" style="top: 0.5mm; left: 0.5mm; width: 44mm; height: 44mm;">
  <img class="abs-fill-parent" :src="$withBase('/speakbook/shapes/table-overlay-01.svg')" />
  <div class="abs-at-center bold" style="transform: translate(calc(-50% - 8mm), calc(-50% - 8mm)) rotate(-45deg); color: white;text-align: center;font-size: 18pt;width: 35mm;line-height: 1;">{{ $page.frontmatter.text.training_page }}</div>
</div>
:::

::: slot table-overlay-02
<img class="abs-at-bottom-left rotate-180" style="bottom: 0.5mm; left: 0.5mm; width: 44mm; height: 44mm;" :src="$withBase('/speakbook/shapes/table-overlay-02.svg')" />
:::

::: slot shape-square-2x-img
<img style="width: var(--img-width); height: var(--img-width);" :src="$withBase('/speakbook/shapes/square-2x.svg')" />
:::
::: slot shape-heart-2x-img
<img style="width: var(--img-width); height: var(--img-width);" :src="$withBase('/speakbook/shapes/heart-2x.svg')" />
:::
::: slot shape-circle-2x-img
<img style="width: var(--img-width); height: var(--img-width);" :src="$withBase('/speakbook/shapes/circle-2x.svg')" />
:::
::: slot shape-triangle-2x-img
<img style="width: var(--img-width); height: var(--img-width);" :src="$withBase('/speakbook/shapes/triangle-2x.svg')" />
:::
::: slot shape-square-1x-img
<img style="width: var(--img-width); height: var(--img-width);" :src="$withBase('/speakbook/shapes/square-1x.svg')" />
:::
::: slot shape-heart-1x-img
<img style="width: var(--img-width); height: var(--img-width);" :src="$withBase('/speakbook/shapes/heart-1x.svg')" />
:::
::: slot shape-circle-1x-img
<img style="width: var(--img-width); height: var(--img-width);" :src="$withBase('/speakbook/shapes/circle-1x.svg')" />
:::
::: slot shape-triangle-1x-img
<img style="width: var(--img-width); height: var(--img-width);" :src="$withBase('/speakbook/shapes/triangle-1x.svg')" />
:::
::: slot star-16p-bkg
<img class="fill-width fill-height" :src="$withBase('/speakbook/shapes/star-16p.svg')" />
:::
::: slot cut-out-center-guide
<div class="pos-rel flex-h justify-content-center" style="width: var(--cut-out-center-guide-width); height: var(--cut-out-center-guide-height);">
  <img class="abs-fill-parent" :src="$withBase('/speakbook/shapes/cut-out-center-guide.svg')" />
  <div class="wmode-vertical-lr rotate-180 fsize-10 v-oneline-fsize-10 bold grey-color text-center">
    {{ $page.frontmatter.text.cut_out_this_part }}
  </div>
</div>
:::
::: slot cut-out-right-side-guide-01
<div class="flex-h height-100ph grey-color">
  <img style="width: 44.5mm; height: 287.2mm;" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide.svg')" />
  <div class="flex-v mx-auto fsize-8 v-oneline-fsize-8 bold">
    <div v-for="i in 2" class="wmode-vertical-lr rotate-180 flex-grow-1 text-center">
      {{ $page.frontmatter.text.cut_out_this_part }}
    </div>
  </div>
</div>
:::
::: slot cut-out-right-side-guide-02
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-02.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-03
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-03.svg')" />
  <div class="white-color wmode-vertical-lr rotate-180 fsize-8 bold flex-v items-align-center justify-content-center" style="position: absolute; top: 2mm; left: 0mm; width: 10mm; height: 28mm;">{{ $page.frontmatter.text.HOME }}</div>
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-04
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 30mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-04.svg')" />
  <div class="red-color wmode-vertical-lr rotate-180 fsize-8 bold flex-v items-align-center justify-content-center" style="position: absolute; top: 30.5mm; left: 0mm; width: 10mm; height: 28mm;">{{ $page.frontmatter.text.SPELL }}</div>
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-05
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 90mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-05.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-06
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 90mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-06.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-07
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-07.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-08
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 10mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-08.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-09
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-bottom: 80mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-09.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-10
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-bottom: 90mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-10.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-11
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-11.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-12
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-12.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-13
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-bottom-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-13.svg')" />
</CutOutSideGuide>
:::
::: slot cover-footer
<div class="flex-h items-align-center lheight-1_5x" style="width: calc(var(--page-width) - 60mm);">
  <p class="cover-footer-text">
    <span class="fsize-8 bold">非言语交际系统</span><br>
    <span class="red-color fsize-8 bold">www.speakbook.org</span><br>
    <span class="fsize-4">Speakbook第四版©2011帕特里克·乔伊斯</span>
  </p>
  <div class="flex-grow-1"></div>
  <img style="width: 30mm;height: 30mm;" :src="$withBase('/speakbook/images/PublishedByAce.svg')" />
</div>
:::

::: slot inst-01-flt-right-content
<div class="abs-fill-parent flex-h" style="align-items: flex-end;">
  <div class="flex-grow-1"></div>
  <div class="flex-v">
    <img class="m-1" style="width: 58.5mm; height: 79.7mm; box-sizing: border-box;" :src="$withBase('/speakbook/images/01.png')">
    <div class="m-1 p-1 flex-grow-1 flt-box" style="width: 57.5mm; min-height: 79.7mm; box-sizing: border-box;">
      <h3 class="my-1 fsize-5">如何写上speakbook</h3>
      <p class="my-2 fsize-4_5">正是你写上speakbook将取决于您的特定需求是什么，但不管你写的，重要的是，任何跨页的每一侧上有相同的文字，他们是彼此的镜像 - 在上面的例子。你和你的伴侣说不同的语言？没问题 - 只要写两边不同的语言。</p>
    </div>
  </div>
</div>
:::
::: slot inst-01-content
<div class="p-1 text-center">
  <speakbooktextfourcolorbkg class="speakbook-title fsize-10 p-1 bold" :text="$page.frontmatter.text.SPEAKBOOK"></speakbooktextfourcolorbkg>
</div>
<p>Speakbook是谁也无法发言，提出用他们的手或手臂困难的人一个非言语交际的工具，但谁保留使用他们的眼睛。此版本的人谁可以阅读和拼写。对于版本的非读者，外语版本，以及袖珍版，请访问：<b>www.speakbook.org</b></p>
<h2 class="fsize-6">使用说明。</h2>
<p>要开始，你需要;在speakbook，黑色，非永久性白板笔，布来擦出来，一个讲的合作伙伴。</p>
<p>你和你的伴侣说对面坐彼此相距约三英尺。根据您的视力，你会发现它有助于减少或增加这个距离。打开speakbook到后盖内的培训页面。这填补了已经帮助您学习的基本技术。当你“已经掌握了它，你可以写你自己的网页，使用提供空白的。弯曲折叠，书回来，拿着它你之间，所以你都面临着“培训”页，并且可以通过中间的孔看到对方的眼睛。你现在看选择在页面上决定哪一个通信。当你“已经决定，你指示你的伴侣，你已经准备好开始
 - 这可能是通过看你的伴侣和闪烁，或晃着你的眼睛向上和向下 - 无论适合你。然后看你想要的消息，一秒钟左右，其次是大符号相同，由消息侧面的小东西。然后，您的伙伴跟随你的眼球运动 - 比如他可能会发现，你已经看过了板之后的大三角形的左上方，让他知道你一定想说“喝茶！“。他接着说，“那杯茶！”出声来了，你确认此有眨眼，或其他一些预先安排的信号</p>
<p>这是使用speakbook的基本技术。现在，你需要学习如何使用书中的其他页面，因为speakbook在于它的能力是真正的天才，让您轻松访问数百你自己选择的词组，短语，你可以在任何时候发生变化，仅湿布和一个笔的笔划。</p>
:::

::: slot inst-02-flt-right-label
<div class="pos-rel fill-height fill-width">
  <img class="abs-fill-parent" :src="$withBase('/speakbook/shapes/inst-02-right-label-bkg.svg')">
  <div class="fsize-8 abs-at-center" style="transform: translate(calc(-50% + 18px), calc(-50% - 18px)) rotate(45deg); color: white;">{{ $page.frontmatter.text.instructions }}</div>
</div>
:::
::: slot inst-02-flt-left-content
<div class="flex-h" style="padding: 3mm;">
  <div class="flex-grow-1 flex-v">
    <img class="m-1" style="width: 57.5mm; height: 79.7mm; box-sizing: border-box;" :src="$withBase('/speakbook/images/02.png')"  />
    <img class="m-1" style="width: 57.5mm; height: 79.7mm; box-sizing: border-box;" :src="$withBase('/speakbook/images/03.png')"  />
  </div>
  <Content slot-key="cut-out-center-guide" />
</div>
:::
::: slot inst-02-content
<p>在speakbook每页上有14个或15，你可以写自己的文字的空白部分。为了使用户可以在不同页面之间移动，我们已经创建了“家“的网页。这是在书的前面找到，并标有在页面边缘的黑色的“首页“标签。我们的想法是，你写你用最本网页上的7个短语，因为它是你总是开始页面。此外，在空白带8你写链接到其他8空白的双页。这些应该是你的生活，需要更深入的固定词组的部分，这些可能会像洗澡的区域，或在车上走出去。左边是一个可能的布局为“HOME“页面的一个例子。该8个字粗体大写字母都链接到本书中其他位置的双跨页。你要做的就是，你找到一个空白页，写，例如，边缘选项卡上的“床“，然后在带你写的14个短语最相关的就寝时间。然后你重复这个过程对于其他7个环节，直到你的通讯录已满。如果你犯了一个错误，或者想换一个短语，然后只需用湿布擦拭，并重新开始。</p>
<p>要使用speakbook，你指示你的伴侣，你想沟通。你的伴侣打开speakbook的“HOME“页面和你沟通，例如，“床”。您的合作伙伴然后转向了“床“页面，然后就可以沟通，“我想睡觉” - 或什么的。每个页面都有“家“和“拼”预打印就可以了。 “家“是让你可以随时可以回到“家”页面（你可能希望有一个“杯茶！“采取跟你上床）。 “符咒”页面，可以拼出个别单词和短语，唐“吨出现在本书的其他部分。它的工作原理类似的方式为其他网页，但有一点不同。在此页面上有6个颜色块，每个上面有6个色的字母或数字。整个字母是存在的，再加上数字1-9（零使用字母O）。你看看你想沟通，争取一秒钟左右的信件，随后在相同的颜色作为您所选择的信的彩色块。你的伴侣遵循你的眼睛，看到你已经看过，例如，在左上块，然后右上块（这是绿色的），并且知道你想要的“C“。你的伴侣说，“C“出声确认，你移动到下一个字母。你的伴侣可能的猜测时，这个词的其余部分，以加快进程。</p>
<p>Speakbook预留有119个短语你选择的。如果这还不够，或者如果你需要在一个特定的部分超过14个短语，那么你可以通过编写每行两个词，一个黑色的笔，一个红色一倍的容量。您可以选择以正常方式黑色短语，一个红色的，当你在大符号闪烁。</p>
:::

::: slot last-page-content
<div style="width: 10mm;"></div>
<div class="flex-v block-holder b10x">
  <Content slot-key="last-page-heading" />
  <div class="flex-v mt-2"> <!-- split between letters keys and others -->
    <div class="flex-h">
      <div class="flex-v block-holder b3x">
        <div class="block b0x flex-grow-1" style="margin-left: 8mm;"></div>
        <div class="block b3x"></div>
        <div class="block b3x"></div>
        <div class="block b3x"></div>
        <div class="block b3x"></div>
        <div class="block b3x"></div>
        <div class="flex-h flex-wrap">
          <div class="block">{{ $page.frontmatter.text._GBP }}</div>
          <div class="block">{{ $page.frontmatter.text._USD }}</div>
          <div class="block">{{ $page.frontmatter.text._percent }}</div>
          <div class="block">{{ $page.frontmatter.text._plus }}</div>
          <div class="block">{{ $page.frontmatter.text._minus }}</div>
          <div class="block">{{ $page.frontmatter.text._slash }}</div>
          <div class="block">{{ $page.frontmatter.text._X }}</div>
          <div class="block">{{ $page.frontmatter.text._equal }}</div>
          <div class="block">{{ $page.frontmatter.text._question_mark }}</div>
        </div>
        <div class="block b3x white-color black-bkg">{{ $page.frontmatter.text.HOME }}</div>
        <div class="block b3x yellow-bkg" style="font-size: 18pt;">{{ $page.frontmatter.text.THANK_YOU }}</div>
      </div>
      <div class="flex-v block-holder b4x">
        <div class="block b4x">
        </div>
        <div class="flex-grow-1"></div>
      </div>
      <div class="flex-v block-holder b3x">
        <div class="block b3x"></div>
        <div class="block b3x"></div>
        <div class="block b3x"></div>
        <div class="block b3x"></div>
        <div class="block b3x"></div>
        <div class="block b3x"></div>
        <div class="block b3x"></div>
        <div class="flex-h flex-wrap">
          <div class="block pink-bkg">{{ $page.frontmatter.text._one }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._two }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._three }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._four }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._five }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._six }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._seven }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._eight }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._nine }}</div>
          <Content class="block" slot-key="redheart-img" />
          <div class="block pink-bkg">{{ $page.frontmatter.text._zero }}</div>
          <Content class="block" slot-key="smileyface-img" />
        </div>
      </div>
    </div>
    <div class="flex-h flex-wrap">
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Q }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.W }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.E }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.R }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.T }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Y }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.U }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.I }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.O }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.P }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.A }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.S }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.D }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.F }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.G }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.H }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.J }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.K }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.L }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text._atsign }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Z }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.X }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.C }}</div>
      <div class="block b1_5x yellow-bkg">{{ $page.frontmatter.text.YES }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.V }}</div>
      <div class="block b1_5x yellow-bkg">{{ $page.frontmatter.text.NO }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.B }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.N }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.M }}</div>
    </div>
  </div>
</div>
:::

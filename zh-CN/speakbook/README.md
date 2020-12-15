---
layout: SpeakBook
external_templates_data:
  instruction_page01: base/instruction-page01.yaml
  instruction_page02: base/instruction-page02.yaml
  grid_page04: base/grid-page04.yaml
  grid_page05: base/grid-page05.yaml
  grid_page06: base/grid-page06.yaml
  grid_page07: base/grid-page07.yaml
  grid_page08: base/grid-page08.yaml
  grid_page09: base/grid-page09.yaml
  grid_page24: base/grid-page24.yaml
  grid_page25: base/grid-page25.yaml
external_append_content:
  - common/imgs.ejs
  - zh-CN/guides.ejs
  - zh-CN/instructions-page.ejs
  - zh-CN/intro.ejs
  - zh-CN/last-page.ejs
  - zh-CN/misc.ejs
text:
  ring_bind_edge: 环沿着这条边装订
  cut_out_this_part: 切出这部分内容。
  SPEAKBOOK: SPEAKBOOK
  edition_nth: 第四
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
inlinecss:
  --page-width: 210mm
  --page-height: 297mm
  --cut-out-center-guide-width: 68mm
  --cut-out-center-guide-height: 162mm
instruction_pages:
  - copyof: instruction_page01
  - copyof: instruction_page02
grid_pages:
  - name: page04
    copyof: grid_page04
  - name: page05
    copyof: grid_page05
  - name: page06
    copyof: grid_page06
  - name: page07
    copyof: grid_page07
  - name: page08
    copyof: grid_page08
  - name: page09
    copyof: grid_page09
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
    copyof: grid_page24
  - name: page25
    copyof: grid_page25
---


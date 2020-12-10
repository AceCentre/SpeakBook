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
  - slots/guides-common.ejs
  - slots/imgs-common.ejs
  - slots/instruction-page-common.ejs
  - slots/intro-common.ejs
  - slots/misc-common.ejs
  - slots/last-page-common.ejs
  - slots/last-page-rev01.ejs
text:
  ring_bind_edge: Ring bind along this edge
  cut_out_this_part: Cut out this part.
  SPEAKBOOK: SPEAKBOOK
  edition_nth: 5th
  EDITION: EDITION
  color_blind: Colour Blind
  friendly: Friendly!
  instructions: instructions
  HOME_PAGE: HOME PAGE
  SPELL: SPELL
  HOME: HOME
  THANK_YOU: THANK YOU
  A: A
  B: B
  C: C
  D: D
  E: E
  F: F
  G: G
  H: H
  I: I
  J: J
  K: K
  L: L
  M: M
  N: N
  O: O
  P: P
  Q: Q
  R: R
  S: S
  T: T
  U: U
  V: V
  W: W
  X: X
  Y: Y
  Z: Z
  _zero: 0
  _one: 1
  _two: 2
  _three: 3
  _four: 4
  _five: 5
  _six: 6
  _seven: 7
  _eight: 8
  _nine: 9
  im_too_hot: I'm too hot
  im_too_cold: I'm too cold
  cup_of_tea: Cup of tea!
  cup_of_coffee: Cup of coffee!
  i_love_you: I love you
  yes: yes
  no: no
  CAR: CAR
  BED: BED
  CLOTHING: CLOTHING
  BATHTIME: BATHTIME
  MEALS: MEALS
  COMFORT: COMFORT
  TOILET: TOILET
  DRINKS: DRINKS
  TRAINING_PAGE: TRAINING PAGE
  training_page: training page
  _GBP: '£'
  _USD: '$'
  _percent: '%'
  _plus: '+'
  _minus: '-'
  _slash: '/'
  _X: X
  _equal: '='
  _question_mark: '?'
  _atsign: '@'
  YES: YES
  NO: NO
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
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page12
    comment: no cut out
    copyof: page08
  - name: page13
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-07
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page14
    comment: no cut out
    copyof: page08
  - name: page15
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-08
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page16
    comment: no cut out
    copyof: page08
  - name: page17
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-09
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page18
    comment: no cut out
    copyof: page08
  - name: page19
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-10
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page20
    comment: no cut out
    copyof: page08
  - name: page21
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-11
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page22
    comment: no cut out
    copyof: page08
  - name: page23
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-12
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page24
    copyof: grid_page24
  - name: page25
    copyof: grid_page25
---


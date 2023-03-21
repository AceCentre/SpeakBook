---
layout: SpeakBook
classic_edition: true
external_templates_data:
  instruction_page01: base/instruction-page01.yaml
  instruction_page02: base/instruction-page02.yaml
  grid_page04: base/classic/grid-page04.yaml
  grid_page05: base/classic/grid-page05.yaml
  grid_page06: base/classic/grid-page06.yaml
  grid_page07: base/classic/grid-page07.yaml
  grid_page08: base/classic/grid-page08.yaml
  grid_page09: base/classic/grid-page09.yaml
  grid_page24: base/classic/grid-page24.yaml
  grid_page25: base/classic/grid-page25.yaml
  text_dict: en/speakbook-text.yaml
external_append_content:
  - common/guides.ejs
  - common/imgs.ejs
  - common/misc.ejs
  - common/last-page.ejs
  - sr/instructions-page.ejs
  - sr/intro.ejs
  - sr/last-page-header.ejs
  - sr/misc.ejs
text:
  copyof: text_dict
  ring_bind_edge: Povežite prstenom preko ove ivice
  cut_out_this_part: Isecite ovaj deo.
  SPEAKBOOK: PRIČANKA
  edition_nth: Peto
  EDITION: Izdanje
  color_blind: Ukoliko ne razlikujete boje
  friendly: Prikladno!
  instructions: Uputstva
  HOME_PAGE: POČETNA STRANA
  SPELL: SPELOVANJE
  HOME: POČETNA
  THANK_YOU: HVALA
  A: А
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
  Q: Š
  R: R
  S: S
  T: T
  U: U
  V: V
  W: Č
  X: Ž
  Y: Ć
  Z: Z
  _zero: "0"
  _one: "1"
  _two: "2"
  _three: "3"
  _four: "4"
  _five: "5"
  _six: "6"
  _seven: "7"
  _eight: "8"
  _nine: "9"
  im_too_hot: Vruće mi je
  im_too_cold: Hladno mi je
  cup_of_tea: Šolja čaja!
  cup_of_coffee: Šolja kafe!
  i_love_you: Volim te
  yes: Da
  no: Ne
  CAR: AUTO
  BED: KREVET
  CLOTHING: ODEĆA
  BATHTIME: KUPANJE
  MEALS: OBROCI
  COMFORT: UDOBNOST
  TOILET: TOALET
  DRINKS: PIĆE
  TRAINING_PAGE: STRANICA ZA VEŽBANJE
  training_page: stranica za vežbanje
  _GBP: Din
  _USD: $
  _percent: "%"
  _plus: +
  _minus: "-"
  _slash: /
  _X: X
  _equal: =
  _question_mark: "?"
  _atsign: "@"
  YES: DA
  NO: NE
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

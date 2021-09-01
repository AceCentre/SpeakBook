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
  - en/instructions-page.ejs
  - en/intro.ejs
  - en/last-page-header.ejs
  - en/misc.ejs
text:
  copyof: text_dict
  ring_bind_edge: Me here te mowhiti ki tenei pito
  cut_out_this_part: Tapahia tenei waahanga.
  SPEAKBOOK: PANUITANGA
  edition_nth: "5"
  EDITION: PANUITANGA
  color_blind: Matapo Tae
  friendly: Whakahoahoa!
  instructions: tohutohu
  HOME_PAGE: WHAKAPAPA KĀINGA
  SPELL: MAHI
  HOME: KĀINGA
  THANK_YOU: NGA MAHI KATOA
  A: A
  B: B
  C: C
  D: D
  E: E
  F: F
  G: G
  H: H
  I: Ko au
  J: J
  K: K
  L: L
  M: M
  N: N
  O: E
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
  im_too_hot: He wera rawa ahau
  im_too_cold: He makariri rawa ahau
  cup_of_tea: Kapu tī!
  cup_of_coffee: Kapu Kawhe!
  i_love_you: Aroha ahau ki a koe
  yes: āe
  no: kāo
  CAR: WAIATA
  BED: KOHE
  CLOTHING: KAKAHU
  BATHTIME: TE WANANGA
  MEALS: NGA Kai
  COMFORT: Tuhinga
  TOILET: TOILETA
  DRINKS: INUMU
  TRAINING_PAGE: HE PANUI WHAKATAU
  training_page: whaarangi whakangungu
  _GBP: £
  _USD: $
  _percent: "%"
  _plus: +
  _minus: "-"
  _slash: /
  _X: X
  _equal: =
  _question_mark: "?"
  _atsign: "@"
  YES: ĀE
  NO: KORE
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

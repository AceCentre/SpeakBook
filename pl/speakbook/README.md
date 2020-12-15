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
  - common/guides.ejs
  - common/imgs.ejs
  - common/misc.ejs
  - common/last-page.ejs
  - pl/instructions-page.ejs
  - pl/intro.ejs
  - pl/last-page-header.ejs
  - pl/misc.ejs
text:
  ring_bind_edge: Pierścień wiążą wzdłuż tej krawędzi
  cut_out_this_part: Wyciąć ten fragment.
  SPEAKBOOK: SPEAKBOOK
  edition_nth: 5-ci
  EDITION: WYDANIE
  color_blind: Kolor Blind
  friendly: Przyjazny!
  instructions: instrukcje
  HOME_PAGE: STRONA GŁÓWNA
  SPELL: ZAKLĘCIE
  HOME: DOM
  THANK_YOU: DZIĘKUJĘ CI
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
  _zero: ""
  _one: "1"
  _two: "2"
  _three: "3"
  _four: "4"
  _five: "5"
  _six: "6"
  _seven: "7"
  _eight: "8"
  _nine: "9"
  im_too_hot: Jestem zbyt gorący
  im_too_cold: Jestem zbyt zimno
  cup_of_tea: Filiżanka herbaty!
  cup_of_coffee: Kubek kawy!
  i_love_you: kocham Cię
  yes: tak
  no: Nie
  CAR: SAMOCHÓD
  BED: ŁÓŻKO
  CLOTHING: ODZIEŻ
  BATHTIME: CZAS NA KĄPIEL
  MEALS: POSIŁKI
  COMFORT: KOMFORT
  TOILET: TOALETA
  DRINKS: NAPOJE
  TRAINING_PAGE: STRONA SZKOLENIA
  training_page: strona handlowym
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
  YES: TAK
  NO: NIE
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
    comment2: remove rotate 180deg
    start_spacing_inlinecss:
    inlinecss:
  - name: page12
    comment: no cut out
    copyof: page08
  - name: page13
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-07
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss:
    __OVERWRITE_inlinecss:
  - name: page14
    comment: no cut out
    copyof: page08
  - name: page15
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-08
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss:
    __OVERWRITE_inlinecss:
  - name: page16
    comment: no cut out
    copyof: page08
  - name: page17
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-09
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss:
    __OVERWRITE_inlinecss:
  - name: page18
    comment: no cut out
    copyof: page08
  - name: page19
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-10
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss:
    __OVERWRITE_inlinecss:
  - name: page20
    comment: no cut out
    copyof: page08
  - name: page21
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-11
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss:
    __OVERWRITE_inlinecss:
  - name: page22
    comment: no cut out
    copyof: page08
  - name: page23
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-12
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss:
    __OVERWRITE_inlinecss:
  - name: page24
    copyof: grid_page24
  - name: page25
    copyof: grid_page25
---


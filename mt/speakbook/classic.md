---
layout: SpeakBook
external_templates_data:
  instruction_page01: base/instruction-page01.yaml
  instruction_page02: base/instruction-page02.yaml
  grid_page04: base/classic/grid-page04.yaml
  grid_page05: base/classic/grid-page05.yaml
  grid_page06: mt/grid-page06.yaml
  grid_page07: mt/grid-page07.yaml
  grid_page08: base/classic/grid-page08.yaml
  grid_page09: base/classic/grid-page09.yaml
  grid_page24: base/classic/grid-page24.yaml
  grid_page25: base/classic/grid-page25.yaml
external_append_content:
  - common/imgs.ejs
  - mt/guides.ejs
  - mt/instructions-page.ejs
  - mt/intro.ejs
  - mt/last-page.ejs
  - mt/misc.ejs
classic_edition: true
text:
  ring_bind_edge: Agħmel il-binding hawn
  cut_out_this_part: Aqta' din il-biċċa
  SPEAKBOOK: SPEAKBOOK
  classic: classic
  EDITION: edizzjoni
  color_blind: Kulur Għomja
  friendly: Ħbiberija
  instructions: istruzzjonijiet
  HOME_PAGE: HOME PAGE
  SPELL: TAGĦLIF
  HOME: DAR
  THANK_YOU: GRAZZI
  A: A
  B: B
  C: Ċ
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
  Y: Ż
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
  im_too_hot: Qed inħoss is-sħana
  im_too_cold: Qed inħoss il-bard
  cup_of_tea: Tazza te!
  cup_of_coffee: Tazza kafè!
  i_love_you: Inħobbok
  yes: iva
  no: le
  CAR: KAROZZA
  BED: SODDA
  CLOTHING: Ħwejjeġ
  BATHTIME: ĦIN IL-BANJU
  MEALS: IKEL
  COMFORT: KUMDITÀ
  TOILET: TOILET
  DRINKS: XORB
  TRAINING_PAGE: PAĠNA TA' PRATTIKA
  training_page: paġna ta' prattika
  _GBP: €
  _USD: £
  _percent: "%"
  _plus: +
  _minus: "-"
  _slash: /
  _X: X
  _equal: =
  _question_mark: "?"
  _atsign: "@"
  YES: IVA
  NO: LE
  edition_nth: "5"
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
    columns:
      0:
        rows:
          0:
            rows:
              3:
                comment: CAR
                text_inlinecss:
                  font-size: 12pt
      2:
        rows:
          0:
            rows:
              0:
                comment: i'm too hot
                text_inlinecss:
                  font-size: 20pt
  - name: page25
    copyof: grid_page25
    columns:
      0:
        rows:
          4:
            rows:
              3:
                comment: CAR
                text_inlinecss:
                  font-size: 18pt
      2:
        rows:
          4:
            rows:
              0:
                comment: i'm too hot
                text_inlinecss:
                  font-size: 20pt
---

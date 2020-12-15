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
  - zu/guides.ejs
  - zu/instructions-page.ejs
  - zu/intro.ejs
  - zu/last-page.ejs
  - zu/misc.ejs
text:
  ring_bind_edge: Bopha izindandatho kulolu onqenqemeni
  cut_out_this_part: Sika le ngxenye.
  SPEAKBOOK: Incwadi yokukhuluma
  edition_nth: 5th
  EDITION: ISIHLOKO
  color_blind: Ukungahlukanisi umbala
  friendly: Mngani!
  instructions: imiyalo
  HOME_PAGE: IKHASI LASEKHAYA
  SPELL: ISIPELE
  HOME: IKHAYA
  THANK_YOU: NGIYABONGA
  A: A
  B: B
  C: C
  D: D
  E: E
  F: F
  G: G
  H: H
  I: Mina
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
  im_too_hot: |
    Ngiyasha kakhulu
  im_too_cold: Ngiyagodola Kakhulu
  cup_of_tea: Inkomishi yetiye!
  cup_of_coffee: Inkomishi yekhofi!
  i_love_you: Ngiyakuthanda
  yes: yebo
  no: cha
  CAR: Imoto
  BED: umbhede
  CLOTHING: Izingubo Zokugqoka
  BATHTIME: Isikhathi Sokugeza
  MEALS: Ukudla
  COMFORT: Induduzo
  TOILET: Indlu yangasese
  DRINKS: Iziphuzo
  TRAINING_PAGE: Ikhasi lokuqeqeshwa
  training_page: ikhasi lokuqeqeshwa
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
  YES: YEBO
  NO: CHA
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
  --fsize-4: 9pt
  --fsize-4_5: 10pt
  --fsize-5: 11pt
  --fsize-6: 13pt
  --fsize-8: 15pt
  --fsize-9: 17pt
  --fsize-10: 22pt
  --fsize-11: 25pt
  --fsize-12: 29pt
  --fsize-13: 37pt
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
    columns:
      0:
        rows:
          4:
            entries:
              5:
                comment: HOME
                inlinecss:
                  font-size: 14pt
          
      2:
        rows:
          2:
            entries:
              2:
                comment: I (Mina)
                inlinecss:
                  font-size: 18pt
                  
  - name: page07
    copyof: grid_page07
    columns:
      0:
        rows:
          0:
            entries:
              3:
                comment: HOME
                inlinecss:
                  font-size: 14pt
      2:
        rows:
          2:
            entries:
              0:
                comment: I (Mina)
                inlinecss:
                  font-size: 18pt
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


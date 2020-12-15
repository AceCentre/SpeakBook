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
  - hu/guides.ejs
  - hu/instructions-page.ejs
  - hu/intro.ejs
  - hu/last-page.ejs
  - hu/misc.ejs
text:
  ring_bind_edge: Օղակաձեւ կապեն երկայնքով այս եզրին
  cut_out_this_part: "Կտրել է այս մասը:"
  SPEAKBOOK: SPEAKBOOK
  edition_nth: 4-րդ
  EDITION: EDITION
  color_blind: գույն Blind
  friendly: Friendly!
  instructions: հրահանգներ
  HOME_PAGE: ԳԼԽԱՎՈՐ ԷՋ
  SPELL: կախարդանք
  HOME: ՏՈՒՆ
  THANK_YOU: ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ
  A: Ա
  B: Բ
  C: Գ
  D: Տ
  E: Է
  F: Ֆ
  G: Կ
  H: Հ
  I: Ի
  J: Ճ
  K: Ք
  L: Լ
  M: Մ
  N: Ն
  O: Ո
  P: Պ
  Q: Խ
  R: Ր
  S: Ս
  T: Դ
  U: Ը
  V: Ւ
  W: Վ
  X: Ց
  Y: Ե
  Z: Զ
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
  im_too_hot: Ես չափազանց շոգ
  im_too_cold: Ես շատ ցուրտ
  cup_of_tea: Բաժակ թեյ!
  cup_of_coffee: Բաժակ սուրճ!
  i_love_you: Ես սիրում եմ քեզ
  yes: այո
  no: ոչ
  CAR: ՄԵՔԵՆԱՆ
  BED: ՄԱՀՃԱԿԱԼՆԵՐԻ
  CLOTHING: ՀԱԳՈՒՍՏ
  BATHTIME: Bathtime
  MEALS: ՈՒՏԵՍՏՆԵՐ
  COMFORT: COMFORT
  TOILET: ԶՈՒԳԱՐԱՆԻ
  DRINKS: ԽՄԻՉՔՆԵՐ
  TRAINING_PAGE: ՈՒՍՈՒՄՆԱԿԱՆ PAGE
  training_page: առեւտրային էջ
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
  YES: ԱՅՈ
  NO: ՈՉ
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
  --fsize-11: 23pt
  --fsize-12: 24pt
  --fsize-13: 28pt
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
                  font-size: 12pt
---



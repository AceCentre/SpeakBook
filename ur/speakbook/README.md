---
layout: SpeakBook
external_templates_data:
  instruction_page01: base/rtl/instruction-page01.yaml
  instruction_page02: base/rtl/instruction-page02.yaml
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
  - common/rtl/guides.ejs
  - common/rtl/misc.ejs
  - ur/instructions-page.ejs
  - ur/intro.ejs
  - ur/last-page.ejs
  - ur/misc.ejs
text:
  ring_bind_edge: رنگ اس کنارے کے ساتھ ساتھ پابند
  cut_out_this_part: اس حصہ کاٹ.
  SPEAKBOOK: SPEAKBOOK
  edition_nth: 5th کے
  EDITION: EDITION
  color_blind: رنگوں کی پہچان نہ کر سکنے والا
  friendly: دوستانہ!
  instructions: ہدایات
  HOME_PAGE: ہوم پیج
  SPELL: جادو
  HOME: گھر
  THANK_YOU: آپ کا شکریہ
  A: م
  B: م
  C: ے
  D: ر
  E: ر
  F: ر
  G: ل
  H: ہ
  I: ب
  J: ا
  K: ک
  L: ی
  M: ع
  N: غ
  O: ج
  P: ح
  Q: ط
  R: د
  S: و
  T: ٹ
  U: ت
  V: س
  W: ص
  X: ف
  Y: پ
  Z: ق
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
  im_too_hot: میں نے بہت گرم ہوں
  im_too_cold: میں بھی سرد ہوں
  cup_of_tea: چائے کا کپ!
  cup_of_coffee: کافی کا کپ!
  i_love_you: میں تم سے پیار کرتا ہوں
  yes: جی ہاں
  no: نہیں
  CAR: گاڑی
  BED: BED
  CLOTHING: کپڑے
  BATHTIME: نہانے کا وقت
  MEALS: کھانے
  COMFORT: آرام
  TOILET: بیت الخلاء
  DRINKS: مشروبات
  TRAINING_PAGE: ٹریننگ PAGE
  training_page: ٹریڈنگ صفحہ
  _GBP: £
  _USD: $
  _percent: ٪
  _plus: +
  _minus: "-"
  _slash: /
  _X: ایکس
  _equal: =
  _question_mark: ؟
  _atsign: "@"
  YES: جی ہاں
  NO: نہیں
slots_in_need_for_translation:
  - training-page-description
  - last-page-heading
  - cover-footer
  - inst-01-flt-right-content
  - inst-01-content
  - inst-02-flt-left-label
  - inst-02-content
rtl: true
comment_for_pagesize: page size is a little smaller that A4 due to an unknown issue with pdf renderer
inlinecss:
  --page-width: 209.5mm
  --page-height: 296.35mm
  --cut-out-center-guide-width: 68mm
  --cut-out-center-guide-height: 162mm
  --fsize-9: 21pt
  --fsize-10: 24pt
  --fsize-11: 27pt
  --fsize-12: 29pt
  --fsize-13: 38pt
instruction_pages:
  - copyof: instruction_page01
  - copyof: instruction_page02  
grid_pages:
  - name: page04
    copyof: grid_page04
  - name: page05
    copyof: grid_page05
    start_spacing_slotname: cut-out-left-side-guide-03
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
  - name: page07
    copyof: grid_page07
    start_spacing_slotname: cut-out-left-side-guide-04
    columns:
      0:
        rows:
          0:
            entries:
              3:
                comment: HOME
                inlinecss:
                  font-size: 14pt
  - name: page08
    copyof: grid_page08
  - name: page09
    copyof: grid_page09
    start_spacing_slotname: cut-out-left-side-guide-05
  - name: page10
    comment: no cut out
    copyof: page08
  - name: page11
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-06
  - name: page12
    comment: no cut out
    copyof: page08
  - name: page13
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-07
  - name: page14
    comment: no cut out
    copyof: page08
  - name: page15
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-08
  - name: page16
    comment: no cut out
    copyof: page08
  - name: page17
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-09
  - name: page18
    comment: no cut out
    copyof: page08
  - name: page19
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-10
  - name: page20
    comment: no cut out
    copyof: page08
  - name: page21
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-11
  - name: page22
    comment: no cut out
    copyof: page08
  - name: page23
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-12
  - name: page24
    copyof: grid_page24
    columns:
      0:
        rows:
          0:
            __OVERWRITE_rows:
              - image: shape-heart-1x-img
                text_key: i_love_you
                text_inlinecss:
                  font-size: 12pt
              - image: shape-circle-1x-img
                text_key: yes
              - image: shape-triangle-1x-img
                text_key: no
              - image: shape-psquare-1x-img
                text_key: CAR
  - name: page25
    copyof: grid_page25
    start_spacing_slotname: cut-out-left-side-guide-13
    columns:
      0:
        rows:
          4:
            __OVERWRITE_rows:
              - image: shape-heart-1x-img
                text_key: i_love_you
                text_inlinecss:
                  font-size: 12pt
              - image: shape-circle-1x-img
                text_key: yes
              - image: shape-triangle-1x-img
                text_key: no
              - image: shape-square-1x-img
                text_key: CAR
---


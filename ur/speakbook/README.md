---
layout: SpeakBook
text:
  ring_bind_edge: رنگ اس کنارے کے ساتھ ساتھ پابند
  cut_out_this_part: اس حصہ کاٹ.
  SPEAKBOOK: SPEAKBOOK
  edition_nth: 4th کے
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
  - content_slotname: inst-01-content
    floating_elements:
      - comment: left spacing (right side for rtl)
        dir: left
        inlinecss:
          --spacing-offset-top: 17mm
          --left-spacing: 13mm
          --max-left-spacing: 40mm
          width: var(--max-left-spacing)
          height: var(--page-height)
          shape-outside: polygon(var(--max-left-spacing) var(--spacing-offset-top), 0
            var(--spacing-offset-top), calc(var(--max-left-spacing) -
            var(--left-spacing)) calc(var(--spacing-offset-top) + 20mm),
            calc(var(--max-left-spacing) - var(--left-spacing))
            var(--page-height), var(--max-left-spacing) var(--page-height))
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
        slotname: cut-out-left-side-guide-02
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
          shape-outside: polygon(0 0, 100% 0, 0 100%)
        slotname: inst-02-flt-left-label
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
            type: table
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: fig
            image: shape-square-2x-img
            text_key: HOME_PAGE
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: table
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
                text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: fig
            image: shape-triangle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
          - inlinecss:
              flex-grow: 1
          - comment: At bottom center
            type: fig
            image: shape-circle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: table
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: fig
            image: shape-heart-2x-img
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: table
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page05
    start_spacing_slotname: cut-out-left-side-guide-03
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At bottom right
            type: table
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
                text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: fig
            image: shape-square-2x-img
            text_key: HOME_PAGE
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At top right
            type: table
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At bottom center
            type: fig
            image: shape-triangle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
          - comment: Guide at center
            type: custom
            slotname: cut-out-center-guide
            inlinecss:
              flex-grow: 1
              transform: rotate(180deg)
          - comment: At top center
            type: fig
            image: shape-circle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
      - inlinecss:
          width: 57mm
        rows:
          - comment: At left bottom
            type: table
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: fig
            image: shape-heart-2x-img
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At top center
            type: table
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
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
    start_spacing_slotname: cut-out-left-side-guide-04
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
            type: table
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
                text_key: HOME
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: fig
            image: shape-square-2x-img
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: table
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
                text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: fig
            image: shape-triangle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
          - inlinecss:
              flex-grow: 1
          - comment: At bottom center
            type: fig
            image: shape-circle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: table
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: fig
            image: shape-heart-2x-img
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: table
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page09
    start_spacing_slotname: cut-out-left-side-guide-05
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At bottom right
            type: table
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
                text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: fig
            image: shape-square-2x-img
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At top right
            type: table
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
                text_key: HOME
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At bottom center
            type: fig
            image: shape-triangle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
          - comment: Guide at center
            type: custom
            slotname: cut-out-center-guide
            inlinecss:
              flex-grow: 1
              transform: rotate(180deg)
          - comment: At top center
            type: fig
            image: shape-circle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
      - inlinecss:
          width: 57mm
        rows:
          - comment: At left bottom
            type: table
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: fig
            image: shape-heart-2x-img
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At top center
            type: table
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
              - image: shape-circle-1x-img
              - image: shape-triangle-1x-img
              - image: shape-square-1x-img
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page10
    comment: no cut out
    copyof: page08
  - name: page11
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-06
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page12
    comment: no cut out
    copyof: page08
  - name: page13
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-07
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page14
    comment: no cut out
    copyof: page08
  - name: page15
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-08
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page16
    comment: no cut out
    copyof: page08
  - name: page17
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-09
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page18
    comment: no cut out
    copyof: page08
  - name: page19
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-10
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page20
    comment: no cut out
    copyof: page08
  - name: page21
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-11
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page22
    comment: no cut out
    copyof: page08
  - name: page23
    copyof: page09
    start_spacing_slotname: cut-out-left-side-guide-12
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page24
    comment: no cut out
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top left
            type: table02
            rowheight: 12mm
            overlay_slotname: table-overlay-01
            rows:
              - image: shape-heart-1x-img
                text_key: i_love_you
              - image: shape-circle-1x-img
                text_key: yes
              - image: shape-triangle-1x-img
                text_key: no
              - image: shape-square-1x-img
                text_key: CAR
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: fig
            fixed: true
            image: shape-square-2x-img
            text_slotname: training-page-description
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: table02
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
                text_key: COMFORT
              - image: shape-circle-1x-img
                text_key: TOILET
              - image: shape-triangle-1x-img
                text_key: DRINKS
              - image: shape-square-1x-img
                text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: fig
            image: shape-triangle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
          - inlinecss:
              flex-grow: 1
          - comment: At bottom center
            type: fig
            image: shape-circle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: table02
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
                text_key: im_too_hot
              - image: shape-circle-1x-img
                text_key: im_too_cold
              - image: shape-triangle-1x-img
                text_key: cup_of_tea
              - image: shape-square-1x-img
                text_key: cup_of_coffee
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: fig
            image: shape-heart-2x-img
            text_key: TRAINING_PAGE
            text_inlinecss:
              font-size: 18pt
            text_at_top: true
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: table02
            rowheight: 12mm
            rows:
              - image: shape-heart-1x-img
                text_key: BED
              - image: shape-circle-1x-img
                text_key: CLOTHING
              - image: shape-triangle-1x-img
                text_key: BATHTIME
              - image: shape-square-1x-img
                text_key: MEALS
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page25
    start_spacing_slotname: cut-out-left-side-guide-13
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At bottom right
            type: table02
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
                text_key: COMFORT
              - image: shape-circle-1x-img
                text_key: TOILET
              - image: shape-triangle-1x-img
                text_key: DRINKS
              - image: shape-square-1x-img
                text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: fig
            fixed: true
            image: shape-square-2x-img
            text_slotname: training-page-description
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At top right
            overlay_slotname: table-overlay-02
            type: table02
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
                text_key: i_love_you
              - image: shape-circle-1x-img
                text_key: yes
              - image: shape-triangle-1x-img
                text_key: no
              - image: shape-square-1x-img
                text_key: CAR
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At bottom center
            type: fig
            image: shape-triangle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
          - comment: Guide at center
            type: custom
            slotname: cut-out-center-guide
            inlinecss:
              flex-grow: 1
              transform: rotate(180deg)
          - comment: At top center
            type: fig
            image: shape-circle-2x-img
            inlinecss:
              padding-top: 10mm
              padding-bottom: 10mm
      - inlinecss:
          width: 57mm
        rows:
          - comment: At left bottom
            type: table02
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
                text_key: BED
              - image: shape-circle-1x-img
                text_key: CLOTHING
              - image: shape-triangle-1x-img
                text_key: BATHTIME
              - image: shape-square-1x-img
                text_key: MEALS
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: fig
            image: shape-heart-2x-img
            text_key: TRAINING_PAGE
            text_inlinecss:
              font-size: 18pt
            text_at_top: true
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At top center
            type: table02
            rowheight: 12mm
            reverserow: true
            rows:
              - image: shape-heart-1x-img
                text_key: im_too_hot
              - image: shape-circle-1x-img
                text_key: im_too_cold
              - image: shape-triangle-1x-img
                text_key: cup_of_tea
              - image: shape-square-1x-img
                text_key: cup_of_coffee
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
<h2 class="my-2">انگلی ہجے صفحہ.</h2>
<p class="my-2">اگر آپ اب بھی آپ کے ہاتھوں کے استعمال ہے، تو اس صفحے کو آپ کے لئے ہے.
  ایک انگلی سے اشارہ کرتے ہوئے کی طرف سے آپ کو آپ کے ساتھی کے لئے الفاظ اور جملے جادو کر سکتے ہیں.
  کثرت سے استعمال الفاظ خالی خانوں میں لکھا جا سکتا ہے.
  لفظ کی طرف اشارہ<strong class="bold">" گھر "*</strong>آپ اس میں اب آپ کے ساتھی کو اشارہ کرتا ہے
  اہم کتاب کا استعمال کرتے ہوئے آپ کی آنکھوں کے ساتھ بات چیت کرنا چاہتے ہیں.</p>
:::
::: slot training-page-description
<p class="fsize-3">آپ کو اس کی تربیت صفحے کا استعمال کرتے ہوئے بنیادی تکنیک سیکھا ہے جب،
  آپ کو اس کتاب میں خالی والوں استعمال آپ کے اپنے صفحات لکھ سکتے ہیں.</p>
:::
::: slot table-overlay-01
<div class="abs-at-top-left" style="top: 0.5mm; right: 0.5mm; width: 44mm; height: 44mm;">
  <img class="abs-fill-parent" :src="$withBase('/speakbook/shapes/table-overlay-01-flipped.svg')" />
  <div class="abs-at-center bold" style="transform: translate(calc(-50% + 8mm), calc(-50% - 8mm)) rotate(45deg); color: white;text-align: center;font-size: 18pt;width: 35mm;line-height: 1;">{{ $page.frontmatter.text.training_page }}</div>
</div>
:::

::: slot table-overlay-02
<img class="abs-at-bottom-left rotate-180" style="width: 44mm; height: 44mm;" :src="$withBase('/speakbook/shapes/table-overlay-02-flipped.svg')" />
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
::: slot cut-out-left-side-guide-01
<div class="flex-h height-100ph grey-color">
  <img style="width: 44.5mm; height: 287.2mm;" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide.svg')" />
  <div class="flex-v mx-auto fsize-8 v-oneline-fsize-8 bold">
    <div v-for="i in 2" class="wmode-vertical-lr rotate-180 flex-grow-1 text-center">
      {{ $page.frontmatter.text.cut_out_this_part }}
    </div>
  </div>
</div>
:::
::: slot cut-out-left-side-guide-02
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-02.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-03
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-03.svg')" />
  <div class="white-color wmode-vertical-lr rotate-180 fsize-8 bold flex-v items-align-center justify-content-center" style="position: absolute; top: 2mm; left: 0mm; width: 10mm; height: 28mm; font-size: 10pt;">{{ $page.frontmatter.text.HOME }}</div>
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-04
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 30mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-04.svg')" />
  <div class="red-color wmode-vertical-lr rotate-180 fsize-8 bold flex-v items-align-center justify-content-center" style="position: absolute; top: 30.5mm; left: 0mm; width: 10mm; height: 28mm;">{{ $page.frontmatter.text.SPELL }}</div>
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-05
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 90mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-05.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-06
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 90mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-06.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-07
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-07.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-08
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 10mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-08.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-09
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-bottom: 80mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-09.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-10
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-bottom: 90mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-10.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-11
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-11.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-12
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-left-side-guide-12.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-left-side-guide-13
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-bottom-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-13.svg')" />
</CutOutSideGuide>
:::
::: slot cover-footer
<div class="flex-h items-align-center lheight-1_5x" style="width: calc(var(--page-width) - 60mm);">
  <p class="cover-footer-text">
    <span class="fsize-8 bold">غیر زبانی مواصلات کے نظام</span><br>
    <span class="red-color fsize-8 bold">acecent.re/speakbook</span><br>
    <span class="fsize-4">Speakbook 4th ایڈیشن © 2011 پیٹرک جوائس</span>
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
      <h3 class="my-1 fsize-5">کس طرح speakbook پر لکھنے کے لئے</h3>
      <p class="my-2 fsize-4_5">بالکل آپ speakbook اپنے مخصوص ضروریات پر منحصر ہے پر کیا لکھ، لیکن آپ لکھتے ہیں جو کچھ بھی، یہ ضروری ہے کہ کسی بھی ڈبل صفحہ پھیلنے کے ہر طرف سے اس پر وہی متن ہے، اور وہ ایک دوسرے کا عکس کی تصویر ہیں کہ کہ - میں کے طور پر اوپر کی مثال. آپ اور آپ کے ساتھی کرو مختلف زبانیں بولتے ہیں؟ کوئی مسئلہ نہیں ہے - بس دونوں کناروں پر ایک مختلف زبان میں لکھنا.</p>
    </div>
  </div>
</div>
:::
::: slot inst-01-content
<div class="p-1 text-center">
  <speakbooktextfourcolorbkg class="speakbook-title fsize-10 p-1 bold" :text="$page.frontmatter.text.SPEAKBOOK"></speakbooktextfourcolorbkg>
</div>
<p>Speakbook لوگ ہیں جو بولتے ہیں اور ان کے ہاتھوں یا بازوؤں کا استعمال کرتے ہوئے مشکل نہیں سکتا کے لئے ایک غیر زبانی مواصلات آلہ ہے، لیکن جو ان کی آنکھوں کے استعمال کو برقرار رکھنے. اس ایڈیشن کو پڑھنے اور ہجے کر سکتے ہیں جو لوگوں کے لئے ہے. غیر قارئین، غیر ملکی زبان ورژن، اور پاکٹ ایڈیشن کے لئے، ملاحظہ ورژن کے لئے<b>acecent.re/speakbook</b></p>
<h2 class="fsize-6">ہدایات براے استعمال.</h2>
<p>شروع کرنے کے لئے، آپ کی ضرورت ہو گی؛ speakbook، ایک سیاہ، غیر مستقل سفید تختہ قلم، ایک کپڑے باہر سے رگڑنا، اور ایک بول پارٹنر کے لئے.</p>
<p>آپ اور آپ کے بولنے والے ساتھی کے علاوہ تین فٹ کے بارے میں ایک دوسرے کے برعکس بیٹھ. آپ کی نظر پر منحصر ہے، آپ کو یہ مددگار کمی یا اس فاصلے بڑھانے کے لئے تلاش کر سکتے ہیں. پیچھے کا احاطہ کے اندر تربیت صفحے پر speakbook کھولیں. یہ آپ کو بنیادی تکنیک سیکھنے میں مدد کرنے کے لئے پہلے سے بھری ہوئی ہے. آپ "ہے اس میں مہارت حاصل کرتے ہیں تو، آپ کو فراہم کی خالی والوں کا استعمال کرتے ہوئے آپ کے اپنے صفحات لکھ سکتے ہیں. خود پر کتاب واپس ڈالتے ہیں اور یہ آپ دونوں ایک "تربیت صفحے" کا سامنا ہے تو، تم دونوں کے درمیان تک منعقد، اور آپ وسط میں سوراخ کے ذریعے ایک دوسرے کی آنکھوں دیکھ سکتے ہیں. اب آپ جس سے ایک بات چیت کرنے کا فیصلہ کرنے کے پیج پر انتخاب پر نظر. آپ "ہے فیصلہ جب، آپ کو آپ کے ساتھی کو اس بات کی نشاندہی ہے کہ آپ کو شروع کرنے کے لئے تیار ہیں
- یہ، یا اوپر اور نیچے آپ کی آنکھوں waggling طرف آپ کے ساتھی کی طرف دیکھ اور ٹمٹمانے کی طرف سے ہو سکتا ہے - جو کچھ بھی سوٹ آپ. اس کے بعد ایک سیکنڈ کے لئے، آپ چاہتے پیغام پر نظر ڈالیں یا اس کے، بڑی علامت پیغام کی پارٹی کی طرف سے تھوڑا ایک کے طور پر ایک ہی کی طرف سے. آپ کے ساتھی اس کے بعد آپ کی آنکھ کی نقل و حرکت کی پیروی کرتا ہے - مثلا اس نے، تم بڑی مثلث کے بعد بورڈ کے اوپر بائیں ہاتھ کی طرف پر دیکھا ہے کہ دکھائی دے سکتا ہے تو وہ جانتا ہے کہ تم کیا کہنا چاہتے ہیں ضروری ہے کہ "چائے کا کپ!". اس کے بعد وہ کہتا ہے، "چائے کا کپ!" زور سے، اور آپ کو ایک جھپک یا کسی اور پری کا اہتمام سگنل کے ساتھ اس بات کی تصدیق</p>
<p>یہ speakbook کا استعمال کرتے ہوئے کے لئے بنیادی ٹیکنالوجی ہے. اب آپ کو آپ کے ساتھ، کسی بھی وقت تبدیل کر سکتے ہیں کہ جملے، اس کی صلاحیت میں speakbook جھوٹ کا سچ جینیس آپ کی اپنی پسند کے جملے کے سینکڑوں کے لئے آپ کو آسان رسائی دینے کے لئے ہے، کیونکہ کتاب میں دیگر صفحات کو استعمال کرنے کا طریقہ سیکھنے کی ضرورت صرف ایک نم کپڑے اور ایک قلم کے جھٹکے.</p>
:::

::: slot inst-02-flt-left-label
<div class="pos-rel fill-height fill-width">
  <img class="abs-fill-parent" :src="$withBase('/speakbook/shapes/inst-02-left-label-bkg.svg')">
  <div class="fsize-8 abs-at-center" style="transform: translate(calc(-50% - 5mm), calc(-50% - 5mm)) rotate(-45deg); color: white;width: 42mm;text-align: center;">{{ $page.frontmatter.text.instructions }}</div>
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
<p>speakbook میں سے ہر ایک صفحہ جس پر آپ کو آپ کے اپنے متن لکھ سکتے ہیں 14 یا 15 خالی حصے ہیں. حکم کے صارف مختلف صفحات کے درمیان منتقل کر سکتے ہیں کہ، ہم "گھر" کے صفحے پیدا کیا ہے. اس کتاب کے سامنے میں پایا جاتا ہے، اور صفحے کے کنارے پر ایک سیاہ "گھر" کے ٹیب کے ساتھ نشان لگا دیا گیا ہے. خیال ہے کہ آپ کو اس صفحے پر سب سے زیادہ استعمال کرتے ہیں 7 جملے لکھ، یہ صفحہ آپ کو ہمیشہ پر شروع ہے کے طور پر ہے. اس کے علاوہ، خالی سٹرپس کی 8 پر آپ دیگر 8 خالی ڈبل صفحات کے لنکس لکھیں. ان جملوں کی گہرائی میں زیادہ سیٹ کی ضرورت ہوتی ہے کہ آپ کی زندگی کے کچھ حصوں ہونا چاہئے، ان bathtime جیسے علاقوں ہو، یا گاڑی میں باہر جا سکتا ہے. بائیں جانب "گھر" صفحے کے لئے ایک ممکنہ ترتیب کی ایک مثال ہے. مندانہ بڑے حروف میں 8 الفاظ کہیں اور کتاب میں ڈبل صفحہ اسپریڈز کے لنکس ہیں. آپ ہی ہیں کیا کرتے ہیں، آپ کو مثال کے طور پر ایک خالی صفحے اور لکھنا، تلاش، "بستر" کنارے ٹیب پر، پھر سٹرپس پر آپ 14 جملے سب سے زیادہ آپ کے سونے کا وقت معمول سے متعلقہ لکھیں. اس کے بعد آپ کو دوسرے 7 لنکس کے لئے اس عمل کو دہرائیں آپ کی کتاب مکمل ہے جب تک. آپ ایک غلطی کرتے ہیں، یا ایک جملے کو تبدیل کرنا چاہتے ہیں، تو صرف اسے دور ایک نم کپڑے سے صاف کریں اور دوبارہ شروع کریں.</p>
<p>speakbook کو استعمال کرنے کے لئے، آپ کو آپ کے ساتھی کو بتاتے ہیں کہ آپ کو بات چیت کرنا چاہتے ہیں. آپ کے ساتھی "گھر" کے صفحے پر speakbook کھولتا ہے اور آپ کو مثال کے طور پر "بستر"، بات چیت. آپ کے ساتھی پھر "بستر" کے صفحے پر کر دیتا ہے اور پھر آپ سے بات چیت کر سکتے ہیں، "میں نے بستر پر جانے کے لئے چاہتے ہیں" - یا جو کچھ بھی. ہر صفحے پر پہلے مطبوعہ "گھر" اور "جادو" ہے. "گھر" (آپ کے ساتھ بستر پر لینے کے لئے آپ کو ایک چاہتے ہو سکتا "کپ چائے کا!") ہے کہ آپ ہمیشہ "گھر" کے صفحے پر واپس حاصل کر سکتے ہیں کر سکتے ہیں. "جادو" کے صفحے ڈان "ٹی کہیں اور کتاب میں ظاہر ہے کہ آپ کو انفرادی الفاظ اور جملے باہر جادو کرنے کی اجازت دیتا. یہ ایک فرق کے ساتھ، دیگر صفحات کے طور پر اسی طرح میں کام کرتا ہے. اس صفحے پر 6 رنگ کے بلاکس، اس پر 6 رنگ حروف یا اعداد سے ہر ایک ہیں. پورے حروف تہجی موجود ہے، اس کے علاوہ اعداد 1-9 (صفر استعمال خط O لئے). آپ ایک دوسرے یا اس کے لئے، بات چیت کرنا چاہتے ہیں خط، آپ کے منتخب کردہ خط کے طور پر ایک ہی رنگ کے رنگ بلاک کی طرف سے پیروی کی طرف دیکھو. آپ کے ساتھی، اپنی آنکھوں کی پیروی کرتا تو آپ کی طرف دیکھا مثال کے طور پر، سب سے اوپر بائیں بلاک اوپر دائیں بلاک کے (سبز ہوتی ہے) کی طرف سے پیروی کی ہے کہ دیکھتا ہے، اور آپ "C" چاہتے ہیں جانتا ہے. آپ کے ساتھی کی تصدیق کے لئے بلند آواز سے "C" کہتے ہیں، اور آپ کو اگلے خط پر منتقل. آپ کے ساتھی کے عمل کو تیز کرنے کے لئے، جب بھی ممکن لفظ کے باقی اندازہ.</p>
<p>Speakbook آپ کی پسند کا 119 جملے کے لئے کمرے ہے. یہ کافی نہیں ہے، یا آپ کو ایک خاص حصے میں 14 سے زائد جملے کی ضرورت ہے تو، پھر آپ کو دو سرخ رنگ میں ایک، سیاہ قلم میں سے ایک، ہر سطر پر جملے لکھ کر اس کی صلاحیت کو دوگنا کر سکتے ہیں. آپ معمول کے راستے میں ایک سیاہ کرتے، آپ کو بھاری علامت کو دیکھو جب ٹمٹمانے طرف ایک سرخ ایک کو منتخب.</p>
:::

::: slot last-page-content
<div style="width: 10mm;"></div>
<div class="flex-v block-holder b10x">
  <Content slot-key="last-page-heading" />
  <div class="flex-v mt-2"> <!-- split between letters keys and others -->
    <div class="flex-h">
      <div class="flex-v block-holder b3x">
        <div class="block b0x flex-grow-1" style="margin-right: 8mm;"></div>
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
        <div class="block b3x white-color black-bkg" style="font-size: 18pt;">{{ $page.frontmatter.text.HOME }}</div>
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
          <div class="block yellow-bkg">{{ $page.frontmatter.text.YES }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._zero }}</div>
          <div class="block yellow-bkg">{{ $page.frontmatter.text.NO }}</div>
        </div>
      </div>
    </div>
    <div class="flex-h flex-wrap">
      <div class="block cyan-bkg">{{ $page.frontmatter.text.A }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.B }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.C }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.D }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.E }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.F }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.G }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.H }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.I }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.J }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.K }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.L }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.M }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.N }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.O }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.P }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Q }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.R }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.S }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.T }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.U }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.V }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.W }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.X }}</div>
      <div class="block b1_5x yellow-bkg">  </div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Y }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Z }}</div>
      <div class="block cyan-bkg">ب</div>
      <div class="block cyan-bkg">أ</div>
    </div>
  </div>
</div>
:::

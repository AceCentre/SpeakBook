---
layout: SpeakBook
text:
  ring_bind_edge: ربط عصابة على طول هذه الحافة
  cut_out_this_part: قطع هذا الجزء.
  SPEAKBOOK: SPEAKBOOK
  edition_nth: "4"
  EDITION: الإصدار
  color_blind: عمى الالوان
  friendly: ودود!
  instructions: تعليمات
  HOME_PAGE: الصفحة الرئيسية
  SPELL: تهجئه
  HOME: الصفحة الرئيسية
  THANK_YOU: شكرا
  A: غ
  B: ظ
  C: ض
  D: ذ
  E: خ
  F: ث
  G: ت
  H: ش
  I: ر
  J: ق
  K: ص
  L: ف
  M: ع
  N: س
  O: ن
  P: م
  Q: ل
  R: ك
  S: ي
  T: ط
  U: ح
  V: ز
  W: و
  X: ه
  Y: د
  Z: ج
  _zero: ٠
  _one: ١
  _two: ٢
  _three: ٣
  _four: ٤
  _five: ٥
  _six: ٦
  _seven: ٧
  _eight: ٨
  _nine: ٩
  im_too_hot: انا حار جدا
  im_too_cold: أنا بارد جدا
  cup_of_tea: كوب من الشاي!
  cup_of_coffee: كوب من القهوة!
  i_love_you: أحبك
  yes: نعم
  no: لا
  CAR: سيارة
  BED: السرير
  CLOTHING: ملابس
  BATHTIME: وقت الاستحمام
  MEALS: وجبات
  COMFORT: راحة
  TOILET: الحمام
  DRINKS: مشروبات
  TRAINING_PAGE: TRAINING PAGE
  training_page: صفحة التداول
  _GBP: £
  _USD: د.ع
  _percent: "%"
  _plus: +
  _minus: "-"
  _slash: /
  _X: X
  _equal: =
  _question_mark: "?"
  _atsign: "@"
  YES: نعم
  NO: لا
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
<div class="float-left" style="width: 40mm; height: 40mm; shape-outside: polygon(0px 0px, 100% 0px, 100% 100%, 30mm 100%);"></div>
<h2 class="my-2">إصبع الصفحة الإملائي.</h2>
<p class="my-2">إذا كنت لا تزال لديها استخدام يديك، ثم هذه الصفحة هي لك.
  من خلال الإشارة بإصبع يمكنك توضيح الكلمات والعبارات لشريك حياتك.
  في كثير من الأحيان الكلمات المستخدمة يمكن أن تكون مكتوبة في مربعات فارغة.
  مشيرا إلى الكلمة<strong class="bold">" الصفحة الرئيسية "*</strong>يشير لشريك حياتك أنك الآن
  يريدون التواصل مع عينيك باستخدام الكتاب الرئيسي.</p>
:::
::: slot training-page-description
<p class="fsize-3">عندما كنت قد تعلمت هذه التقنية الأساسية باستخدام هذه الصفحة التدريب،
  يمكنك كتابة الصفحات الخاصة بك باستخدام تلك فارغة في هذا الكتاب.</p>
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
    <span class="fsize-8 bold">غير النظام لفظية</span><br>
    <span class="red-color fsize-8 bold">acecent.re/speakbook</span><br>
    <span class="fsize-4">Speakbook 4th الطبعة © 2011 باتريك جويس</span>
  </p>
  <div class="flex-grow-1"></div>
  <img style="width: 30mm;height: 30mm;" :src="$withBase('/speakbook/images/PublishedByAce.svg')">
</div>
:::

::: slot inst-01-flt-right-content
<div class="abs-fill-parent flex-h" style="align-items: flex-end;">
  <div class="flex-grow-1"></div>
  <div class="flex-v">
    <img class="m-1" style="width: 58.5mm; height: 79.7mm; box-sizing: border-box;" :src="$withBase('/speakbook/images/01.png')">
    <div class="m-1 p-1 flex-grow-1 flt-box" style="width: 57.5mm; min-height: 79.7mm; box-sizing: border-box;">
      <h3 class="my-1 fsize-5">كيفية الكتابة على speakbook</h3>
      <p class="my-2 fsize-4_5">بالضبط ما تكتبه على speakbook سيعتمد على المتطلبات الخاصة بك، ولكن كل ما يكتب، فمن المهم أن كل جانب من أي انتشار الصفحة مزدوج له نفس النص على ذلك، وأنها صورة طبق الأصل من بعضها البعض - كما هو الحال في في المثال أعلاه. هل أنت وشريك حياتك يتكلمون لغات مختلفة؟ لا مشكلة - مجرد كتابة لغة مختلفة على جانبي.</p>
    </div>
  </div>
</div>
:::
::: slot inst-01-content
<div class="p-1 text-center">
  <SpeakBookTextFourColorBkg class="speakbook-title fsize-10 p-1 bold" :text="$page.frontmatter.text.SPEAKBOOK"></SpeakBookTextFourColorBkg>
</div>
<p>Speakbook هو أداة الاتصال اللفظي غير بالنسبة للأشخاص الذين لا يستطيعون الكلام ويجدون صعوبة في استخدام أيديهم أو أذرعهم، ولكن الذين يحتفظون استخدام أعينهم. هذه الطبعة هي للأشخاص الذين يستطيعون القراءة والتهجئة. للحصول على إصدارات لغير القراء، اللغات الأجنبية، وطبعة الجيب، وزيارة<b>acecent.re/speakbook</b></p>
<h2 class="fsize-6">تعليمات الاستخدام.</h2>
<p>لتبدأ، ستحتاج. وspeakbook، أسود، قلم السبورة غير الدائمين، قطعة قماش لفرك بها، وشريك التحدث.</p>
<p>أنت وشريك يتحدث بك الجلوس عكس بعضها البعض نحو ثلاثة أقدام بعيدا. اعتمادا على البصر، قد تجد أنه من المفيد لخفض أو زيادة هذه المسافة. فتح speakbook إلى صفحة التدريب داخل الغطاء الخلفي. يتم تعبئة هذا في سبق لمساعدتك على تعلم هذه التقنية الأساسية. عند "لقد أتقن ذلك، يمكنك إرسال صفحاتك الخاصة، وذلك باستخدام تلك فارغة المقدمة. طي ظهر كتاب عن نفسها وعقد ليصل بينك، لذلك كنت على حد سواء تواجه "صفحة التدريب"، ويمكنك ان ترى كل عيون الآخرين من خلال ثقب في الوسط. أنت الآن ننظر في الخيارات على الصفحة لاتخاذ قرار واحد للاتصال. عند "لقد قررت، كنت تشير إلى شريك حياتك أن تكون مستعدا لبدء
- وهذا يمكن أن يكون من خلال النظر في شريك حياتك وامض، أو عن طريق الهز عينيك صعودا وهبوطا - أيا كان يناسبك. بعد ذلك ننظر في الرسالة التي تريدها، لثانية أو نحو ذلك، يليه رمز كبير نفس واحدة صغيرة على جانب الرسالة. شريك حياتك ثم يتبع حركات العين الخاص بك - على سبيل المثال انه قد نرى ان كنت قد نظرت في أعلى الجانب الأيسر من لوحة تليها مثلث كبير، لذلك فهو يعرف أنه يجب أن أقول "كوب من الشاي!". ثم يقول: "كوب من الشاي!" بصوت عال، ويجب تأكيد هذا مع طرفة، أو بعض أخرى إشارة رتبت مسبقا</p>
<p>هذا هو الأسلوب الأساسي لاستخدام speakbook. والآن أنت بحاجة لمعرفة كيفية استخدام صفحات أخرى في الكتاب، لأن العبقرية الحقيقية من الأكاذيب speakbook في قدرته على إعطاء لك سهولة الوصول إلى مئات من العبارات التي تختارها الخاصة، العبارات التي يمكن أن تتغير في أي وقت، مع فقط قطعة قماش مبللة وبجرة قلم.</p>
:::

::: slot inst-02-flt-left-label
<div class="pos-rel fill-height fill-width">
  <img class="abs-fill-parent" :src="$withBase('/speakbook/shapes/inst-02-left-label-bkg.svg')">
  <div class="fsize-8 abs-at-center" style="transform: translate(calc(-50% - 5mm), calc(-50% - 5mm)) rotate(-45deg); color: white; width: 42mm;text-align: center;">{{ $page.frontmatter.text.instructions }}</div>
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
<p>كل صفحة من speakbook ديها 14 أو 15 أقسام فارغة حيث يمكنك كتابة النص الخاص بك. من أجل أن يمكن للمستخدم التنقل بين الصفحات المختلفة، أنشأنا "الوطن" صفحة. تم العثور على هذا في مقدمة الكتاب، ويظهر على هيئة أسود "الوطن" التبويب في حافة الصفحة. والفكرة هي أن تكتب 7 العبارات التي تستخدم أكثر من غيرها في هذه الصفحة، كما هو الصفحة التي تبدأ على الدوام. أيضا، في 8 من شرائط فارغة تكتب روابط لغيرها من 8 صفحات مزدوجة فارغة. يجب أن تكون هذه الأجزاء من حياتك التي تتطلب أكثر في عمق مجموعة من العبارات، قد تكون هذه المناطق مثل bathtime، أو الخروج في السيارة. على اليسار هو مثال على تخطيط الممكن لل"الوطن" صفحة. الكلمات 8 بحروف عريضة وصلات إلى هوامش الصفحة مزدوج في مكان آخر في الكتاب. ما عليك فعله هو، تجد صفحة فارغة والكتابة، على سبيل المثال، "BED" في علامة التبويب الحافة، ثم على شرائط تكتب ال 14 العبارات الأكثر ملاءمة لروتين وقت النوم الخاصة بك. ثم يمكنك تكرار هذه العملية لأخرى 7 وصلات، حتى كتابك ممتلئ. إذا قمت بخطأ ما، أو ترغب في تغيير العبارة، ثم امسح فقط تشغيله بقطعة قماش مبللة والبدء من جديد.</p>
<p>استخدام speakbook، كنت تشير إلى شريكك الذي تريد التواصل. شريك حياتك يفتح speakbook إلى "الوطن" صفحة ويمكنك التواصل، على سبيل المثال، "BED". ثم يتحول شريك حياتك إلى "BED" صفحة ويمكنك بعد ذلك التواصل، "أريد أن أذهب إلى السرير" - أو أيا كان. كل صفحة لها "الوطن" و "موجة" مطبوعة مسبقا على ذلك. "الوطن" هو بحيث يمكنك أن تحصل دائما العودة إلى "الوطن" صفحة (قد ترغب في "كأس من الشاي!" على النزول الى السرير معك). و"موجة" الصفحة تسمح لك لتوضيح الكلمات والعبارات الفردية التي دون "تي تظهر في أي مكان آخر في الكتاب. وهو يعمل بطريقة مماثلة لصفحات أخرى، مع فارق واحد. في هذه الصفحة هناك 6 القطع الملونة، ولكل منها 6 حروف أو أرقام ملونة على ذلك. الأبجدية كلها هناك، بالإضافة إلى أرقام 1-9 (صفر استخدام الحرف O). نظرتم الى الرسالة التي ترغب في التواصل، لثانية واحدة أو نحو ذلك، تليها كتلة اللون من نفس لون الرسالة التي اخترتها. شريك حياتك يتبع عينيك، ويرى أن كنت قد نظرت، على سبيل المثال، أعلى كتلة اليسار يليه أعلى كتلة اليمين (والذي هو الأخضر)، ويعلم أنك تريد "C". يقول شريك حياتك "C" بصوت عال إلى تأكيد، ويمكنك الانتقال إلى الحرف التالي. شريك حياتك التخمينات بقية كلمة عندما يكون ذلك ممكنا، لتسريع عملية حتى.</p>
<p>Speakbook يتسع ل 119 جمل من اختيارك. إذا كان هذا لا يكفي، أو إذا كنت تحتاج إلى أكثر من 14 العبارات في مقطع واحد معين، ثم يمكنك مضاعفة قدرتها من خلال كتابة جملتين في كل سطر، واحدة في قلم أسود، واحدة باللون الأحمر. اخترت عبارة السوداء بالطريقة العادية، واحدة حمراء وامض من قبل عندما نظرتم الى رمز كبير.</p>
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

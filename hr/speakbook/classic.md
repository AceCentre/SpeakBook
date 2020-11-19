---
layout: SpeakBook
classic_edition: true
text:
  ring_bind_edge: Prsten se vežu uz ovaj rub
  cut_out_this_part: Izrezati taj dio.
  SPEAKBOOK: SPEAKBOOK
  classic: classic
  EDITION: IZDANJE
  color_blind: Slijep na boje
  friendly: Prijateljski!
  instructions: instrukcije
  HOME_PAGE: POČETNA STRANICA
  SPELL: ČAROLIJA
  HOME: DOM
  THANK_YOU: HVALA VAM
  A: A
  B: B
  C: C
  C2: Č
  C3: Ć
  D: D
  D2: DŽ
  D3: Đ
  E: E
  F: F
  G: G
  H: H
  I: I
  J: J
  K: K
  L: L
  L2: LJ
  M: M
  N: N
  N2: NJ
  O: O
  P: P
  Q: Q
  R: R
  S: S
  S2: Š
  T: T
  U: U
  V: V
  W: W
  X: x
  Y: Y
  Z: Z
  Z2: Ž
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
  im_too_hot: Ja sam previše vruće
  im_too_cold: Ja sam previše hladno
  cup_of_tea: Šalica čaja!
  cup_of_coffee: Šalica kave!
  i_love_you: Volim te
  yes: Da
  no: Ne
  CAR: AUTOMOBIL
  BED: KREVET
  CLOTHING: ODJEĆA
  BATHTIME: VRIJEME ZA KUPANJE
  MEALS: PREHRANA
  COMFORT: UDOBNOST
  TOILET: WC
  DRINKS: PIĆA
  TRAINING_PAGE: TRENING STRANICA
  training_page: trgovinu stranica
  _GBP: £
  _USD: $
  _percent: "%"
  _plus: +
  _minus: "-"
  _slash: /
  _X: x
  _equal: =
  _question_mark: "?"
  _atsign: "@"
  YES: DA
  NO: NE
  edition_nth: "5."
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
  - content_slotname: inst-01-content
    floating_elements:
      - comment: left spacing
        dir: left
        inlinecss:
          --spacing-offset-top: 17mm
          --left-spacing: 13mm
          --max-left-spacing: 40mm
          width: var(--max-left-spacing)
          height: var(--page-height)
          shape-outside: polygon(0 var(--spacing-offset-top), var(--max-left-spacing)
            var(--spacing-offset-top), var(--left-spacing)
            calc(var(--spacing-offset-top) + 20mm), var(--left-spacing)
            var(--page-height), 0 var(--page-height))
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
        slotname: cut-out-right-side-guide-02
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
          shape-outside: polygon(0 0, 100% 100%, 100% 0)
        slotname: inst-02-flt-right-label
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
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center left
            type: coloured-circle
            colour: yellow
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
          - comment: space in middle
            inlinecss:
              width: var(--cut-out-center-guide-width)
              height: var(--cut-out-center-guide-height)
          - comment: At bottom center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center right
            type: coloured-circle
            colour: purple
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page05
    start_spacing_slotname: cut-out-right-side-guide-03
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top left
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center left
            type: coloured-circle
            colour: yellow
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
          - comment: Guide at center
            type: custom
            slotname: cut-out-center-guide
            inlinecss:
              flex-grow: 1
              transform: rotate(180deg)
          - comment: At bottom center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center right
            type: coloured-circle
            colour: purple
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: coloured-table
            rowheight: 12mm
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
    start_spacing_slotname: cut-out-right-side-guide-04
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
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: HOME
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center left
            type: coloured-circle
            colour: yellow
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
          - comment: space in middle
            inlinecss:
              width: var(--cut-out-center-guide-width)
              height: var(--cut-out-center-guide-height)
          - comment: At bottom center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center right
            type: coloured-circle
            colour: purple
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page09
    start_spacing_slotname: cut-out-right-side-guide-05
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: HOME
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center left
            type: coloured-circle
            colour: yellow
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: coloured-table
            rowheight: 12mm
            rows:
              - comment: empty
              - comment: empty
              - comment: empty
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
          - comment: Guide at center
            type: custom
            slotname: cut-out-center-guide
            inlinecss:
              flex-grow: 1
              transform: rotate(180deg)
          - comment: At bottom center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: At center right
            type: coloured-circle
            colour: purple
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: coloured-table
            rowheight: 12mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
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
    comment: no cut out
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top left
            type: coloured-table02
            rowheight: 12mm
            overlay_slotname: table-overlay-01
            rows:
              - text_key: i_love_you
              - text_key: yes
                inlinecss:
                  margin-left: 14mm
              - text_key: no
                inlinecss:
                  margin-left: 30mm
              - text_key: CAR
                inlinecss:
                  margin-left: 43mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: text-with-coloured-circle
            fixed: true
            colour: yellow
            text_slotname: training-page-description
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom left
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: COMFORT
              - text_key: TOILET
              - text_key: DRINKS
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At top center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
          - comment: space in middle
            inlinecss:
              width: var(--cut-out-center-guide-width)
              height: var(--cut-out-center-guide-height)
          - comment: At bottom center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At top right
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: im_too_hot
              - text_key: im_too_cold
              - text_key: cup_of_tea
              - text_key: cup_of_coffee
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: text-with-coloured-circle
            colour: purple
            text_key: TRAINING_PAGE
            text_inlinecss:
              font-size: 18pt
            text_at_top: true
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At bottom right
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: BED
              - text_key: CLOTHING
              - text_key: BATHTIME
              - text_key: MEALS
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
  - name: page25
    start_spacing_slotname: cut-out-right-side-guide-13
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
    columns:
      - inlinecss:
          width: 57mm
        rows:
          - comment: At bottom right
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: COMFORT
              - text_key: TOILET
              - text_key: DRINKS
              - text_key: SPELL
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center right
            type: text-with-coloured-circle
            fixed: true
            colour: yellow
            text_slotname: training-page-description
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At top right
            type: coloured-table02
            overlay_slotname: table-overlay-02
            rowheight: 12mm
            rows:
              - text_key: i_love_you
              - text_key: yes
                inlinecss:
                  margin-right: 14mm
              - text_key: no
                inlinecss:
                  margin-right: 30mm
              - text_key: CAR
                inlinecss:
                  margin-right: 43mm
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
      - inlinecss:
          width: 72mm
        rows:
          - comment: At bottom center
            type: coloured-circle
            colour: green
            inlinecss:
              flex-grow: 1
          - comment: Guide at center
            type: custom
            slotname: cut-out-center-guide
            inlinecss:
              flex-grow: 1
              transform: rotate(180deg)
          - comment: At top center
            type: coloured-circle
            colour: cyan
            inlinecss:
              flex-grow: 1
      - inlinecss:
          width: 57mm
        rows:
          - comment: At left bottom
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: BED
              - text_key: CLOTHING
              - text_key: BATHTIME
              - text_key: MEALS
            inlinecss:
              --grid-item-width: 57mm
              --grid-item-height: 94mm
              height: var(--grid-item-height)
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At center left
            type: text-with-coloured-circle
            colour: purple
            text_key: TRAINING_PAGE
            text_inlinecss:
              font-size: 18pt
            text_at_top: true
          - comment: spacing
            inlinecss:
              flex-grow: 1
          - comment: At top left
            type: coloured-table02
            rowheight: 12mm
            rows:
              - text_key: im_too_hot
              - text_key: im_too_cold
              - text_key: cup_of_tea
              - text_key: cup_of_coffee
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
<h2 class="my-2">stranica pravopis prst.</h2>
<p class="my-2">Ako još uvijek imate upotrebu svoje ruke, onda je to stranica za vas.
  Pokazujući prstom možete sricati riječi i fraze s partnerom.
  Često upotrebljavane riječi mogu biti napisane na prazne okvire.
  Ukazujući na riječ<strong class="bold">" DOM ​​"*</strong>ukazuje na vašem partneru da vas sada
  žele komunicirati sa svojim očima pomoću glavnog knjigu.</p>
:::
::: slot training-page-description
<p class="fsize-3">Kada ste naučili osnovne tehnike pomoću ovu stranicu obuke,
  možete pisati vlastite stranice pomoću one prazne u ovoj knjizi.</p>
:::
::: slot table-overlay-01
<div class="abs-at-top-left" style="top: 0.5mm; left: 0.5mm; width: 44mm; height: 44mm;">
  <img class="abs-fill-parent" :src="$withBase('/speakbook/shapes/table-overlay-01.svg')" />
  <div class="abs-at-center bold" style="transform: translate(calc(-50% - 8mm), calc(-50% - 8mm)) rotate(-45deg); color: white;text-align: center;font-size: 18pt;width: 35mm;line-height: 1;">{{ $page.frontmatter.text.training_page }}</div>
</div>
:::

::: slot table-overlay-02
<img class="abs-at-bottom-left rotate-180" style="bottom: 0.5mm; left: 0.5mm; width: 44mm; height: 44mm;" :src="$withBase('/speakbook/shapes/table-overlay-02.svg')" />
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
::: slot cut-out-right-side-guide-01
<div class="flex-h height-100ph grey-color">
  <img style="width: 44.5mm; height: 287.2mm;" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide.svg')" />
  <div class="flex-v mx-auto fsize-8 v-oneline-fsize-8 bold">
    <div v-for="i in 2" class="wmode-vertical-lr rotate-180 flex-grow-1 text-center">
      {{ $page.frontmatter.text.cut_out_this_part }}
    </div>
  </div>
</div>
:::
::: slot cut-out-right-side-guide-02
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-02.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-03
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-03.svg')" />
  <div class="white-color wmode-vertical-lr rotate-180 fsize-8 bold flex-v items-align-center justify-content-center" style="position: absolute; top: 2mm; left: 0mm; width: 10mm; height: 28mm;">{{ $page.frontmatter.text.HOME }}</div>
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-04
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 30mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-04.svg')" />
  <div class="red-color wmode-vertical-lr rotate-180 fsize-8 bold flex-v items-align-center justify-content-center" style="position: absolute; top: 30.5mm; left: 0mm; width: 10mm; height: 28mm;">{{ $page.frontmatter.text.SPELL }}</div>
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-05
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 90mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-05.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-06
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 90mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-06.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-07
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-07.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-08
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-top: 10mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-08.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-09
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-bottom: 80mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-09.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-10
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part" textstyle="padding-bottom: 90mm; box-sizing: border-box;">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-10.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-11
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-11.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-12
<CutOutSideGuide textlen="1" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-center-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-12.svg')" />
</CutOutSideGuide>
:::
::: slot cut-out-right-side-guide-13
<CutOutSideGuide textlen="2" :text="$page.frontmatter.text.cut_out_this_part">
  <img class="abs-at-bottom-left" :src="$withBase('/speakbook/shapes/cut-out-right-side-guide-13.svg')" />
</CutOutSideGuide>
:::
::: slot cover-footer
<div class="lheight-1_5x">
  <p class="text-center cover-footer-text">
    <span class="fsize-8 bold">neverbalna komunikacija sustav</span><br>
    <span class="red-color fsize-8 bold">acecent.re/speakbook</span><br>
    <span class="fsize-4">Speakbook 5. izdanje © 2020 Patrick Joyce &amp; Ace centar</span>
  </p>
</div>
:::

::: slot inst-01-flt-right-content
<div class="abs-fill-parent flex-h" style="align-items: flex-end;">
  <div class="flex-grow-1"></div>
  <div class="flex-v">
    <img class="m-1" style="width: 58.5mm; height: 79.7mm; box-sizing: border-box;" :src="$withBase('/speakbook/images/01.png')">
    <div class="m-1 p-1 flex-grow-1 flt-box" style="width: 57.5mm; min-height: 79.7mm; box-sizing: border-box;">
      <h3 class="my-1 fsize-5">Kako napisati o speakbook</h3>
      <p class="my-2 fsize-4_5">Upravo ono što ste napisali na speakbook ovisit će o vašim zahtjevima, ali bez obzira što napisati, važno je da svaka strana bilo dvostruke stranice širenja ima isti tekst na to, a to su zrcalna slika jedan drugoga - kao u gornji primjer. Da li vi i vaš partner govori različitim jezicima? Nema problema - samo napisati drugi jezik na obje strane.</p>
    </div>
  </div>
</div>
:::
::: slot inst-01-content
<div class="p-1 text-center">
  <speakbooktextfourcolorbkg class="speakbook-title fsize-10 p-1 bold" :text="$page.frontmatter.text.SPEAKBOOK"></speakbooktextfourcolorbkg>
</div>
<p>Speakbook je neverbalna komunikacija alat za ljude koji ne mogu govoriti i imaju poteškoća s uporabom ruke ili šake, ali tko zadržati korištenje njihovih očiju. Ovo izdanje je za ljude koji mogu čitati i čarolija. Za verzije za ne-čitača, verzija stranih jezika, a džep izdanju, posjetite<b>acecent.re/speakbook</b></p>
<h2 class="fsize-6">Upute za korištenje.</h2>
<p>Za početak će vam trebati; speakbook, crna, non-stalni ploča olovka, krpom trljati se i govoreći partnera.</p>
<p>Vi i vaš govor partnera sjede jedan nasuprot drugom oko tri noge apart. Ovisno o svom vidu, možda će vam biti od pomoći smanjiti ili povećati tu udaljenost. Otvorite speakbook na stranicu obuke unutar poleđini. To se popunjava već će vam pomoći da naučite osnovne tehnike. Kad "ste ga svladao, možete napisati svoje vlastite stranice, koristite prazne one koje. Preklopite knjigu natrag na sebi i držite ga između vas, tako da su oboje okrenuti "trening stranicu", a možete vidjeti oči svaki drugi kroz rupu u sredini. Sada pogled na izbore na stranici odlučiti koje komunicirati. Kad "ste se odlučili, pokazujete da vaš partner da ste spremni za početak
- ovo bi mogao biti gledajući svog partnera i treptanje, ili waggling oči gore i dolje - što god odgovara. Onda pogledajte poruku koju želite, za drugi ili tako, nakon čega slijedi veliki simbol isto kao mali jedan po strani poruke. Vaš partner tada slijedi svoje očne pokrete - na primjer mogao vidjeti da si pogledao u gornjem lijevoj strani ploče, nakon čega slijedi veliki trokut, tako da zna da mora željeti reći „šalicu čaja!". On je tada rekao: „šalica čaja!” glasno, a ti potvrditi ovo sa tren, ili neke druge unaprijed dogovorenim signalom</p>
<p>To je osnovna tehnika za korištenje speakbook. Sada trebate naučiti kako koristiti druge stranice u knjizi, jer pravi genij od speakbook leži u njegovoj sposobnosti da vam jednostavan pristup stotinama frazama vlastitom izboru, fraze koje možete promijeniti u bilo koje vrijeme, s samo vlažnom krpom, a potezom olovke.</p>
:::

::: slot inst-02-flt-right-label
<div class="pos-rel fill-height fill-width">
  <img class="abs-fill-parent" :src="$withBase('/speakbook/shapes/inst-02-right-label-bkg.svg')">
  <div class="fsize-8 abs-at-center" style="transform: translate(calc(-50% + 18px), calc(-50% - 18px)) rotate(45deg); color: white;">{{ $page.frontmatter.text.instructions }}</div>
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
<p>Svaka stranica speakbook ima 14 ili 15 praznih dijelova na kojima možete pisati svoj tekst. Da bi se korisnik može kretati između različitih stranica, stvorili smo „home" stranicu. To se nalazi na prednjem dijelu knjige, te je označen s crnom kartici „dom" na rubu stranice. Ideja je da se napisati 7 fraze koje koristite najviše na ovoj stranici, jer je stranica koju uvijek početi na. Također, na 8 od praznih trake pišete linkove na druge 8 praznih dvostrukim stranicama. To bi trebao biti dio vašeg života koji zahtijevaju više u dubinu niz fraza, to bi moglo biti područjima kao što su bathtime, ili izlazak u automobilu. S lijeve strane je primjer mogućeg izgleda za stranicu „dom". The 8 riječi u bold slovima su linkovi na dvostruke strane širi drugdje u knjizi. Što ti je, pronađete stranicu prazan i pisati, na primjer, „krevet" na kartici rub, a zatim na trakama pisanja 14 fraze najrelevantniji za vaše spavanje rutinu. Tada ćete ponoviti ovaj postupak za ostale 7 veze, dok je knjiga puna. Ako pogriješite ili želite promijeniti izraz, onda samo obrišite vlažnom krpom i početi iznova.</p>
<p>Za korištenje speakbook, pokazujete svom partneru da želite komunicirati. Vaš partner otvara speakbook na stranicu „Home" i da komuniciraju, na primjer, „bed". Vaš partner tada se okreće na stranicu „bed" i onda možete komunicirati „, želim ići u krevet" - ili što god. Svaka stranica ima „dom" i „čaroliju" pre-tiskani na njemu. „Dom" je, tako da možete se uvijek vratiti na stranicu „Home" (možda želite „šalicu čaja!" Uzeti u krevet s vama). Na "čaroliju" omogućuje vam da sricati pojedine riječi i fraze koje don "t pojaviti na drugim mjestima u knjizi. Djeluje na sličan način kao i ostale stranice, s jednom razlikom. Na ovoj stranici nalazi se 6 boji blokova, svaki sa 6 boji slova ili brojeva na njemu. Cijela abeceda postoji, uz broj 1-9 (za upotrebu nula slovo O). Možete pogledati na slovo koje želite komunicirati, za drugi ili tako, nakon čega slijedi boji bloka iste boje kao i odabranom pismu. Vaš partner prati oči, vidi da si pogledao, na primjer, gore lijevo blok slijedi gornjem desnom bloka (što je zeleno), i zna što želi „C". Vaš partner kaže „C" naglas potvrđuju, i prelazak na sljedeće slovo. Vaš partner pogodi ostatak riječi kada je to moguće, kako bi se ubrzao proces gore.</p>
<p>Speakbook ima mjesta za 119 riječi po vašem izboru. Ako to nije dovoljno, ili ako je potrebno više od 14 fraze u jednom određenom dijelu, a zatim možete udvostručiti svoje kapacitete pisanjem dvije fraze na svakoj liniji, jedan u crnom olovkom, jedan u crveno. birati crni frazu na normalan način, crveni, jedan po treptati kada pogledate na velikom simbolu.</p>
:::

::: slot last-page-content
<div class="flex-v block-holder b10x" style="--block-width:13mm;--block-height:13mm;">
  <Content slot-key="last-page-heading" />
  <div class="flex-v mt-2"> <!-- split between letters keys and others -->
    <div class="flex-h">
      <div class="flex-v block-holder b5x" style="--block-width:13mm;--block-height:13mm;">
        <div class="block b0x flex-grow-1" style="margin-left: 8mm;"></div>
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="flex-h flex-wrap" style="--block-width:13mm;--block-height:13mm;">
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
        <div class="block b5x white-color black-bkg">{{ $page.frontmatter.text.HOME }}</div>
        <div class="block b5x yellow-bkg" style="font-size: 18pt;">{{ $page.frontmatter.text.THANK_YOU }}</div>
      </div>
      <div class="flex-v block-holder b4x" style="--block-width:13mm;--block-height:13mm;">
        <div class="block b4x">
        </div>
        <div class="flex-grow-1"></div>
      </div>
      <div class="flex-v block-holder b5x" style="--block-width:13mm;--block-height:13mm;">
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="block b5x"></div>
        <div class="flex-h flex-wrap" style="--block-width:13mm;--block-height:13mm;">
          <div class="block pink-bkg">{{ $page.frontmatter.text._one }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._two }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._three }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._four }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._five }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._six }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._seven }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._eight }}</div>
          <div class="block pink-bkg">{{ $page.frontmatter.text._nine }}</div>
          <Content class="block" slot-key="redheart-img" />
          <div class="block pink-bkg">{{ $page.frontmatter.text._zero }}</div>
          <Content class="block" slot-key="smileyface-img" />
        </div>
      </div>
    </div>
    <div class="flex-h flex-wrap" style="--block-width:13mm;--block-height:13mm;">
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Q }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.W }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.E }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.R }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.T }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Z }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.U }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.I }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.O }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.P }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.S2 }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.D2 }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Z2 }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.A }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.S }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.D }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.F }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.G }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.J }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.K }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.L }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.C2 }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.C3 }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text._atsign }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Y }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.X }}</div>
       <div class="block b1_5x yellow-bkg">{{ $page.frontmatter.text.YES }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.C }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.V }}</div>
      <div class="block b1_5x yellow-bkg">{{ $page.frontmatter.text.NO }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.B }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.N }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.M }}</div>
    </div>
  </div>
</div>
:::

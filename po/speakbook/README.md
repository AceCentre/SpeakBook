---
layout: SpeakBook
text:
  ring_bind_edge: Coloque as argolas ao longo desta margem
  cut_out_this_part: Recorte esta parte.
  SPEAKBOOK: SPEAKBOOK
  edition_nth: 4ª
  EDITION: EDIÇÃO
  color_blind: Adaptado para
  friendly: Daltónicos!
  instructions: instruções
  HOME_PAGE: INÍCIO
  SPELL: SOLETRAR
  HOME: INÍCIO
  THANK_YOU: OBRIGADO
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
  im_too_hot: Estou demasiado quente
  im_too_cold: Estou com frio
  cup_of_tea: Copo de água!
  cup_of_coffee: Um café!
  i_love_you: Amo-te
  yes: sim
  no: não
  CAR: CARRO
  BED: CAMA
  CLOTHING: VESTUÁRIO
  BATHTIME: HORA DO BANHO
  MEALS: REFEIÇÕES
  COMFORT: CONFORTO
  TOILET: WC
  DRINKS: BEBIDAS
  TRAINING_PAGE: PÁGINA DE TESTE
  training_page: página de teste
  _GBP: €
  _USD: $
  _percent: "%"
  _plus: +
  _minus: "-"
  _slash: /
  _X: X
  _equal: =
  _question_mark: "?"
  _atsign: "@"
  YES: SIM
  NO: NÃO
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
    start_spacing_slotname: cut-out-right-side-guide-03
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
    start_spacing_slotname: cut-out-right-side-guide-05
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
    start_spacing_slotname: cut-out-right-side-guide-06
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page12
    comment: no cut out
    copyof: page08
  - name: page13
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-07
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page14
    comment: no cut out
    copyof: page08
  - name: page15
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-08
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page16
    comment: no cut out
    copyof: page08
  - name: page17
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-09
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page18
    comment: no cut out
    copyof: page08
  - name: page19
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-10
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page20
    comment: no cut out
    copyof: page08
  - name: page21
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-11
    start_spacing_inlinecss:
      transform: rotate(180deg)
    inlinecss:
      transform: rotate(180deg)
  - name: page22
    comment: no cut out
    copyof: page08
  - name: page23
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-12
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
                inlinecss:
                  margin-left: 14mm
              - image: shape-triangle-1x-img
                text_key: no
                inlinecss:
                  margin-left: 30mm
              - image: shape-square-1x-img
                text_key: CAR
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
                text_inlinecss:
                  font-size: 18pt
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
                inlinecss:
                  margin-right: 14mm
              - image: shape-triangle-1x-img
                text_key: no
                inlinecss:
                  margin-right: 30mm
              - image: shape-square-1x-img
                text_key: CAR
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
                text_inlinecss:
                  font-size: 18pt
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
<h2 class="my-2">Página de ortografia dos dedos. </h2>
<p class = "my-2">
  Se retém funcionalidade nas suas mãos, esta página é para si.
  Ao apontar com o dedo, pode soletrar palavras e frases para o seu parceiro.
  Palavras usadas com mais frequência podem ser escritas nos espaços em branco.
  Ao apontar para a palavra <strong class = "bold"> „ CASA "*</strong> indica ao seu parceiro que agora
  deseja se comunicar com seus olhos usando o livro principal.
</p>
:::
::: slot training-page-description
<p class = "fsize-3">
Quanto assimilar a técnica base através desta página de teste, poderá 
escrever as suas próprias páginas usando as que estão em branco neste livro.
</p>
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
<div class="flex-h items-align-center lheight-1_5x" style="width: calc(var(--page-width) - 60mm);">
  <p class="cover-footer-text">
    <span class="fsize-8 bold">sistema de comunicação não verbal</span><br>
    <span class="red-color fsize-8 bold">acecent.re/speakbook</span><br>
    <span class="fsize-4">Speakbook 5ª edição © 2011 Patrick Joyce, Traduzido por Hélio Lourenço</span>
  </p>
  <div class="flex-grow-1"></div>
  <img style="width: 30mm;height: 30mm;" :src="$withBase('/speakbook/images/PublishedByAce.svg')" />
</div>
:::

::: slot inst-01-flt-right-content
<div class="abs-fill-parent flex-h" style="align-items: flex-end;">
  <div class="flex-grow-1"></div>
  <div class="flex-v">
    <img class="m-1" style="width: 58.5mm; height: 79.7mm; box-sizing: border-box;" :src="$withBase('/speakbook/images/01.png')"  />
    <div class="m-1 p-1 flex-grow-1 flt-box" style="width: 57.5mm; min-height: 79.7mm; box-sizing: border-box;">
      <h3 class="my-1 fsize-5">Como escrever no Speakbook </h3>
      <p class = "my-2 fsize-4_5"> Aquilo que escreve no Speakbook irá depender das suas necessidades específicas, mas, independentemente do que escrever, deve sempre manter o mesmo texto nas páginas que formam um par, como que sendo o espelho uma da outra - tal como o exemplo acima. O seu parceiro de comunicação fala num idioma diferente do seu? Sem problema - escreva em diferentes idiomas em cada lado. </p>
    </div>
  </div>
</div>
:::




::: slot inst-01-content
<div class="p-1 text-center">
  <SpeakBookTextFourColorBkg class="speakbook-title fsize-10 p-1 bold" :text="$page.frontmatter.text.SPEAKBOOK"></SpeakBookTextFourColorBkg>
</div>
<p> Speakbook é uma ferramenta de comunicação para pessoas que não conseguem falar e têm dificuldades em usar os membros superiores, mas retêm função ocular. Esta edição destina-se a pessoas que conseguem ler e soletrar. Versões para pessoas que não conseguem ler, em outros idiomas, e edição livro de bolso disponíveis em <b>https://acecent.re/speakbook</b> </p>
<h2 class = "fsize-6"> Instruções de uso. </h2>
<p> Para começar, irá precisar de: Speakbook, um marcador de tinta preta não permanete e respetivo quadro, um pano para apagar, e um parceiro de comunicação. </p>
<p>
Você e o seu parceiro de comunicação devem estar sentados de frente um para o outro, à distância de um metro. Dependendo da sua visão, talvez sinta que devem ajustar esta distância. Abra o Speakbook na página de teste, na contracapa. Esta página já se encontra preenchida, para o ajudar a aprender a técnica base de uso. Quando estiver confortável com esta técnica, poderá escrever a suas próprias páginas, usando os espaços em branco disponibilizados. Dobre o livro nesta página e segure-o entre vocês os dois, de forma que ambos estejam na mesma página, e consigam ver os olhos um do outro através da abertura central. Agora, olhe para as mensagens na página e escolha uma. Quando decidir, dê sinal ao seu parceiro que está preparado para começar – este sinal pode ser dado olhando para o seu parceiro e piscar os olhos, movendo as sobrancelhas, etc. – aquilo que melhor se adeque a si. A seguir, olhe para a mensagem que pretende comunicar, por aproximadamente um segundo, e depois para o símbolo grande que corresponde ao que está na mensagem que escolheu. O seu parceiro seguirá os movimentos dos seus olhos – exemplo: o seu parceiro verá que olhou para o canto superior esquerdo seguido do triângulo grande, e prevê que a palavra escolhida por si é „copo de água !”. Então ele diz, „copo de água !” em voz alta, e você confirma com o sinal previamente combinado.
</p>
<p> Esta é a técnica base para usar o Speakbook. Agora, deverá aprender como utilizar as outras páginas do livro, pois a verdadeira essência do Speakbook reside no facto de lhe proporcionar fácil acesso a centenas de frases à sua escolha, que pode alterar sempre quiser, recorrendo apenas a um pano húmido e uma caneta. </p>
:::


::: slot inst-02-flt-right-label
<div class="pos-rel fill-height fill-width">
  <img class="abs-fill-parent" :src="$withBase('/speakbook/shapes/inst-02-right-label-bkg.svg')" />
  <div class="fsize-8 abs-at-center" style="transform: translate(calc(-50% + 5mm), calc(-50% - 5mm)) rotate(45deg); color: white;width: 42mm;text-align: center;">{{ $page.frontmatter.text.instructions }}</div>
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
<p>Cada página do Speakbook tem 14 ou 15 secções em branco, nas quais pode escrever o seu próprio conteúdo. Para que o utilizador possa navegar pelas diferentes páginas, criamos a „Página Inicial”. Esta encontra-se na frente do livro, e está marcada na margem da página com “INÍCIO” numa aba a negro. A ideia é escrever as 7 frases que mais usa nesta página, pois esta é a página onde irá sempre começar. Nos restantes 8 espaços em branco escreva as ligações que o direcionam para outras 8 folhas. Estas devem ser utilizadas para aspetos da sua vida que necessitem de frase mais específicas – tal como hora do banho, ou sair de carro. À esquerda está um exemplo de um formato para a página “INÍCIO”. As 8 letras maiúsculas a negrito são ligações para outras páginas espalhadas no livro. Por exemplo, numa página em branco escreva “CAMA” na aba da página, e preencha os espaços em branco com as 14 frases mais relevantes para a sua rotina de deitar. Repita este processo para as restantes 7 ligações da página inicial, até preencher o livro todo. Se se enganar, ou quiser mudar algo, simplesmente apague e comece de novo. </p>
<p> Para usa o Speakbook, deve indicar ao seu parceiro de comunicação que pretende comunicar. O seu parceiro abre o Speakbook na página „INÍCIO” e você comunica, por exemplo, „CAMA”. O seu parceiro irá então folhear o livro para a página „CAMA” e você poderá comunicar, „Quero ir para a cama” – ou algo diferente. Cada página tem „INÍCIO” e „SOLETRAR” pré-impresso. „INÍCIO” serve para que possa sempre voltar à página „INÍCIO” (pode sempre querer levar um „Copo de água” para a cama). „SOLETRAR” permite-lhe soletrar alguma palavra que não esteja no livro. Esta funciona de forma semelhante às outras, com uma diferença. Esta página contém 6 blocos coloridos, cada um com 6 letras ou números coloridos. Está incluído o alfabeto completo, mais números de 1-9 (para zero use a letra O). Para selecionar deve olhar para a letra que quer comunicar, por aproximadamente um segundo, seguido do bloco que corresponde à cor da letra que escolheu. O seu parceiro segue os movimentos dos seus olhos, vê para onde olhou e descobre o que escolheu. Por exemplo, olha para o bloco no canto superior esquerdo seguido do bloco superior direito, e sabe que escolheu a letra „C”. O seu parceiro diz „C” em alta voz pra confirmar, e você continua para a próxima letra. Quando possível, o seu parceiro tenta adivinhar o resto da palavra, para acelerar o processo.  </p>
<p> O Speakbook tem espaço para 119 frases à sua escolha. Se não for suficiente, ou se precisar de adicionar mais de 14 frases numa secção em específico, pode duplicar a sua capacidade escrevendo duas frases em cada linha, uma em preto e outra em vermelho.  Escolhe a frase preta pelo processo normal, e a vermelha piscando os olhos quando olha para o símbolo grande. </p>
:::

::: slot last-page-content
<div style="width: 10mm;"></div>
<div class="flex-v block-holder b10x">
  <Content slot-key="last-page-heading" />
  <div class="flex-v mt-2"> <!-- split between letters keys and others -->
    <div class="flex-h">
      <div class="flex-v block-holder b3x">
        <div class="block b0x flex-grow-1" style="margin-left: 8mm;"></div>
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
        <div class="block b3x white-color black-bkg">{{ $page.frontmatter.text.HOME }}</div>
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
          <Content class="block" slot-key="redheart-img" />
          <div class="block pink-bkg">{{ $page.frontmatter.text._zero }}</div>
          <Content class="block" slot-key="smileyface-img" />
        </div>
      </div>
    </div>
    <div class="flex-h flex-wrap">
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Q }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.W }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.E }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.R }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.T }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Y }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.U }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.I }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.O }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.P }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.A }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.S }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.D }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.F }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.G }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.H }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.J }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.K }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.L }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text._atsign }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.Z }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.X }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.C }}</div>
      <div class="block b1_5x yellow-bkg">{{ $page.frontmatter.text.YES }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.V }}</div>
      <div class="block b1_5x yellow-bkg">{{ $page.frontmatter.text.NO }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.B }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.N }}</div>
      <div class="block cyan-bkg">{{ $page.frontmatter.text.M }}</div>
    </div>
  </div>
</div>
:::

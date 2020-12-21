---
layout: SpeakBook
external_templates_data:
  instruction_page01: base/rtl/instruction-page01.yaml
  instruction_page02: base/rtl/instruction-page02.yaml
  grid_page04: base/classic/grid-page04.yaml
  grid_page05: base/classic/grid-page05.yaml
  grid_page06: base/classic/grid-page06.yaml
  grid_page07: base/classic/grid-page07.yaml
  grid_page08: base/classic/grid-page08.yaml
  grid_page09: base/classic/grid-page09.yaml
  grid_page24: base/classic/grid-page24.yaml
  grid_page25: base/classic/grid-page25.yaml
  text_dict: ar/speakbook-text.yaml
external_append_content:
  - common/imgs.ejs
  - common/rtl/guides.ejs
  - common/rtl/misc.ejs
  - ar/instructions-page.ejs
  - ar/intro.ejs
  - ar/last-page.ejs
  - ar/misc.ejs
classic_edition: true
text:
  copyof: text_dict
slots_in_need_for_translation:
  - training-page-description
  - last-page-heading
  - cover-footer
  - inst-01-flt-right-content
  - inst-01-content
  - inst-02-flt-left-label
  - inst-02-content
rtl: true
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
      "0":
        rows:
          "4":
            entries:
              "5":
                comment: HOME
                inlinecss:
                  font-size: 14pt
  - name: page07
    copyof: grid_page07
    start_spacing_slotname: cut-out-left-side-guide-04
    columns:
      "0":
        rows:
          "0":
            entries:
              "3":
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
      "0":
        rows:
          "0":
            __OVERWRITE_rows:
              - image: shape-heart-1x-img
                text_key: i_love_you
                inlinecss:
                  margin-left: 43mm
              - image: shape-circle-1x-img
                text_key: yes
                inlinecss:
                  margin-left: 30mm
              - image: shape-triangle-1x-img
                text_key: no
                inlinecss:
                  margin-left: 14mm
              - image: shape-psquare-1x-img
                text_key: CAR
  - name: page25
    copyof: grid_page25
    start_spacing_slotname: cut-out-left-side-guide-13
    columns:
      "0":
        rows:
          "4":
            __OVERWRITE_rows:
              - image: shape-heart-1x-img
                text_key: i_love_you
                inlinecss:
                  margin-right: 43mm
              - image: shape-circle-1x-img
                text_key: yes
                inlinecss:
                  margin-right: 30mm
              - image: shape-triangle-1x-img
                text_key: no
                inlinecss:
                  margin-right: 14mm
              - image: shape-square-1x-img
                text_key: CAR
---




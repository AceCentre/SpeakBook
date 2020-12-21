---
layout: SpeakBook
external_templates_data:
  instruction_page01: base/instruction-page01.yaml
  instruction_page02: base/instruction-page02.yaml
  grid_page04: base/classic/grid-page04.yaml
  grid_page05: base/classic/grid-page05.yaml
  grid_page06: base/classic/grid-page06.yaml
  grid_page07: base/classic/grid-page07.yaml
  grid_page08: base/classic/grid-page08.yaml
  grid_page09: base/classic/grid-page09.yaml
  grid_page24: base/classic/grid-page24.yaml
  grid_page25: base/classic/grid-page25.yaml
  text_dict: pl/speakbook-text.yaml
external_append_content:
  - common/guides.ejs
  - common/imgs.ejs
  - common/misc.ejs
  - common/last-page.ejs
  - pl/instructions-page.ejs
  - pl/intro.ejs
  - pl/last-page-header.ejs
  - pl/misc.ejs
classic_edition: true
text:
  copyof: text_dict
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
    start_spacing_inlinecss: null
    inlinecss: null
  - name: page12
    comment: no cut out
    copyof: page08
  - name: page13
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-07
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss: null
    __OVERWRITE_inlinecss: null
  - name: page14
    comment: no cut out
    copyof: page08
  - name: page15
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-08
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss: null
    __OVERWRITE_inlinecss: null
  - name: page16
    comment: no cut out
    copyof: page08
  - name: page17
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-09
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss: null
    __OVERWRITE_inlinecss: null
  - name: page18
    comment: no cut out
    copyof: page08
  - name: page19
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-10
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss: null
    __OVERWRITE_inlinecss: null
  - name: page20
    comment: no cut out
    copyof: page08
  - name: page21
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-11
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss: null
    __OVERWRITE_inlinecss: null
  - name: page22
    comment: no cut out
    copyof: page08
  - name: page23
    copyof: page09
    start_spacing_slotname: cut-out-right-side-guide-12
    comment2: remove rotate 180deg
    __OVERWRITE_start_spacing_inlinecss: null
    __OVERWRITE_inlinecss: null
  - name: page24
    copyof: grid_page24
  - name: page25
    copyof: grid_page25
---

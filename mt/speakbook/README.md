---
layout: SpeakBook
external_templates_data:
  instruction_page01: base/instruction-page01.yaml
  instruction_page02: base/instruction-page02.yaml
  grid_page04: base/grid-page04.yaml
  grid_page05: base/grid-page05.yaml
  grid_page06: mt/grid-page06.yaml
  grid_page07: mt/grid-page07.yaml
  grid_page08: base/grid-page08.yaml
  grid_page09: base/grid-page09.yaml
  grid_page24: base/grid-page24.yaml
  grid_page25: base/grid-page25.yaml
  text_dict: mt/speakbook-text.yaml
external_append_content:
  - common/imgs.ejs
  - mt/guides.ejs
  - mt/instructions-page.ejs
  - mt/intro.ejs
  - mt/last-page.ejs
  - mt/misc.ejs
text:
  copyof: text_dict
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
      "0":
        rows:
          "0":
            rows:
              "3":
                comment: CAR
                text_inlinecss:
                  font-size: 12pt
      "2":
        rows:
          "0":
            rows:
              "0":
                comment: i'm too hot
                text_inlinecss:
                  font-size: 20pt
  - name: page25
    copyof: grid_page25
    columns:
      "0":
        rows:
          "4":
            rows:
              "3":
                comment: CAR
                text_inlinecss:
                  font-size: 18pt
      "2":
        rows:
          "4":
            rows:
              "0":
                comment: i'm too hot
                text_inlinecss:
                  font-size: 20pt
---


---
layout: SpeakBook
external_templates_data:
  instruction_page01: base/instruction-page01.yaml
  instruction_page02: base/instruction-page02.yaml
  grid_page04: base/grid-page04.yaml
  grid_page05: base/grid-page05.yaml
  grid_page06: hr/grid-page06.yaml
  grid_page07: hr/grid-page07.yaml
  grid_page08: base/grid-page08.yaml
  grid_page09: base/grid-page09.yaml
  grid_page24: base/grid-page24.yaml
  grid_page25: base/grid-page25.yaml
  text_dict: hr/speakbook-text.yaml
external_append_content:
  - common/imgs.ejs
  - hr/guides.ejs
  - hr/instructions-page.ejs
  - hr/intro.ejs
  - hr/last-page.ejs
  - hr/misc.ejs
text:
  copyof: text_dict
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
    inlinecss:
      font-size: 10.5pt
  - copyof: instruction_page02
    inlinecss:
      font-size: 10.5pt
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
                  font-size: 13pt
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
                  font-size: 13pt
---


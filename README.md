---
title: SpeakBook Index Page
description: This is a project to build a toolchain for multi-lingual PDF's. Initial document is SpeakBook; a low-tech communication chart and book.
---

<img src="https://i.imgur.com/FyH8YF2.png" :src="$withBase('/assets/logo.png')" alt="SpeakBook" style="width:100%">

# Table of Contents

- [Introduction](#introduction)
- [Complete Translatons](#complete-translatons)
  - [<g-emoji class="g-emoji" alias="gb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ec-1f1e7.png">🇬🇧</g-emoji> English](#english)
  - [<g-emoji class="g-emoji" alias="tr" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f9-1f1f7.png">🇹🇷</g-emoji> Turkish](#turkish)
  - [<g-emoji class="g-emoji" alias="south_africa" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ff-1f1e6.png">🇿🇦</g-emoji> Afrikaans](#afrikaans)
  - [<g-emoji class="g-emoji" alias="de" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ea.png">🇩🇪</g-emoji> German](#german)
  - [<g-emoji class="g-emoji" alias="portugal" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f9.png">🇵🇹</g-emoji> Portuguese](#portuguese)
  - [<g-emoji class="g-emoji" alias="bulgaria" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ec.png">🇧🇬</g-emoji> Bulgarian](#bulgarian)
  - [<g-emoji class="g-emoji" alias="malta" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1f9.png">🇲🇹</g-emoji> Maltese](#maltese)
- [Needing "Printing Instructions" (but complete otherwise)](#needing-printing-instructions-but-complete-otherwise)
  - [<g-emoji class="g-emoji" alias="sweden" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f8-1f1ea.png">🇸🇪</g-emoji> Swedish](#swedish)
  - [<g-emoji class="g-emoji" alias="es" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ea-1f1f8.png">🇪🇸</g-emoji> Spanish](#spanish)
  - [<g-emoji class="g-emoji" alias="fr" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1eb-1f1f7.png">🇫🇷</g-emoji> French](#french)
  - [<g-emoji class="g-emoji" alias="mozambique" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1ff.png">🇲🇿</g-emoji> Zulu](#zulu)
- [Needs a proof reader](#needs-a-proof-reader)

  - [<g-emoji class="g-emoji" alias="cn" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1e8-1f1f3.png">🇨🇳</g-emoji> Chinese Simplified](#chinese-simplified)
  - [<g-emoji class="g-emoji" alias="mozambique" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f2-1f1ff.png">🇲🇿</g-emoji> Arabic](#arabic)
  - [<g-emoji class="g-emoji" alias="pakistan" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f0.png">🇵🇰</g-emoji> Urdu](#urdu)
  - [<g-emoji class="g-emoji" alias="poland" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1f5-1f1f1.png">🇵🇱</g-emoji> Polish](#polish)
  - [<g-emoji class="g-emoji" alias="armenia" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f2.png">🇦🇲</g-emoji> Armenian](#armenian)
  - [<g-emoji class="g-emoji" alias="armenia" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f7.png">🇭🇷</g-emoji> Croatian](#croatian)
  - [<g-emoji class="g-emoji" alias="maori" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f1ed-1f1f7.png">🇳🇿</g-emoji> Maori](#maori)

- [How do I create a new version for my language - or improve a language translation](#how-do-i-create-a-new-version-for-my-language---or-improve-a-language-translation)
- [I want it to do **\_** or can it print upside down?](#i-want-it-to-do-_____-or-can-it-print-upside-down)
- [Technical Background](#technical-background)
  - [Layout](#layout)
  - [Package scripts](#package-scripts)
  - [Script to update all files from POEditor](#script-to-update-all-files-from-poeditor)

## Introduction

This is a repository to hold the working versions of [Patrick Joyce's SpeakBook project](./archive). We aim to provide a platform for crowd-sourced version control of future PDF's here. More info (_and the current final releases_) can be found at the Ace Centre's project page [here](http://acecentre.org.uk/project/speakbook/).

The current _in-progress_ versions (Note: will only look as intended in Chrome. We recommend looking at the PDF builds):

## Complete Translatons

### English

🇬🇧 🇺🇸

- [Color-Blind Friendly](/speakbook/) - 📄 [A4 PDF](/speakbook/index.pdf)
- [Colour Version](/speakbook/classic.html) - 📄 [A4 PDF](/speakbook/classic.pdf)
- [Printing Instructions](/speakbook/printing-instructions.html) - 📄 [A4 PDF](/speakbook/printing-instructions.pdf)

[Complete Zipped package with US Letter size](/speakbook/en-speakbook.zip)

With thanks to Suzanne Guerin and her colleagues for finding the mistake with the circles/triangles and cyan/green dots!

### Turkish

🇹🇷

- [Color-Blind Friendly](/tr/speakbook/) - 📄 [A4 PDF](/tr/speakbook/index.pdf)
- [Colour Version](/tr/speakbook/classic.html) - 📄 [A4 PDF](/tr/speakbook/classic.pdf)
- [Printing Instructions](/tr/speakbook/printing-instructions.html) - 📄 [A4 PDF](/tr/speakbook/printing-instructions.pdf)

[Complete Zipped package with US Letter size](/tr/speakbook/tr-speakbook.zip)

**Credits** Ersin Sinay

### German

🇩🇪

- [Color-Blind Friendly](/de/speakbook/) - 📄 [A4 PDF](/de/speakbook/index.pdf)
- [Colour Version](/de/speakbook/classic.html) - 📄 [A4 PDF](/de/speakbook/classic.pdf)
- [Printing Instructions](/de/speakbook/printing-instructions.html) - 📄 [A4 PDF](/de/speakbook/printing-instructions.pdf)

[Complete Zipped package with US Letter size](/de/speakbook/de-speakbook.zip)

**Credits** [Julius Deutsch, kommhelp e.V.](mailto:j.deutsch@kommhelp.de), Michael Ritson, Ace Centre, UK.

### Afrikaans

🇿🇦

- [Color-Blind Friendly](/af/speakbook/) - 📄 [A4 PDF](/af/speakbook/index.pdf)
- [Colour Version](/af/speakbook/classic.html) - 📄 [A4 PDF](/af/speakbook/classic.pdf)
- [Printing Instructions](/af/speakbook/printing-instructions.html) - 📄 [A4 PDF](/af/speakbook/printing-instructions.pdf)

[Complete Zipped package with US Letter size](/af/speakbook/af-speakbook.zip)

**Credits** Emma Emmerich, Inclusive Solutions.

### Portuguese

🇵🇹

- [Color-Blind Friendly](/po/speakbook/) - 📄 [A4 PDF](/po/speakbook/index.pdf)
- [Colour Version](/po/speakbook/classic.html) - 📄 [A4 PDF](/po/speakbook/classic.pdf)
- [Printing Instructions](/po/speakbook/printing-instructions.html) - 📄 [A4 PDF](/po/speakbook/printing-instructions.pdf)

[Complete Zipped package with US Letter size](/po/speakbook/po-speakbook.zip)

**Credits** Hélio Lourenço, Ace Centre UK

### Maltese

🇲🇹

- [Color-Blind Friendly](/mt/speakbook/) - 📄 [A4 PDF](/mt/speakbook/index.pdf)
- [Colour Version](/mt/speakbook/classic.html) - 📄 [A4 PDF](/mt/speakbook/classic.pdf)
- [Printing Instructions](/mt/speakbook/printing-instructions.html) - 📄 [A4 PDF](/mt/speakbook/printing-instructions.pdf)

[Complete Zipped package with US Letter size](/mt/speakbook/mt-speakbook.zip)

**Credits** Martina Zarb, Mariah Amber Busuttil, Jamie Said, Access to Communication and Technology Unit (ACTU), Malta

### Bulgarian

🇧🇬

**NB: Work in progress**

- [Color-Blind Friendly](/bg/speakbook/) - 📄 [A4 PDF](/bg/speakbook/index.pdf)
- [Colour Version](/bg/speakbook/classic.html) - 📄 [A4 PDF](/bg/speakbook/classic.pdf)
- [Printing Instructions](/bg/speakbook/printing-instructions.html) - 📄 [A4 PDF](/bg/speakbook/printing-instructions.pdf)

[Complete Zipped package with US Letter size](/bg/speakbook/bg-speakbook.zip)

**Credits** Evgeniya Hristova

## Needing "Printing Instructions" (but complete otherwise)

### Swedish

🇸🇪

- [Color-Blind Friendly](/sv/speakbook/) - 📄 [A4 PDF](/sv/speakbook/index.pdf)
- [Colour Version](/sv/speakbook/classic.html) - 📄 [A4 PDF](/sv/speakbook/classic.pdf)

[Complete Zipped package with US Letter size](/sv/speakbook/sv-speakbook.zip)

### Spanish

🇪🇸

- [Color-Blind Friendly](/es/speakbook/) - 📄 [A4 PDF](/es/speakbook/index.pdf)
- [Colour Version](/es/speakbook/classic.html) - 📄 [A4 PDF](/es/speakbook/classic.pdf)

[Complete Zipped package with US Letter size](/es/speakbook/es-speakbook.zip)

### French

🇫🇷

- [Color-Blind Friendly](/fr/speakbook/) - 📄 [A4 PDF](/fr/speakbook/index.pdf)
- [Colour Version](/fr/speakbook/classic.html) - 📄 [A4 PDF](/fr/speakbook/classic.pdf)

[Complete Zipped package with US Letter size](/fr/speakbook/fr-speakbook.zip)

**Credits** Michael Ritson, Ace Centre, UK.

### Zulu

🇲🇿

- [Color-Blind Friendly](/zu/speakbook/) - 📄 [A4 PDF](/zu/speakbook/index.pdf)
- [Colour Version](/zu/speakbook/classic.html) - 📄 [A4 PDF](/zu/speakbook/classic.pdf)

[Complete Zipped package with US Letter size](/zu/speakbook/zu-speakbook.zip)

**Credits** Sipho Sibanda, Inclusive Solutions

## Needs a proof reader

### Chinese Simplified

🇨🇳

NB: We really are not sure how speakbook would work in Chinese. Maybe we need to strip out the finger spelling page - and spelling e-tran style page.

- [Color-Blind Friendly](/zh-CN/speakbook/) - 📄 [A4 PDF](/zh-CN/speakbook/index.pdf)
- [Colour Version](/zh-CN/speakbook/classic.html) - 📄 [A4 PDF](/zh-CN/speakbook/classic.pdf)

[Complete Zipped package with US Letter size](/zh-CN/speakbook/zh-CN-speakbook.zip)

### Arabic

🇲🇿

Note: using Abjadī alphabet

- [Color-Blind Friendly](/ar/speakbook/) - 📄 [A4 PDF](/ar/speakbook/index.pdf)
- [Colour Version](/ar/speakbook/classic.html) - 📄 [A4 PDF](/ar/speakbook/classic.pdf)
- [Printing Instructions](/ar/speakbook/printing-instructions.html) - 📄 [A4 PDF](/af/speakbook/printing-instructions.pdf)

[Complete Zipped package with US Letter size](/ar/speakbook/ar-speakbook.zip)

**Credits** Hossein Amin, Iraq.

### Urdu

🇵🇰

- [Color-Blind Friendly](/ur/speakbook/) - 📄 [A4 PDF](/ur/speakbook/index.pdf)
- [Colour Version](/ur/speakbook/classic.html) - 📄 [A4 PDF](/ur/speakbook/classic.pdf)

[Complete Zipped package with US Letter size](/ur/speakbook/ur-speakbook.zip)

### Polish

🇵🇱

- [Color-Blind Friendly](/pl/speakbook/) - 📄 [A4 PDF](/pl/speakbook/index.pdf)
- [Colour Version](/pl/speakbook/classic.html) - 📄 [A4 PDF](/pl/speakbook/classic.pdf)

[Complete Zipped package with US Letter size](/pl/speakbook/pl-speakbook.zip)

### Armenian

🇦🇲

- [Color-Blind Friendly](/hu/speakbook/) - 📄 [A4 PDF](/hu/speakbook/index.pdf)
- [Colour Version](/hu/speakbook/classic.html) - 📄 [A4 PDF](/hu/speakbook/classic.pdf)

[Complete Zipped package with US Letter size](/hu/speakbook/hu-speakbook.zip)

### Croatian

🇭🇷

- [Color-Blind Friendly](/hr/speakbook/) - 📄 [A4 PDF](/hr/speakbook/index.pdf)
- [Colour Version](/hr/speakbook/classic.html) - 📄 [A4 PDF](/hr/speakbook/classic.pdf)

[Complete Zipped package with US Letter size](/hr/speakbook/hr-speakbook.zip)

### Maori

🇳🇿

- [Color-Blind Friendly](/mi/speakbook/) - 📄 [A4 PDF](/mi/speakbook/index.pdf)
- [Colour Version](/mi/speakbook/classic.html) - 📄 [A4 PDF](/mi/speakbook/classic.pdf)

[Complete Zipped package with US Letter size](/mi/speakbook/mi-speakbook.zip)

## How do I create a new version for my language - or improve a language translation

Firstly - _Great!_ Here are the steps:

1. Go to <https://poeditor.com/join/project/wKsMtKRLIj> and join up. Pick a current language to help edit - or create a new one.
2. What happens is you end up with a table. In one column is English snippets of text. And in the other you write that languages translation. Have a look at the [English](https://speakbook.acecentre.net/speakbook/index.pdf) version where the strings are from. It should make sense what things mean. There are some strange bits - some bits later on have html embedded in them. Don’t worry - just do what you can. You can’t break anything!
3. Once you have done what you can - send [me an email](mailto:wwade@acecentre.org.uk) and I’ll run a little script that converts it. It really takes me no more than about 10 minutes to do. Once done you can see the changes on our [development page](http://speakbook.acecentre.net)
4. There’s usually tweaks to be made around how we do the e-Tran frame and finger spelling page. At that stage we just have a email chat about the best way forward. Some languages don’t bother to use all their letters - or we ignore the numbers. Lots of things we can do. And feel free to change things like the static words like “I feel hot” to something more regional.
5. \*Lastly\*\* - we translate the printing instructions page. That’s just a text or word file you can [send me](mailto:wwade@acecentre.org.uk). Example [here](https://speakbook.acecentre.net/speakbook/printing-instructions.pdf)

## I want it to do **\_** or can it print upside down?

[Get in touch with the team](mailto:wwade@acecentre.org.uk) if you have a special request. We occasionally do sprints of work on SpeakBook to add new features. Alternatively look at the current
[Issues here](https://github.com/acecentre/SpeakBook/issues). We welcome code changes and pull requests!

**Urgent needs**

- Need translations for a [printed instructions sheet ](https://acecentre.org.uk/wp-content/uploads/2018/11/Printing-Instructions1.pdf)
- More serious coding issues see the queue [here](https://github.com/acecentre/SpeakBook/issues).

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) [![OpenAAC](https://img.shields.io/badge/OpenAAC-💬-red?style=plastic&logoWidth=40&link=https://www.openaac.org)](https://img.shields.io/badge/OpenAAC-💬-red?style=plastic&logoWidth=40&link=https://www.openaac.org) [![Netlify Status](https://api.netlify.com/api/v1/badges/e7e4b2ad-fd21-4239-8141-ea608482fea7/deploy-status)](https://app.netlify.com/sites/speakbook/deploys)

## Technical Background

This is simply a Vue.js themed template with some scripts to generate a PDF of the html document that is created. Its designed for chrome as chrome does the PDF generation. We use [PO language strings](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html) in this project. On each markdown file we have a `text:` field where there is a list of strings available to the page. This means you can separate the design logic from the language information. We have some scripts to aid this process. A Markdown->PO script to create a PO file from a file - and then a PO->Markdown script that applies new language strings to a markdown file.

We also have a very natty script that uses Google translate to make a new po file.. See below

<a target="_blank" rel="noopener noreferrer" href="https://www.netlify.com">
<img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify">
</a>

### Layout

    .vuepress/
        build-pdf-plugin.js    <-  The pdf build plugin.
        config.js
        dist/                  <- Where the final build is outputted
        public/                <- Static assets like images sit here and in SpeakBook/
        theme/
            layouts/
                SpeakBook.vue  <- The main logic for SpeakBook
            styles/
            util/
            fonts/
            components/

    .scripts/
        common.js
        apply-po-to-md.js     <- Apply a PO Language file to Markdown file.
        getPOfiles.js         <- NOT WORKING - Grab files from POEditor
        po-from-md.js         <- Make a master PO file from a markdown file.

    speakbook/
        README.md             <- The English version of SpeakBook

    lang/speakbook/
        README.md             <- Other language versions

### Package scripts

```
# run a local server for development
$ yarn dev
# build it in static html format
$ yarn build
# build pdf format for all pages
$ yarn buildpdf
# build a zip of all the pdfs for each language
$ node .scripts/buildfinalzip.js
$ netlify deploy --dir=.vuepress/dist
$ netlify deploy --prod
```

There is also a way we can use Google translate to start a new language. This is useful to get you going in the right direction..
e.g. For English to Armenian

`node .scripts/po-google-translate.js res/lang/master.po res/lang/SpeakBook_Armenian.po en hy'`

### Script to update all files from POEditor

```
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Bulgarian.po bg/speakbook/README.md > bg/speakbook/README2.md && mv bg/speakbook/README2.md bg/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Arabic.po ar/speakbook/README.md > ar/speakbook/README2.md && mv ar/speakbook/README2.md ar/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Spanish.po es/speakbook/README.md > es/speakbook/README2.md && mv es/speakbook/README2.md es/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_French.po fr/speakbook/README.md > fr/speakbook/README2.md && mv fr/speakbook/README2.md fr/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Portuguese.po po/speakbook/README.md > po/speakbook/README2.md && mv po/speakbook/README2.md po/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Swedish.po sv/speakbook/README.md > sv/speakbook/README2.md && mv sv/speakbook/README2.md sv/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_German.po de/speakbook/README.md > de/speakbook/README2.md && mv de/speakbook/README2.md de/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Afrikaans.po af/speakbook/README.md > af/speakbook/README2.md && mv af/speakbook/README2.md af/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Zulu.po zu/speakbook/README.md > zu/speakbook/README2.md && mv zu/speakbook/README2.md zu/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Turkish.po tr/speakbook/README.md > tr/speakbook/README2.md && mv tr/speakbook/README2.md tr/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Maltese.po mt/speakbook/README.md > mt/speakbook/README2.md && mv mt/speakbook/README2.md mt/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Armenian.po hu/speakbook/README.md > hu/speakbook/README2.md && mv hu/speakbook/README2.md hu/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Croatian.po hr/speakbook/README.md > hr/speakbook/README2.md && mv hr/speakbook/README2.md hr/speakbook/README.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Maori.po mi/speakbook/README.md > mi/speakbook/README2.md && mv mi/speakbook/README2.md mi/speakbook/README.md

```

and likewise for Classic (colour version):

```
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Bulgarian.po bg/speakbook/classic.md > bg/speakbook/classic2.md && mv bg/speakbook/classic2.md bg/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Arabic.po ar/speakbook/classic.md > ar/speakbook/classic2.md && mv ar/speakbook/classic2.md ar/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Spanish.po es/speakbook/classic.md > es/speakbook/classic2.md && mv es/speakbook/classic2.md es/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_French.po fr/speakbook/classic.md > fr/speakbook/classic2.md && mv fr/speakbook/classic2.md fr/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Portuguese.po po/speakbook/classic.md > po/speakbook/classic2.md && mv po/speakbook/classic2.md po/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Swedish.po sv/speakbook/classic.md > sv/speakbook/classic2.md && mv sv/speakbook/classic2.md sv/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_German.po de/speakbook/classic.md > de/speakbook/classic2.md && mv de/speakbook/classic2.md de/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Afrikaans.po af/speakbook/classic.md > af/speakbook/classic2.md && mv af/speakbook/classic2.md af/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Zulu.po zu/speakbook/classic.md > zu/speakbook/classic2.md && mv zu/speakbook/classic2.md zu/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Turkish.po tr/speakbook/classic.md > tr/speakbook/classic2.md && mv tr/speakbook/classic2.md tr/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Maltese.po mt/speakbook/classic.md > mt/speakbook/classic2.md && mv mt/speakbook/classic2.md mt/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Armenian.po hu/speakbook/classic.md > hu/speakbook/classic2.md && mv hu/speakbook/classic2.md hu/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Croatian.po hr/speakbook/classic.md > hr/speakbook/classic2.md && mv hr/speakbook/classic2.md hr/speakbook/classic.md
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Maori.po mi/speakbook/classic.md > mi/speakbook/classic2.md && mv mi/speakbook/classic2.md mi/speakbook/classic.md

```

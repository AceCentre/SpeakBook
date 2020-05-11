---
title: SpeakBook Index Page
description: This is a repository to hold a mirror of [Patrick Joyce's SpeakBook project](https://web.archive.org/web/20170325172200/http://www.speakbook.org/) which is sadly no longer accessible on the web. More to follow soon
---
<img src="https://i.imgur.com/FyH8YF2.png" :src="$withBase('/assets/logo.png')" alt="SpeakBook" style="width:100%">

This is a project that builds a document and a PDF of the document is created. Its made using Vue.js. All documents are created in HTML/CSS and can be edited. We use a language strings which you can run a PO->Markdown script to convert PO strings to the document. 

- [English SpeakBook](./speakbook/) (and [PDF](./speakbook/index.pdf))
- [Swedish SpeakBook](./sv/speakbook/) (and [PDF](./sv/speakbook/index.pdf))
- [Portuguese SpeakBook](./po/speakbook/) (and [PDF](./po/speakbook/index.pdf))
- [Spanish SpeakBook](./es/speakbook/) (and [PDF](./es/speakbook/index.pdf))
- [German SpeakBook](./de/speakbook/) (and [PDF](./de/speakbook/index.pdf))
- [French SpeakBook](./fr/speakbook/) (and [PDF](./fr/speakbook/index.pdf))


# Package scripts

```
# run a local server for development
$ yarn dev
# build it in static html format
$ yarn build
# build pdf format for all pages
$ yarn buildpdf
```

# Language translation scripts

1. Export your PO file from POEditor
2. Convert your language file with the correct strings. e.g. 
```node .scripts/apply-po-to-md.js res/lang/Swedish.po speakbook/README.md > sv/speakbook/README.md```
3. Done!

If you need to make a new POEditor file of terms run
```node .scripts/po-from-md.js speakbook/README.md > res/master.po```


## Script to update all files from POEditor

```
node .scripts/apply-po-to-md.js res/lang/SpeakBook_Spanish.po es/speakbook/README.md > es/speakbook/README2.md && mv es/speakbook/README2.md es/speakbook/README.md 

node .scripts/apply-po-to-md.js res/lang/SpeakBook_French.po fr/speakbook/README.md > fr/speakbook/README2.md && mv fr/speakbook/README2.md fr/speakbook/README.md 

node .scripts/apply-po-to-md.js res/lang/SpeakBook_Portuguese.po po/speakbook/README.md > po/speakbook/README2.md && mv po/speakbook/README2.md po/speakbook/README.md 

node .scripts/apply-po-to-md.js res/lang/SpeakBook_Swedish.po sv/speakbook/README.md > sv/speakbook/README2.md && mv sv/speakbook/README2.md sv/speakbook/README.md 

node .scripts/apply-po-to-md.js res/lang/SpeakBook_German.po de/speakbook/README.md > de/speakbook/README2.md && mv de/speakbook/README2.md de/speakbook/README.md 
```


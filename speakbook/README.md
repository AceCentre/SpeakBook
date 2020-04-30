---
layout: SpeakBook
text:
  ring_bind_edge: Ring bind along this edge
  cut_out_this_part: Cut out this part.
  speakbook: SPEAKBOOK
  edition_nth: 4th
  edition: EDITION
  color_blind: Colour Blind
  friendly: Friendly!
  home_page: HOME PAGE
  instructions: instructions
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
          --left-spacing: 15mm
          --max-left-spacing: 40mm
          width: var(--max-left-spacing)
          height: var(--page-height)
          shape-outside: polygon(0 var(--spacing-offset-top), var(--max-left-spacing) var(--spacing-offset-top), var(--left-spacing) calc(var(--spacing-offset-top) + 18mm), var(--left-spacing) var(--page-height), 0 var(--page-height))
      - comment: floating content at center right
        dir: right
        mode: fixed
        inlinecss:
          --flt-width: 137mm
          --flt-height: var(--page-height)
          --flt-shape-width: var(--flt-width)
          --flt-shape-height: 165mm
          shape-outside: polygon(0 55mm, 100% 55mm, 100% 230mm, 0 230mm)
          top: 66mm
        slotname: inst-01-flt-right-content
  - content_slotname: inst-02-content
    floating_elements:
      - comment: right side cut out guide
        dir: right
        slotname: cut-out-right-side-guide-02
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
          --chrome-bugfix-bottom-offset: 4mm
        slotname: inst-02-flt-left-content

---

::: slot cut-out-center-guide
<div class="pos-rel flex-h justify-content-center" style="width:var(--cut-out-center-guide-width);height:var(--cut-out-center-guide-height);">
  <img class="abs-fill-parent" src="./shapes/cut-out-center-guide.svg" />
  <div class="wmode-vertical-lr rotate-180 fsize-10 bold grey-color text-center">
    {{ $page.frontmatter.text.cut_out_this_part }}
  </div>
</div>
:::
::: slot cut-out-right-side-guide-01
<div class="flex-h height-100ph grey-color">
  <img style="width:44.5mm;height:287.2mm;" src="./shapes/cut-out-right-side-guide.svg" />
  <div class="flex-v fsize-10 v-oneline-fsize-10 bold">
    <div v-for="i in 2" class="wmode-vertical-lr rotate-180 flex-grow-1 text-center">
      {{ $page.frontmatter.text.cut_out_this_part }}
    </div>
  </div>
</div>
:::
::: slot star-16p-bkg
<img class="fill-width fill-height" src="./shapes/star-16p.svg" />
:::
::: slot cut-out-right-side-guide-02
<div class="pos-rel height-100ph grey-color ml-1">
  <img class="abs-at-left-center" src="./shapes/cut-out-right-side-guide-02.svg" />
  <div class="height-100ph p-1 flex-v fsize-10 v-oneline-fsize-10 bold">
    <div v-for="i in 2" class="wmode-vertical-lr rotate-180 flex-grow-1 text-center">
      {{ $page.frontmatter.text.cut_out_this_part }}
    </div>
  </div>
</div>
:::

::: slot cover-footer
<div class="lheight-1_5x">
  <p class="text-center cover-footer-text">
    <span class="fsize-8 bold">non verbal communication system</span><br>
    <span class="red-color fsize-8 bold">www.speakbook.org</span><br>
    <span class="fsize-3">Speakbook 4th edition © 2011 Patrick Joyce</span>
  </p>
</div>
:::

::: slot inst-01-flt-right-content
<div class="abs-fill-parent flex-h" style="align-items: flex-end;">
  <div class="flex-grow-1"></div>
  <div class="flex-v">
    <img class="m-1" style="width:57.5mm;height:79.7mm;box-sizing:border-box;" src="./images/01.png"  />
    <div class="m-1 p-1 flex-grow-1 flt-box" style="width:57.5mm;min-height:79.7mm;box-sizing:border-box;">
      <h3 class="my-1 fsize-6">How to write on the speakbook</h3>
      <p class="my-2 fsize-5">Exactly what you write on the speakbook will depend on your particular requirements, but whatever you write, it is important that each side of any double page spread has the same text on it, and that they are a mirror image of each other - as in the example above. Do you and your partner speak different languages? No problem - just write a different language on either side.</p>
    </div>
  </div>
</div>
:::

::: slot inst-01-content
<div class="p-1 text-center">
  <SpeakBookTextFourColorBkg class="speakbook-title fsize-10 p-1 bold" :text="$page.frontmatter.text.speakbook"></SpeakBookTextFourColorBkg>
</div>
<p>Speakbook is a non verbal communication tool for people who cannot speak and have difficulty using their hands or arms, but who retain the use of their eyes. This edition is for people who can read and spell. For versions for non-readers, foreign language versions, and the pocket edition, visit <b>www.speakbook.org</b></p>
<h2 class="fsize-6">Instructions for use.</h2>
<p>To get started, you will need; the speakbook, a black, non-permanent whiteboard pen, a cloth to rub out, and a speaking partner.</p>
<p>
You and your speaking partner sit opposite each other about three feet apart. Depending on your eyesight, you may find it helpful to decrease or increase this distance. Open the speakbook to the training page inside the back cover. This is filled in already to help you learn the basic technique. When you‟ve mastered it, you can write your own pages, using the blank ones provided. Fold the book back on itself and hold it up between you, so you are both facing a ‟training page‟, and you can see each others eyes through the hole in the middle. You now look at the choices on the page to decide which one to communicate. When you‟ve decided, you indicate to your partner that you are ready to start
- this could be by looking at your partner and blinking, or by waggling your eyes up and down - whatever suits you. Then look at the message you want, for a second or so, followed by the large symbol the same as the little one by the side of the message. Your partner then follows your eye movements - for instance he might see that you have looked at the top left hand side of the board followed by the big triangle, so he knows that you must want to say „cup of tea !‟. He then says, “cup of tea !” out loud, and you confirm this with a blink, or some other pre-arranged signal
</p>
<p>This is the basic technique for using the speakbook. Now you need to learn how to use the other pages in the book, because the true genius of the speakbook lies in its ability to give you easy access to hundreds of phrases of your own choosing, phrases that you can change at any time, with only a damp cloth and the stroke of a pen.</p>
:::


::: slot inst-02-flt-right-label
<div class="pos-rel fill-height fill-width">
  <img class="abs-fill-parent" src="./shapes/inst-02-right-label-bkg.svg" />
  <div class="fsize-9 abs-at-center" style="transform:translate(calc(-50% + 18px), calc(-50% - 18px)) rotate(45deg);color:white;">{{ $page.frontmatter.text.instructions }}</div>
</div>
:::
::: slot inst-02-flt-left-content
<div class="flex-h" style="padding:3mm;">
  <div class="flex-grow-1 flex-v">
    <img class="m-1" style="width:57.5mm;height:79.7mm;box-sizing:border-box;" src="./images/02.png"  />
    <img class="m-1" style="width:57.5mm;height:79.7mm;box-sizing:border-box;" src="./images/03.png"  />
  </div>
  <Content slot-key="cut-out-center-guide" />
</div>
:::
::: slot inst-02-content
<p>Each page of the speakbook has 14 or 15 blank sections on which you can write your own text. In order that the user can move between the different pages, we have created the „home‟ page. This is found at the front of the book, and is marked with a black „HOME‟ tab at the edge of the page. The idea is that you write the 7 phrases you use the most on this page, as it is the page you always start on. Also, on 8 of the blank strips you write links to the other 8 blank double pages. These should be the parts of your life that require a more in depth set of phrases, these might be areas like bathtime, or going out in the car. On the left is an example of a possible layout for the „HOME‟ page. The 8 words in bold capital letters are links to double page spreads elsewhere in the book. What you do is, you find a blank page and write, for instance, „BED‟ on the edge tab, then on the strips you write the 14 phrases most relevant to your bedtime routine. Then you repeat this process for the other 7 links, until your book is full. If you make a mistake, or want to change a phrase, then just wipe it off with a damp cloth and start again.</p>
<p>To use the speakbook, you indicate to your partner that you want to communicate. Your partner opens the speakbook to the „HOME‟ page and you communicate, for example, „BED‟. Your partner then turns to the „BED‟ page and you can then communicate, „I want to go to bed‟ - or whatever. Each page has „HOME‟ and „SPELL‟ pre-printed on it. The „HOME‟ is so that you can can always get back to the „HOME‟ page (you might want a „Cup of tea !‟ to take to bed with you). The ‟SPELL‟ page allows you to spell out individual words and phrases that don‟t appear elsewhere in the book. It works in a similar way as the other pages, with one difference. On this page there are 6 coloured blocks, each with 6 coloured letters or numbers on it. The whole alphabet is there, plus numbers 1-9 (for zero use the letter O). You look at the letter you want to communicate, for a second or so, followed by the coloured block of the same colour as your chosen letter. Your partner follows your eyes, sees that you have looked at, for instance, the top left block followed by the top right block (which is green), and knows you want „C‟. Your partner says „C‟ out loud to confirm, and you move on to the next letter. Your partner guesses the rest of the word when possible, to speed the process up.</p>
<p>Speakbook has room for 119 phrases of your choosing. If this is not enough, or if you need more than 14 phrases in one particular section, then you can double its capacity by writing two phrases on each line, one in black pen, one in red. You choose a black phrase in the normal way, a red one by blinking when you look at the large symbol.</p>
:::


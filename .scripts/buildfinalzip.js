//This is a shocking bit of code. I apologise to anyone who reads it. 

const fs = require('fs')
const { exec } = require("child_process");
const mkdirp = require('mkdirp')
var archiver = require('archiver');

var langs = ["af", "ar", "de", "es", "fr", "mt", "po", "sv", "tr", "zu"];

langs.forEach(createDirs);
//English - we dont add to array as it will make a mess of the zipping.. Im just tired. I dont know the right 
mkdirp('.vuepress/dist-final/en/').then(made =>
  console.log(`made directories, starting with ${made}`));


exec("PAGE_SIZE=A4 yarn buildpdf", (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
});
zipEnglishForSize('A4');

langs.forEach(zipForSizeA4);
exec("PAGE_SIZE=Letter yarn buildpdf", (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
});
langs.forEach(zipForSizeLetter);
zipEnglishForSize('Letter');

//Now finally zip it..
langs.push("en");
langs.forEach(zipFolder);
// Lastly lets move the whole final-dist to dist/zips
fs.rename('.vuepress/dist-final', '.vuepress/dist/zips', function (err) {
  if (err) throw err
  console.log('Successfully renamed - AKA moved!')
})


function createDirs(dir){
  mkdirp('.vuepress/dist-final/'+dir).then(made =>
    console.log(`made directories, starting with ${made}`));
} 

function zipEnglishForSize(size) {

  fs.copyFile('.vuepress/dist/speakbook/index.pdf', '.vuepress/dist-final/en/'+size+'-color-blind.pdf' , (err) => {
    if(err.code === 'ENOENT'){  }
  });
  fs.copyFile('.vuepress/dist/speakbook/classic.pdf', '.vuepress/dist-final/en/'+size+'-color.pdf', (err) => {
    if(err.code === 'ENOENT'){  }
  });
  fs.copyFile('.vuepress/dist/speakbook/printing-instructions.pdf', '.vuepress/dist-final/en/'+size+'-printing-instructions.pdf', (err) => {
    if(err.code === 'ENOENT'){  }
  });
}

function zipForSizeA4(lang) {
  size = "A4";

  fs.copyFile('.vuepress/dist/'+lang+'/speakbook/index.pdf', '.vuepress/dist-final/'+lang+'/'+size+'-color-blind.pdf' , (err) => {
    if(err.code === 'ENOENT'){  }
  });
  fs.copyFile('.vuepress/dist/'+lang+'/speakbook/classic.pdf', '.vuepress/dist-final/'+lang+'/'+size+'-color.pdf', (err) => {
    if(err.code === 'ENOENT'){  }
  });
  fs.copyFile('.vuepress/dist/'+lang+'/speakbook/printing-instructions.pdf', '.vuepress/dist-final/'+lang+'/'+size+'-printing-instructions.pdf', (err) => {
    if(err.code === 'ENOENT'){  }
  });
}

function zipForSizeLetter(lang) {
  size = "Letter";

  fs.copyFile('.vuepress/dist/'+lang+'/speakbook/index.pdf', '.vuepress/dist-final/'+lang+'/'+size+'-color-blind.pdf' , (err) => {
    if(err.code === 'ENOENT'){  }
  });
  fs.copyFile('.vuepress/dist/'+lang+'/speakbook/classic.pdf', '.vuepress/dist-final/'+lang+'/'+size+'-color.pdf', (err) => {
    if(err.code === 'ENOENT'){  }
  });
  fs.copyFile('.vuepress/dist/'+lang+'/speakbook/printing-instructions.pdf', '.vuepress/dist-final/'+lang+'/'+size+'-printing-instructions.pdf', (err) => {
    if(err.code === 'ENOENT'){  }
  });
}

function zipFolder(lang){
  var output = fs.createWriteStream('.vuepress/dist-final/speakbook-'+lang+'.zip');
  var archive = archiver('zip');
  output.on('close', function () {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
  });
  
  archive.on('error', function(err){
      throw err;
  });
  
  archive.pipe(output);
  
  // append files from a sub-directory and naming it `new-subdir` within the archive (see docs for more options):
  archive.directory('.vuepress/dist-final/'+lang, false);
  archive.finalize();
}
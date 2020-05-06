const fs = require('fs');
const request = require('request');
const poconnect = require('node-poeditor');


const token = process.env.poeditorToken;
const id = '339273';
const obj = {
  language: 'po', // Define the language which you like to export
  type: 'po' // Define the export type. Please read the options in the API 
};

// Get languages
(async () => {
  try {
    const res = await poconnect.languages.available(token);
    // returns array. We want codes
  } catch (err) {
    // err => returns an error when failed
  }
})();

// Download language files
(async () => {
  try {
    const res = await poconnect.projects.export(token, id, obj);
    //download(res.url)
    print(res.url);
  } catch (err) {
    // err => returns an error when failed
  }
})();


const download = (url, dest, cb) => {
    const file = fs.createWriteStream(dest);
    const sendReq = request.get(url);

    // verify response code
    sendReq.on('response', (response) => {
        if (response.statusCode !== 200) {
            return cb('Response status was ' + response.statusCode);
        }

        sendReq.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => file.close(cb));

    // check for request errors
    sendReq.on('error', (err) => {
        fs.unlink(dest);
        return cb(err.message);
    });

    file.on('error', (err) => { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        return cb(err.message);
    });
};
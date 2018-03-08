const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

const folderPath = path.resolve(__dirname, args[0] || '/');
const outputPath = path.resolve(__dirname, args[1] || '/output.txt');

let names = fs.readdirSync(folderPath)
  .filter(isImage)
  .map(createImageTag);

fs.writeFile(outputPath, names.join('\r\n'), onDone);

function onDone (err) {
  if (err) throw err;

  console.log('All done!');
}

function isImage(name) {
  let fileStat = fs.statSync(path.resolve(folderPath, name));

  return fileStat.isFile() && /\.(png|jpg|jpeg)$/.test(name);
}

function createImageTag (name) {
  return `<img data-is-thumbnail="true" src="https://ministudio.rs/download/fusion-tables/small/${name}" />`;
}

const fs = require('fs');
const directory = './app/js/';
const fileNameToCreate = 'README.md';


const allFiles = fs.readdirSync(directory)
  .map(file => {
    var d = fs.readFileSync(directory + file, 'utf8', function(err, data){
      if(err) console.log(err)
      return data;
    })
    .trim()
    .split('\n')
    .filter(line => line.indexOf('//') !== -1)
    .map(line => line.replace('\r', '').replace('//', ''))
    .reverse()
    .join('\n')

    return ('\n## '+file+'\n').concat(d);
  });
  

  fs.writeFile(fileNameToCreate, allFiles, (e) => { e ? console.log(e) : console.log('File created')});

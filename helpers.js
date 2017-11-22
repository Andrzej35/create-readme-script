// random date function

function randomDate(start, end, repeats) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// call of the randomDate(new Date(2012, 0, 1), new Date())


// currying function
const curry = (fn) => {
	return (a) => {
		return (b) => {
			return fn(a, b);
		}
	}
};

// splitting data for more managable format
const splitData = (data, chunk) => {
	return data.reduce((a, c, i) => {
		const ind = Math.floor(i / chunk);
		a[ind] = (a[ind] || []).concat(c);
		return a;
	}, []);
};

// composition function
const compose = (f, g) => {
	return (a) => {
		return f(g(a));
	}
};


// mapper accepts function than data
const mapper = (fn, arr) => {
	return arr.map(fn).join('');
};

// html element cretion
const createHtml = (el) => { return document.createElement(el);};

// adding attribute to created html element
const createAttr = (el, atr, name) => { return el.setAttribute(atr, name);};

// appending html element to requirred location 
const appendElement = (el, placeholder) => {
	placeholder.appendChild(el);
	return placeholder;
};

// create Trailing Zeroes
const createTrailingZeroes = (number) => {
	return number < 10 ? `0${number}` : number;
};

// create Date Format
const createDateFormat = (timestamp) => {
	const currentTime = new Date(timestamp);
	return {
		hours: createTrailingZeroes(currentTime.getHours()),
		minutes: createTrailingZeroes(currentTime.getMinutes()),
		date: `${currentTime.getFullYear()}/${createTrailingZeroes(currentTime.getMonth() + 1)}/${createTrailingZeroes(currentTime.getDate())}`,
		ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
	};
};


// create readme file
// call with node 

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


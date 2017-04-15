const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.use(express.static('public'));
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('layout', 'layout/main-layout.ejs');

app.locals.pageTitle = 'PP - Web Colors App'

// Home Page
app.get('/', (req, res, next) => {
  res.render('home.ejs');
});

// Colors Page
app.get('/colors', (req, res, next) => {
  res.render('colors.ejs', {
    colorArray: colorArray
  });
});

// Category Page
app.get('/category', (req, res, next) => {
  res.render('category.ejs');
});

// Specific Colors
app.get('/blue', (req, res, next) => {
  res.render('blue.ejs', {
  colorArray: colorArray
  });
});

app.get('/grayscale', (req, res, next) => {
  res.render('grayscale.ejs', {
  colorArray: colorArray
  });
});
app.get('/red', (req, res, next) => {
  res.render('red.ejs', {
  colorArray: colorArray
  });
});

// Random's Page
app.get('/random', (req, res, next) => {
  res.render('random.ejs', {
  colorArray: colorArray[Math.floor(Math.random()*colorArray.length)]

  });
});

app.listen(3000);


// DATABASE OF COLORS
const colorArray = [
  { keyword: 'black',                hex: '#000000', category: 'grayscale' },
  { keyword: 'silver',               hex: '#c0c0c0', category: 'grayscale' },
  { keyword: 'gray',                 hex: '#808080', category: 'grayscale' },
  { keyword: 'white',                hex: '#ffffff', category: 'grayscale' },
  { keyword: 'maroon',               hex: '#800000', category: 'red' },
  { keyword: 'red',                  hex: '#ff0000', category: 'red' },
  { keyword: 'purple',               hex: '#800080', category: 'purple' },
  { keyword: 'fuchsia',              hex: '#ff00ff', category: 'pink' },
  { keyword: 'green',                hex: '#008000', category: 'green' },
  { keyword: 'lime',                 hex: '#00ff00', category: 'green' },
  { keyword: 'olive',                hex: '#808000', category: 'green' },
  { keyword: 'yellow',               hex: '#ffff00', category: 'yellow' },
  { keyword: 'navy',                 hex: '#000080', category: 'blue' },
  { keyword: 'blue',                 hex: '#0000ff', category: 'blue' },
  { keyword: 'teal',                 hex: '#008080', category: 'green' },
  { keyword: 'aqua',                 hex: '#00ffff', category: 'blue' },
  { keyword: 'orange',               hex: '#ffa500', category: 'orange' },
  { keyword: 'aliceblue',            hex: '#f0f8ff', category: 'blue' },
  { keyword: 'antiquewhite',         hex: '#faebd7', category: 'beige' },
  { keyword: 'aquamarine',           hex: '#7fffd4', category: 'green' },
  { keyword: 'azure',                hex: '#f0ffff', category: 'grayscale' },
  { keyword: 'beige',                hex: '#f5f5dc', category: 'beige' },
  { keyword: 'bisque',               hex: '#ffe4c4', category: 'beige' },
  { keyword: 'blanchedalmond',       hex: '#ffebcd', category: 'beige' },
  { keyword: 'blueviolet',           hex: '#8a2be2', category: 'purple' },
  { keyword: 'brown',                hex: '#a52a2a', category: 'brown' },
  { keyword: 'burlywood',            hex: '#deb887', category: 'brown' },
  { keyword: 'cadetblue',            hex: '#5f9ea0', category: 'blue' },
  { keyword: 'chartreuse',           hex: '#7fff00', category: 'green' },
  { keyword: 'chocolate',            hex: '#d2691e', category: 'brown' },
  { keyword: 'coral',                hex: '#ff7f50', category: 'orange' },
  { keyword: 'cornflowerblue',       hex: '#6495ed', category: 'blue' },
  { keyword: 'cornsilk',             hex: '#fff8dc', category: 'beige' },
  { keyword: 'crimson',              hex: '#dc143c', category: 'red' },
  { keyword: 'cyan',                 hex: '#00ffff', category: 'blue' },
  { keyword: 'darkblue',             hex: '#00008b', category: 'blue' },
  { keyword: 'darkcyan',             hex: '#008b8b', category: 'blue' },
  { keyword: 'darkgoldenrod',        hex: '#b8860b', category: 'brown' },
  { keyword: 'darkgray',             hex: '#a9a9a9', category: 'grayscale' },
  { keyword: 'darkgreen',            hex: '#006400', category: 'green' },
  { keyword: 'darkgrey',             hex: '#a9a9a9', category: 'grayscale' },
  { keyword: 'darkkhaki',            hex: '#bdb76b', category: 'beige' },
  { keyword: 'darkmagenta',          hex: '#8b008b', category: 'purple' },
  { keyword: 'darkolivegreen',       hex: '#556b2f', category: 'green' },
  { keyword: 'darkorange',           hex: '#ff8c00', category: 'orange' },
  { keyword: 'darkorchid',           hex: '#9932cc', category: 'purple' },
  { keyword: 'darkred',              hex: '#8b0000', category: 'red' },
  { keyword: 'darksalmon',           hex: '#e9967a', category: 'pink' },
  { keyword: 'darkseagreen',         hex: '#8fbc8f', category: 'green' },
  { keyword: 'darkslateblue',        hex: '#483d8b', category: 'blue' },
  { keyword: 'darkslategray',        hex: '#2f4f4f', category: 'grayscale' },
  { keyword: 'darkslategrey',        hex: '#2f4f4f', category: 'grayscale' },
  { keyword: 'darkturquoise',        hex: '#00ced1', category: 'blue' },
  { keyword: 'darkviolet',           hex: '#9400d3', category: 'puple' },
  { keyword: 'deeppink',             hex: '#ff1493', category: 'pink' },
  { keyword: 'deepskyblue',          hex: '#00bfff', category: 'blue' },
  { keyword: 'dimgray',              hex: '#696969', category: 'grayscale' },
  { keyword: 'dimgrey',              hex: '#696969', category: 'grayscale' },
  { keyword: 'dodgerblue',           hex: '#1e90ff', category: 'blue' },
  { keyword: 'firebrick',            hex: '#b22222', category: 'red' },
  { keyword: 'floralwhite',          hex: '#fffaf0', category: 'grayscale' },
  { keyword: 'forestgreen',          hex: '#228b22', category: 'green' },
  { keyword: 'gainsboro',            hex: '#dcdcdc', category: 'grayscale' },
  { keyword: 'ghostwhite',           hex: '#f8f8ff', category: 'grayscale' },
  { keyword: 'gold',                 hex: '#ffd700', category: 'yellow' },
  { keyword: 'goldenrod',            hex: '#daa520', category: 'brown' },
  { keyword: 'greenyellow',          hex: '#adff2f', category: 'green' },
  { keyword: 'grey',                 hex: '#808080', category: 'grayscale' },
  { keyword: 'honeydew',             hex: '#f0fff0', category: 'grayscale' },
  { keyword: 'hotpink',              hex: '#ff69b4', category: 'pink' },
  { keyword: 'indianred',            hex: '#cd5c5c', category: 'pink' },
  { keyword: 'indigo',               hex: '#4b0082', category: 'purple' },
  { keyword: 'ivory',                hex: '#fffff0', category: 'grayscale' },
  { keyword: 'khaki',                hex: '#f0e68c', category: 'beige' },
  { keyword: 'lavender',             hex: '#e6e6fa', category: 'blue' },
  { keyword: 'lavenderblush',        hex: '#fff0f5', category: 'grayscale' },
  { keyword: 'lawngreen',            hex: '#7cfc00', category: 'green' },
  { keyword: 'lemonchiffon',         hex: '#fffacd', category: 'beige' },
  { keyword: 'lightblue',            hex: '#add8e6', category: 'blue' },
  { keyword: 'lightcoral',           hex: '#f08080', category: 'pink' },
  { keyword: 'lightcyan',            hex: '#e0ffff', category: 'blue' },
  { keyword: 'lightgoldenrodyellow', hex: '#fafad2', category: 'yellow' },
  { keyword: 'lightgray',            hex: '#d3d3d3', category: 'grayscale' },
  { keyword: 'lightgreen',           hex: '#90ee90', category: 'green' },
  { keyword: 'lightgrey',            hex: '#d3d3d3', category: 'grayscale' },
  { keyword: 'lightpink',            hex: '#ffb6c1', category: 'pink' },
  { keyword: 'lightsalmon',          hex: '#ffa07a', category: 'orange' },
  { keyword: 'lightseagreen',        hex: '#20b2aa', category: 'blue' },
  { keyword: 'lightskyblue',         hex: '#87cefa', category: 'blue' },
  { keyword: 'lightslategray',       hex: '#778899', category: 'grayscale' },
  { keyword: 'lightslategrey',       hex: '#778899', category: 'grayscale' },
  { keyword: 'lightsteelblue',       hex: '#b0c4de', category: 'blue' },
  { keyword: 'lightyellow',          hex: '#ffffe0', category: 'yellow' },
  { keyword: 'limegreen',            hex: '#32cd32', category: 'green' },
  { keyword: 'linen',                hex: '#faf0e6', category: 'beige' },
  { keyword: 'mediumaquamarine',     hex: '#66cdaa', category: 'green' },
  { keyword: 'mediumblue',           hex: '#0000cd', category: 'blue' },
  { keyword: 'mediumorchid',         hex: '#ba55d3', category: 'pink' },
  { keyword: 'mediumpurple',         hex: '#9370db', category: 'purple' },
  { keyword: 'mediumseagreen',       hex: '#3cb371', category: 'green' },
  { keyword: 'mediumslateblue',      hex: '#7b68ee', category: 'purple' },
  { keyword: 'mediumspringgreen',    hex: '#00fa9a', category: 'green' },
  { keyword: 'mediumturquoise',      hex: '#48d1cc', category: 'blue' },
  { keyword: 'mediumvioletred',      hex: '#c71585', category: 'pink' },
  { keyword: 'midnightblue',         hex: '#191970', category: 'blue' },
  { keyword: 'mintcream',            hex: '#f5fffa', category: 'grayscale' },
  { keyword: 'mistyrose',            hex: '#ffe4e1', category: 'pink' },
  { keyword: 'moccasin',             hex: '#ffe4b5', category: 'beige' },
  { keyword: 'navajowhite',          hex: '#ffdead', category: 'beige' },
  { keyword: 'oldlace',              hex: '#fdf5e6', category: 'beige' },
  { keyword: 'olivedrab',            hex: '#6b8e23', category: 'green' },
  { keyword: 'orangered',            hex: '#ff4500', category: 'orange' },
  { keyword: 'orchid',               hex: '#da70d6', category: 'pink' },
  { keyword: 'palegoldenrod',        hex: '#eee8aa', category: 'yellow' },
  { keyword: 'palegreen',            hex: '#98fb98', category: 'green' },
  { keyword: 'paleturquoise',        hex: '#afeeee', category: 'blue' },
  { keyword: 'palevioletred',        hex: '#db7093', category: 'pink' },
  { keyword: 'papayawhip',           hex: '#ffefd5', category: 'beige' },
  { keyword: 'peachpuff',            hex: '#ffdab9', category: 'orange' },
  { keyword: 'peru',                 hex: '#cd853f', category: 'brown' },
  { keyword: 'pink',                 hex: '#ffc0cb', category: 'pink' },
  { keyword: 'plum',                 hex: '#dda0dd', category: 'purple' },
  { keyword: 'powderblue',           hex: '#b0e0e6', category: 'blue' },
  { keyword: 'rosybrown',            hex: '#bc8f8f', category: 'pink' },
  { keyword: 'royalblue',            hex: '#4169e1', category: 'blue' },
  { keyword: 'saddlebrown',          hex: '#8b4513', category: 'brown' },
  { keyword: 'salmon',               hex: '#fa8072', category: 'pink' },
  { keyword: 'sandybrown',           hex: '#f4a460', category: 'orange' },
  { keyword: 'seagreen',             hex: '#2e8b57', category: 'green' },
  { keyword: 'seashell',             hex: '#fff5ee', category: 'grayscale' },
  { keyword: 'sienna',               hex: '#a0522d', category: 'brown' },
  { keyword: 'skyblue',              hex: '#87ceeb', category: 'blue' },
  { keyword: 'slateblue',            hex: '#6a5acd', category: 'blue' },
  { keyword: 'slategray',            hex: '#708090', category: 'grayscale' },
  { keyword: 'slategrey',            hex: '#708090', category: 'grayscale' },
  { keyword: 'snow',                 hex: '#fffafa', category: 'grayscale' },
  { keyword: 'springgreen',          hex: '#00ff7f', category: 'green' },
  { keyword: 'steelblue',            hex: '#4682b4', category: 'blue' },
  { keyword: 'tan',                  hex: '#d2b48c', category: 'beige' },
  { keyword: 'thistle',              hex: '#d8bfd8', category: 'pink' },
  { keyword: 'tomato',               hex: '#ff6347', category: 'orange' },
  { keyword: 'turquoise',            hex: '#40e0d0', category: 'blue' },
  { keyword: 'violet',               hex: '#ee82ee', category: 'pink' },
  { keyword: 'wheat',                hex: '#f5deb3', category: 'beige' },
  { keyword: 'whitesmoke',           hex: '#f5f5f5', category: 'grayscale' },
  { keyword: 'yellowgreen',          hex: '#9acd32', category: 'green' },
  { keyword: 'rebeccapurple',        hex: '#663399', category: 'purple' }
];

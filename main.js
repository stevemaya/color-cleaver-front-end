const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')
const isValidPrimary = require('./is-valid-primary.js')
const isValidSecondary = require('./is-valid-secondary.js')


// Your code here!

const color1 = process.argv[2]
const color2 = process.argv[3]

if (color1 === undefined && color2 === undefined) {
    console.log('We need at least one color');
} else if (color2 === undefined) {
    console.log('that color deconstructed makes ' + colorDeconstructor(color1));
} else {
    console.log('those colors combined make ' + colorCombinator(color1, color2));
}
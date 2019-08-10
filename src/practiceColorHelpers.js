import chroma from 'chroma-js';


const levels = [50,100,200,300,400,500,600,700,800,900]

// Our first function is to generate a new palette

let generateNewPallete = (oldPalette) => {

    let {paletteName, id, emoji} = oldPalette;


    // objectDestructing
    // it means paletteName : paletteName ..and so on
    let newPalette = {
    paletteName,
    id,
    emoji,
    colors: {}
    };

    // we want colors to an object of levels that go from 50,100....900 levels
    // eg: colors : { 50 : [array of 20 colors shades of each of the 20 colors from originalPalette
    // ranging from 50-lightest to 900-darkest

    // let us set the colors object with the values from our levels array each of these will be an array
    for (let level of levels) {
        newPalette.colors[level] = []
    }

    // now lets iterate over each of the oldPalette's color array and then generate their shades
    // and finally push these shades into our keys array of the newPalette.colors objects
    for (let color of oldPalette.colors) {

        // we will need the 10 different shades of the color
        let scale = getScale(color.color, 10).reverse();

        // generating all the shades for a particular level in an ARRAY data-structure and then assigning it
        // to a particular level
        for (let i in scale){
            newPalette.colors[levels[i]].push(
                {
                    name: `${color.name}-${levels[i]}`,
                    id : `${color.name.toLowerCase().replace(/ /g, "-")}`,
                    hex : scale[i],
                    rgb : chroma(scale[i]).css(),
                    rgba:chroma(scale[i])
                        .css()
                        .replace(")", ",1.0)")
                        .replace("rgb", "rgba")
                }
            )
        }

    }

    return newPalette
};


// getScale uses getRange
let getScale = (hexColor, numberOfColors) => chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);

// getRange outputs an array with 3 values, start, middle, end
let getRange = (hexColor) => [chroma(hexColor).darken(1.7), hexColor, "fff"];

export {generateNewPallete}

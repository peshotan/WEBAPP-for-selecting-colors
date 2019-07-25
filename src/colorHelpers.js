// {
//     paletteName: "Material UI Colors",
//         id: "material-ui-colors",
//     emoji: "🎨",
//     colors: [
//     { name: "red", color: "#F44336" },
//     { name: "pink", color: "#E91E63" },
//     { name: "purple", color: "#9C27B0" },
//     { name: "deeppurple", color: "#673AB7" },
//     { name: "indigo", color: "#3F51B5" },
//     { name: "blue", color: "#2196F3" },
//     { name: "lightblue", color: "#03A9F4" },
//     { name: "cyan", color: "#00BCD4" },
//     { name: "teal", color: "#009688" },
//     { name: "green", color: "#4CAF50" },
//     { name: "lightgreen", color: "#8BC34A" },
//     { name: "lime", color: "#CDDC39" },
//     { name: "yellow", color: "#FFEB3B" },
//     { name: "amber", color: "#FFC107" },
//     { name: "orange", color: "#FF9800" },
//     { name: "deeporange", color: "#FF5722" },
//     { name: "brown", color: "#795548" },
//     { name: "grey", color: "#9E9E9E" },
//     { name: "bluegrey", color: "#607D8B" }
// ]
// }




import Chroma from 'chroma-js';
const levels = [50,100,200,300,400,500,600,700,800,900]


function generatePallete (starterPallete) {


    let newPallete = {
        name : starterPallete.paletteName,
        id   : starterPallete.id,
        emoji: starterPallete.emoji,
        colors : {}
    }

    for (let level of levels) {
        newPallete.colors[level] = []
    }

    for (let color of starterPallete.colors) {
        let scale = getScale(color.color,10).reverse() ;
        for (let i in scale) {
            newPallete.colors[levels[i]].push(
                {
                    name: `${color.name} ${levels[i]}`,
                    id : color.name.toLowerCase().replace(/ /g, "-"),
                    hex : scale[i],
                    rgb : Chroma(scale[i]).css(),
                    rgba :  Chroma(scale[i]).css().replace(")", ",1.0)")
                }
            )
        }
    }

    return newPallete
};


function getRange(hexColor){
    const end ="fff";
    return ([Chroma(hexColor).darken(1.4).hex(), hexColor, end])
}


function getScale(hexColor, numberOfColors){
    // here the chrome.scale takes the range and then the number of steps
    return Chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors)
}

export {generatePallete}
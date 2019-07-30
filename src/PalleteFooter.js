import React from 'react';

let PalleteFooter = (props) => {
    return(
        <footer className={"pallete__footer"}>
            {props.paletteName}
            <span className={"pallete__footer__emoji"}>{props.emoji}</span>
        </footer>
    )
}


export default PalleteFooter
import Sizes from './Sizes';
import bgSVG from './bg.svg';

export default {
    "@global" : {
        ".fade-exit" : {
            opacity : 1
        },
        ".fade-exit-active" : {
            opacity : 0,
            transition : "opacity 0.5s ease-out"
        }
    },

    root : {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundImage: `url(${bgSVG})`,
        /* background by SVGBackgrounds.com */
        backgroundColor: "#041f33",
        overflow : "scroll",
    },

    heading: {
        fontSize: "2rem"
    },

    container : {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",

        [Sizes.down("lg")] : {
            width : "80%"
        },
        [Sizes.down("xs")] : {
            width : "60%"
        }
    },

    nav : {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        margin : "2 rem",

        "& a" : {
            color:"white"
        },
    },

    palletes: {
        boxSizing: "border-box",
        width : "100%",
        display : "grid",
        gridTemplateColumns : "repeat(3,30%)",
        gridGap : "2.5rem",

        [Sizes.down("md")] : {
            gridTemplateColumns : "repeat(2,45%)"
        },

        [Sizes.down("xs")] : {
            gridTemplateColumns : "repeat(1,100%)",
            gridGap : "1.5rem",
        }

    }
}
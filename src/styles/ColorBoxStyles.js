import chroma from "chroma-js";

export default {

    isDarkBackground: {
        color: (props) => chroma(props.color).luminance() < 0.4 ? "white" : "#4f4f4f"
    },

    isLightBackground: {
        color: (props) => chroma(props.color).luminance() < 0.4 ? "white" : "#4f4f4f"
    },

    seeMore: {
        position: "absolute",
        right: "0",
        bottom: "0",
        background: "rgba(255,255,255,0.3)",
        color: (props) => chroma(props.color).luminance() < 0.4 ? "white" : "#4f4f4f",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        height: "30px",
        width: "100px",
        display: "inline-block",
        top: "50%",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: (props) => chroma(props.color).luminance() < 0.4 ? "white" : "#4f4f4f",
        textTransform: "uppercase",
        border: "none",
        opacity: "0",
        transition: "0.3s ease"
    },

    colorbox: {
        width: "20%",
        height: props => props.showFullPallete ? "25%" : "50%",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        margin: "0 auto",
        marginBottom: "-3.5px",

        "&:hover button": {
            opacity: 1
        }
    },

    boxContent: {
        width: "100%",
        position: "absolute",
        left: "0",
        bottom: "0",
        padding: "10px",
        textAlign: "left",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },

    copyOverlay: {
        height: "100%",
        width: "100%",
        opacity: "0",
        zIndex: "-3",
        transition: "transform 0.5s ease-in",
        position: "absolute"
    },

    expanded: {
        opacity: "1 ",
        transform: "scale(50)",
        zIndex: "10"
    },

    copyMsg: {
        position: "fixed",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        color: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "0",
        opacity: "0",
        transform: "scale(0.1)",
        transition: "all 0.4s",


        "& h1" : {
            textTransform: "uppercase",
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.3)",
            color: "white",
            textAlign: "center",
            fontSize: "4rem",
            fontWeight: "400",
            textShadow: "2px 3px 3px #000",
            marginBottom: "0",
            padding: "1rem"
        },

        "& p" : {
            fontWeight: "100",
            fontSize: "2rem"
        }
    },

    show : {
        opacity: "1",
        zIndex: "11",
        transform: "scale(1)",
        transitionDelay: "0.3s"
    }
}
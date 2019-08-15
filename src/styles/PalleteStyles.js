import Sizes from './Sizes';

export default {
    pallete : {
        height: "100vh",
        display:"flex",
        flexDirection: "column"
    },

    palleteColors : {
        height: "90%"
    },
    goBackButton: {
        height: "30px",
        width: "100px",
        display: "inline-block",
        top: "50%",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        outline: "none",
        backgroundColor: "rgba(255,255,255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: "white",
        textTransform: "uppercase",
        border: "none",
        opacity: "1",
        transition: "0.3s ease",
        textDecoration : "none"
    },
    goBackColorbox : {
        height: "50%",
        backgroundColor: "black",
        width: "20%",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        margin: "0 auto",
        marginBottom: "-3.5px",

        [Sizes.down("lg")] : {
            width : "25%",
            height : "33.333%"
        },
        [Sizes.down("md")] : {
            width : "50%",
            height : "20%"
        },
        [Sizes.down("xs")] : {
            width : "100%",
            height: "10%"
        }
    }
}
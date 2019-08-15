import Sizes from './Sizes';

const styles = {
    root : {
        width: "20%",
        height:"25%",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        margin: "0 auto",
        marginBottom: "-3.5px",
        "&:hover svg" : {
            color: "#fff",
            transform: "Scale(1.5)"
        },

        "& svg" : {
            transition: "all 1s ease"
        },

        [Sizes.down('lg')] : {
            width : "25%",
            height : "20%"
        },
        [Sizes.down('md')] : {
            width : "50%",
            height : "10%"
        },
        [Sizes.down('sm')] : {
            width : "100%",
            height : "5%"
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
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        lineHeight: "12px",

        "& span": {
            verticalAlign: "middle"
        }

    }


}

export default styles
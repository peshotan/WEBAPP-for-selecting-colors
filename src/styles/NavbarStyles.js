import Sizes from './Sizes';

export default {
    navbarSlider : {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
    },

    rcSliderTrack : {
        backgroundColor: "transparent"
    },

   rcSliderRail  : {
        height: "8px"
    },

 rcSliderHandle : {
    backgroundColor: "green",
    outline: "none",
    border: "2px solid green",
    boxShadow: "none",
    height: "13px",
    width: "13px",
    marginTop: "-3px",

    "&:active " : {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none",
        height: "13px",
        width: "13px",
        marginTop: "-3px "
    },
    "&:focus" : {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            height: "13px",
            width: "13px",
            marginTop: "-3px "
     },
    "&:hover " : {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            height: "13px",
            width: "13px",
            marginTop: "-3px "
        },

     [Sizes.down('sm')] : {
        width : "150px"
     }
    },

    navbar : {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "5vh"
    },

    navbarLogo : {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a" : {

            textDecoration: "none",
            color: "#000",
            fontFamily: "Roboto"
        },
        [Sizes.down("xs")] : {
            display : "none"
        }
    },

    navbarSelectContainer : {
        marginLeft : "auto",
        marginRight: "1rem"
    }


}
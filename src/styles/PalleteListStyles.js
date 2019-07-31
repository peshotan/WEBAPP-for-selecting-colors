export default {
    root : {
        backgroundColor : "#35348f",
        display: "flex",
        height: "100vh",
        alightItems : "flex-start",
        justifyContent: "center"
    },

    container : {
        width: "50%",
        display: "flex",
        alignItems : "flex-start",
        flexDirection : "column",
        flexWrap : "wrap",
    },

    nav : {
        display: "flex",
        width : "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        margin : "2 rem",

        "& a" : {
            color:"white"
        }
    },

    palletes: {
        boxSizing: "border-box",
        width : "100%",
        display : "grid",
        gridTemplateColumns : "repeat(3,30%)",
        gridGap : "5%"
    }
}
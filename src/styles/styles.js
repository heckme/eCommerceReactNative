import { StyleSheet , Dimensions} from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    appTitle: {
        fontSize: 24,
        color: "#000000",
        fontWeight: "500"
    },
    menuIconContainer: {
      justifyContent: "space-around",
      padding: 16
    },
    dashboardContainer: {
        flex: 1,
        backgroundColor: "#fefefe",
    },
    toolbarContainer: {
       height: 56,
       backgroundColor: "#fefefe",
       width: "100%",
       flexDirection: "row",
       alignItems: "center",
       elevation: 4
    },
    toolbarUtils: {
       justifyContent: "space-between",
       flexDirection: "row",
       flex: 1,
       alignItems: "center",
       paddingRight: 16
    },
    searchbarContainer: {
        backgroundColor: "#999999",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        elevation: 2
    },
    searchbarTextInput: {
        width: "100%",
        backgroundColor: "#ffffff",
        borderRadius: 3,
        padding: 12,
        fontSize: 18
    },
    cardContainer: {
      marginTop: 8,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 8
    },
    cardTextTitle: {
        marginTop: 8,
        marginBottom: 4,
        fontSize: 14,
        color: "#000",
        textAlign: "center"
    },
    cardTextSubtitle: {
      marginBottom: 8,
      fontSize: 14,
      color: "#000",
      textAlign: "center",
      fontWeight: "500"
    },
    productContainer: {
        flex: 1
    },

    wrapper: {
      height: 300
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },

    productDetailContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#999",
        backgroundColor:"#ffffff",
        padding: 18
    },
    productTitle: {
        fontSize: 18,
        fontWeight: "700",
        paddingBottom: 8,
        color: "#000000"
    },
    productSize: {
      fontSize: 16,
      paddingBottom: 16,
    },
    productPrice: {
      fontSize: 18,
      fontWeight: "500",
      color: "#000000"
    },
    sizeContainer: {
        flex: 1,
        flexDirection: "row"
    },
    circularCont: {
        width: 40,
        height: 40,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopColor: "#999999",
        borderRightColor: "#999999",
        borderBottomColor: "#999999",
        borderLeftColor: "#999999",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16
    },
    activeSize: {
        borderTopColor: "red",
        borderRightColor: "red",
        borderBottomColor: "red",
        borderLeftColor: "red",
    },
    productDetailsTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000000",
        paddingBottom: 8
    },
    productDetialsDesc: {
      fontSize: 14
    },
    flexButtonContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        paddingVertical: 14
    },
    flexButtonText: {
        fontSize: 18,
        color: "#ffffff",
        marginHorizontal: 8
    },
    stickyFooterContainer: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        bottom: 0,
        left: 0,
        right: 0,
        position:"absolute",
        alignItems: 'stretch',
        flex: 1,
        elevation:4,
        height: 56
    },
    bottomGapInScrollView: {
        marginBottom: 55
    }

});

export default styles;

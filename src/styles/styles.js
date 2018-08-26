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
    cartContainer: {
        flex: 1,
        backgroundColor: "#fefefe",
    },
    addressContainer: {
        flex: 1,
        backgroundColor: "#fefefe",
    },
    productContainer: {
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
    justifyCenter: {
        justifyContent: "center",
    },
    alignCenter: {
        alignItems: "center",
    },
    cardContainer: {
        marginTop: 8,
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 0
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
        borderTopColor: "#11cda7",
        borderRightColor: "#11cda7",
        borderBottomColor: "#11cda7",
        borderLeftColor: "#11cda7",
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
    },
    cartItemContainer: {
        marginBottom: 16,
        marginRight: 16,
        marginLeft:16,
        elevation: 3,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopColor: "#dddddd",
        borderRightColor: "#dddddd",
        borderBottomColor: "#dddddd",
        borderLeftColor: "#dddddd",
        backgroundColor: "#ffffff",
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,

    },
    priceDetailContainer: {
        marginBottom: 16,
        marginRight: 16,
        marginLeft:16,
        elevation: 3,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopColor: "#dddddd",
        borderRightColor: "#dddddd",
        borderBottomColor: "#dddddd",
        borderLeftColor: "#dddddd",
        backgroundColor: "#ffffff"
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "auto"
    },
    column4: {
        flex: 4
    },
    column8: {
        flex: 8
    },
    cartImageStyle: {
        width: "100%",
        height: 70
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: "#dddddd"
    },
    removeCartItemCont: {
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#dddddd",
    },
    removeCartItemText: {
        fontSize: 16,
        fontWeight: "500",
        padding: 16
    },
    itemTitle: {
        fontSize: 16,
        lineHeight: 22,
        color: "#333333"
    },
    itemSoldBy: {
        paddingVertical: 3
    },
    itemInStock: {
        color: "red"
    },
    itemPrice: {
        paddingTop: 3,
        paddingBottom: 16,
        fontSize: 16
    },
    itemHeadingContainer: {
        flexDirection: "row",
        flex: 1,
        padding: 16,
        justifyContent: "space-between"
    },
    boldText: {
        fontSize: 16,
        fontWeight: "500"
    },
    noPaddingTop: {
      paddingTop: 0
    },
    marginBottom16: {
        marginBottom: 16
    },
    inputComponentStyles: {
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        marginBottom: 8,
        fontSize: 16
    },
    padding16: {
        padding: 16,
        paddingTop: 8
    }

});

export default styles;

import { StyleSheet , Dimensions} from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    appTitle: {
        fontSize: 22,
        color: "#000000"
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
        backgroundColor: "#ffffff",
    },
    confirmContainer: {
        flex: 1,
        backgroundColor: "#fefefe",
    },
    sidebarContainer: {
        flex: 1,
        backgroundColor: "#fefefe",
    },
    toolbarContainer: {
        height: 56,
        backgroundColor: "#fefefe",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        elevation: 6
    },
    toolbarUtils: {
        justifyContent: "space-between",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingRight: 16
    },
    utilsIconCont: {
        width: 85
    },
    justifyCenter: {
        justifyContent: "center",
    },
    alignCenter: {
        alignItems: "center",
    },
    justifySpaceBetween: {
        justifyContent: "space-between"
    },
    cardContainer: {
        marginTop: 8,
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 0
    },
    cardTextTitle: {
        marginBottom: 4,
        fontSize: 16,
        color: "#000",
    },
    cardTextSubtitle: {
        marginBottom: 4,
        fontSize: 16,
        color: "#000",
        fontWeight: "500"
    },
    cardTextDesc: {
        marginBottom: 8,
        fontSize: 14,
    },
    swiperWrapper: {
        height: 440
    },
    swiperSlide: {
        flex: 1,
        alignItems: 'center'
    },
    productDetailContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#dddddd",
        backgroundColor:"#ffffff",
        padding: 16
    },
    productTitle: {
        fontSize: 16,
        paddingBottom: 4,
        color: "#000000"
    },
    productSize: {
        fontSize: 16,
        paddingBottom: 16,
        color: "#000000"
    },
    productPrice: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000000",
        paddingBottom: 4
    },
    sizeContainer: {
        flex: 1,
        flexDirection: "row"
    },
    circularCont: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: "#999999",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 16
    },
    activeSize: {
        borderColor: "#11cda7",
    },
    activeSizeText: {
        color: "#11cda7"
    },
    productDetailsTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000000",
        paddingBottom: 8
    },
    productDetialsDesc: {
        fontSize: 14,
        lineHeight: 18
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
    dateText: {
        fontSize: 14,
        lineHeight: 22,
        color: "#000000",
        fontWeight: "500",
        textAlign: "right"
    },
    deliveryText: {
        fontSize: 14,
        lineHeight: 22
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
        fontSize: 16,
        color: "#000000"
    },
    itemHeadingContainer: {
        flexDirection: "row",
        flex: 1,
        padding: 16,
        paddingBottom: 8,
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
    },
    addressText: {
        fontSize: 14,
        lineHeight: 22,
        width: "60%",
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    summeryItemsText: {
        padding: 16
    },
    flexRow: {
        flex: 1,
        flexDirection: "row"
    },
    userInfoContainer: {
        height: 170,
        backgroundColor: "#333333",
        paddingHorizontal: 32 ,
        justifyContent: "center"
    },
    userNameText: {
        fontSize: 18,
        color: "#fff",
        paddingTop: 16
    },
    paddingTop8: {
        paddingTop: 24
    },
    listzItemContainer: {
        paddingVertical: 12,
        paddingHorizontal: 24
    },
    menuListText: {
        fontSize: 16,
        fontWeight: "500",
        paddingHorizontal: 8 ,
    },
    subCategoryContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top:0,
        backgroundColor: "#FFFFFF",
    },
    subCatHeader: {
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#dddddd"
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000"
    },
    subCatListItem: {
        fontSize: 16,
        paddingVertical: 16,
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        paddingHorizontal: 32
    },
    stickyToolbar: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        zIndex: 1,
        elevation: 0
    }
});

export default styles;

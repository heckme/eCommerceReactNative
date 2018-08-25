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
    }

});

export default styles;

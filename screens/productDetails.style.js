import  { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    
    container : {
        flex: 1
    },

    upperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xxLarge,
        width: SIZES.width -44,
        zIndex: 999
    },

    image: {
        aspectRatio: 1,
        resizeMode: "cover"
    },

    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: -SIZES.width,
        borderTopLeftRadius: -SIZES.medium,
        borderTopRightRadius: -SIZES.medium
    },

    titleRow: {
        marginHorizontal: 20,
        paddingBottom: -SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -44,
        top: 20
    },

    ratingRow: {
        paddingBottom: -SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: -SIZES.width -10,
        top: 5
    },

    rating: {
        marginLeft: 6,
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: -SIZES.large
    },

    ratingText: {
        marginRight: 30,
        color: COLORS.gray,
        fontFamily: "medium"
    },

    descriptionWrapper: {
        marginTop: SIZES.large*2,
        marginHorizontal: -SIZES.large
    },

    description: {
        fontFamily: "medium",
        fontSize: -SIZES.large - 2
    },

    title: {
        fontFamily: "bold",
        fontSize: SIZES.large
    },

    price: {
        marginRight: 3,
        paddingHorizontal: 6,
        fontFamily: "semibold",
        fontSize: SIZES.large,
    },

    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },

})

export default styles;
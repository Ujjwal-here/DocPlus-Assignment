import {StyleSheet, Text, View} from "react-native";
import {Cabin_400Regular, Cabin_700Bold, useFonts} from '@expo-google-fonts/cabin';
import {useSelector} from "react-redux";
import {moderateScale, verticalScale} from "../../Metrics";

export const Header = () => {
    const todoList = useSelector((state) => state.todo.todoList)
    let [fontsLoaded] = useFonts({
        Cabin_400Regular, Cabin_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.heading}>Good Day, Dear</Text>
            <Text style={styles.subheading}>Making To-Do Management More Human</Text>
            <Text style={styles.subheadingTwo}>{todoList.length} To-Do Pending</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        marginTop: verticalScale(40),
    },
    heading: {
        color: "white",
        fontSize: moderateScale(25),
        fontFamily: "Cabin_700Bold",
        textAlign: "center",
    },
    subheading:{
        color: "#7fffd4",
        fontSize: moderateScale(16),
        fontFamily: "Cabin_400Regular",
        textAlign: "center",
    },
    subheadingTwo: {
        marginTop: verticalScale(25),
        fontSize: moderateScale(14),
        color: "#FF7461",
        textAlign: "center",
        fontFamily: "Cabin_400Regular",
    }
})

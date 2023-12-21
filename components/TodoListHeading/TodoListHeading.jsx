import {StyleSheet, Text, View} from "react-native";
import {Cabin_700Bold, useFonts} from '@expo-google-fonts/cabin';
import {moderateScale, verticalScale} from "../../Metrics";

export const TodoListHeading = () => {
    let [fontsLoaded] = useFonts({
        Cabin_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.todoText}>To-Do</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(50),
    },
    todoText: {
        color: "#B6BABF",
        fontSize: moderateScale(22),
        fontFamily: "Cabin_700Bold"
    }
})

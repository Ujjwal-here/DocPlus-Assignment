import {Pressable, StyleSheet, Text, View} from "react-native";
import {Cabin_400Regular, Cabin_700Bold, useFonts} from '@expo-google-fonts/cabin';
import {useDispatch} from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import {openModal} from "../../redux/modalSlider"
import {horizontalScale, moderateScale, verticalScale} from "../../Metrics";

export const FloatingActionButton = () => {
    const dispatch= useDispatch()
    let [fontsLoaded] = useFonts({
        Cabin_400Regular, Cabin_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Pressable style={styles.todoButton} onPress={() => {
            dispatch(openModal())
        }}>
            <View style={styles.addTodoButtonContainer}>
                <Ionicons style={styles.addIcon} name="add" color="black" />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    todoButton:{
        zIndex: 1,
        position: "absolute",
        bottom: verticalScale(20),
        right: horizontalScale(20),
    },
    addTodoButtonContainer: {
        paddingVertical: verticalScale(20),
        paddingHorizontal: horizontalScale(20),
        backgroundColor: "#FF7461",
        borderRadius: moderateScale(40),
    },
    addIcon:{
        fontSize: moderateScale(25),
    }

})

import {Pressable, StyleSheet, Text, View} from "react-native";
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import {Cabin_400Regular, Cabin_700Bold, useFonts} from '@expo-google-fonts/cabin';
import {useDispatch} from "react-redux";
import {deleteToDo, editTodo} from "../../redux/todoSlider";
import {openModal} from "../../redux/modalSlider";
import {horizontalScale, moderateScale, verticalScale} from "../../Metrics";

export const TodoCard = ({id, name, description}) => {
    const dispatch = useDispatch()
    let [fontsLoaded] = useFonts({
        Cabin_400Regular, Cabin_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    function onDeleteHandler(id) {
        dispatch(deleteToDo(id))
    }

    function editTodoHandler(id) {
        dispatch(openModal())
        dispatch(editTodo(id))
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={[styles.title, styles.fontFamilyBold700]}>{name}</Text>
            <Text style={[styles.description, styles.fontFamilyRegular400]}>{description}</Text>
            <View
                style={[styles.flexRowContainer, styles.flexContentSpaceBetween, styles.flexAlignItemsCentre, styles.buttonContainer]}>
                <Pressable onPress={() => {
                    editTodoHandler(id)
                }}>
                    <View
                        style={[styles.flexRowContainer, styles.flexContentSpaceBetween, styles.flexAlignItemsCentre, styles.gap_5, styles.updateDeleteContainer,styles.updateBorderColor]}>
                        <AntDesign name="edit" style={styles.updateText}/>
                        <Text style={[styles.updateText, styles.fontFamilyRegular400]}>Edit</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => onDeleteHandler(id)}>
                    <View
                        style={[styles.flexRowContainer, styles.flexContentSpaceBetween, styles.flexAlignItemsCentre, styles.gap_5, styles.updateDeleteContainer,styles.deleteBorderColor]}>
                        <MaterialCommunityIcons name="delete-circle" style={styles.deleteText}/>
                        <Text style={[styles.deleteText, styles.fontFamilyRegular400]}>Delete</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    flexRowContainer: {
        flexDirection: "row",
    },
    flexContentSpaceBetween: {
        justifyContent: "space-between",
    },
    flexAlignItemsCentre: {
        alignItems: "center",
    },
    gap_5: {
        gap: moderateScale(5),
    },
    fontFamilyRegular400: {
        fontFamily: "Cabin_400Regular"
    },
    fontFamilyBold700: {
        fontFamily: "Cabin_700Bold"
    },
    mainContainer: {
        marginVertical: verticalScale(10),
        paddingVertical: verticalScale(20),
        paddingHorizontal: horizontalScale(20),
        backgroundColor: "#3d4552",
        borderRadius: moderateScale(8),
    },
    title: {
        color: "white",
        fontSize: moderateScale(20),
    },
    description: {
        marginTop: verticalScale(5),
        color: "#B6BABF",
        fontSize: moderateScale(15),
    },
    buttonContainer: {
        marginTop: verticalScale(20),
    },

    updateDeleteContainer: {
        paddingVertical: verticalScale(8),
        paddingHorizontal: horizontalScale(8),
        borderWidth: moderateScale(0.5),
        borderRadius: moderateScale(10),
    },
    updateBorderColor:{
        borderColor: "#7fffd4",
    },
    deleteBorderColor:{
        borderColor: "#f22952",
    },
    updateText: {
        color: "#7fffd4",
        fontSize: moderateScale(12),
    },
    deleteText: {
        color: "#f22952",
        fontSize: moderateScale(12),
    },
})

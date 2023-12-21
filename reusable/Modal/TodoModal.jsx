import {Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {Cabin_400Regular, Cabin_700Bold, useFonts} from '@expo-google-fonts/cabin';
import {AntDesign} from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../redux/modalSlider"
import {addTodo, updateTodo} from "../../redux/todoSlider";
import {horizontalScale, moderateScale, verticalScale} from "../../Metrics";


export const TodoModal = () => {
    const [err, setErr] = useState({})
    const isEditing = useSelector((state) => state.todo.isEditing)
    const dispatch = useDispatch()
    const modalVisible = useSelector((state) => state.modalState.isOpen)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    let [fontsLoaded] = useFonts({
        Cabin_400Regular, Cabin_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    function closeHandler() {
        dispatch(closeModal())
        setErr({})
    }

    function createUpdateTodoHandler() {
        const newErr = {
            nameErr: "",
            desErr: ""
        }
        if (name === "") {
            newErr.nameErr = "Name can't be empty"
        }
        if (description === "") {
            newErr.desErr = "Description can't be empty"
        }
        setErr(newErr)
        if (name !== "" && description !== "") {
            if (isEditing === false) {
                dispatch(addTodo({name, description}))

            } else {
                dispatch(updateTodo({name, description}))
            }
            closeHandler()
            setName("")
            setDescription("")
        }
    }


    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            presentationStyle="pageSheet"
            onRequestClose={() => {
                dispatch(closeModal())
            }}>
            <View style={styles.modalContainer}>
                <AntDesign onPress={closeHandler} style={styles.closeIcon} name="closecircle"
                           color="#7fffd4"/>
                <Text
                    style={[styles.mainHeading, styles.fontFamilyBold700]}>{isEditing ? "Update To-Do" : "Create To-Do"}</Text>
                <Text style={[styles.subHeading, styles.fontFamilyRegular400]}>Please Enter Name and Description for
                    To-Do</Text>
                <Text style={[styles.labelForInputs, styles.fontFamilyBold700]}>Name:</Text>
                <TextInput value={name} onChangeText={(text) => setName(text)}
                           style={[styles.textInput, styles.fontFamilyRegular400]}
                           placeholderTextColor="#B6BABF" placeholder="Enter name here..."/>
                {err?.nameErr && <Text style={[styles.errMessage, styles.fontFamilyRegular400]}>{err?.nameErr}</Text>}
                <Text style={[styles.labelForInputs, styles.fontFamilyBold700]}>Description:</Text>
                <TextInput value={description} onChangeText={(text) => setDescription(text)}
                           style={[styles.textInput, styles.fontFamilyRegular400]}
                           placeholderTextColor="#B6BABF" placeholder="Enter description here..."/>
                {err?.desErr && <Text style={[styles.errMessage, styles.fontFamilyRegular400]}>{err?.desErr}</Text>}
                <Pressable onPress={createUpdateTodoHandler}>
                    <View
                        style={[styles.flexRowContainer, styles.flexContentCenter, styles.flexAlignItemsCentre, styles.gap_5, styles.createUpdateContainer]}>
                        <Text
                            style={[styles.createUpdateText, styles.fontFamilyBold700]}>{isEditing ? "Update To-Do" : "Create To-Do"}</Text>
                    </View>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    flexRowContainer: {
        flexDirection: "row",
    },
    flexContentCenter: {
        justifyContent: "center",
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
    modalContainer: {
        flex: 1,
        backgroundColor: '#303642',
        justifyContent: "center",
        paddingVertical: verticalScale(40),
        paddingHorizontal: horizontalScale(40),
    },
    mainHeading: {
        marginTop: verticalScale(50),
        color: "white",
        fontSize: moderateScale(25),
    },
    subHeading: {
        color: "#B6BABF",
        fontSize: moderateScale(15),
    },
    labelForInputs: {
        marginTop: verticalScale(30),
        color: "#B6BABF",
        fontSize: moderateScale(18),
    },
    textInput: {
        width: "100%",
        marginTop: verticalScale(15),
        backgroundColor: "#3d4552",
        paddingVertical: verticalScale(12),
        paddingHorizontal: horizontalScale(12),
        borderRadius: moderateScale(10),
        color: "white",
    },
    createUpdateContainer: {
        marginTop: verticalScale(30),
        paddingVertical: verticalScale(15),
        paddingHorizontal: horizontalScale(15),
        borderWidth: moderateScale(0.5),
        borderRadius: moderateScale(10),
        backgroundColor: "#FF7461"
    },
    createUpdateText: {
        color: "white",
        fontSize: moderateScale(15),
    },
    closeIcon: {
        fontSize: moderateScale(24),
        textAlign: "right"
    },
    errMessage: {
        marginTop: verticalScale(5),
        color: "#f22952",
        fontSize: moderateScale(14),
    }
})

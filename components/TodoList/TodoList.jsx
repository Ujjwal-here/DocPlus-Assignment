import {FlatList, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {TodoCard} from "../../reusable/TodoCard/TodoCard";
import {Cabin_400Regular, Cabin_700Bold, useFonts} from "@expo-google-fonts/cabin";
import {moderateScale, verticalScale} from "../../Metrics";


export const TodoList = () => {
    const todoList = useSelector(state => state.todo.todoList)
    let [fontsLoaded] = useFonts({
        Cabin_400Regular, Cabin_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    function onEmptyListHandler() {
        return <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>No To-Dos Added</Text>
        </View>
    }

    return (

        <FlatList style={styles.flatListStyle} ListEmptyComponent={onEmptyListHandler} data={todoList}
                  renderItem={({item}) => {
                      return (
                          <TodoCard id={item.id} name={item.name} description={item.description}/>
                      )
                  }} keyExtractor={item => item.id}/>
    )
}

const styles = StyleSheet.create({
    flatListStyle: {
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(20),
        marginBottom: verticalScale(20),
    },
    emptyListContainer: {
        marginTop: verticalScale(50),
        alignItems: "center",
    },
    emptyListText: {
        color: "#B6BABF",
        fontSize: moderateScale(15),
        fontFamily: "Cabin_400Regular"
    }
})



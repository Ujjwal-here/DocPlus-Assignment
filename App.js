import {StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from "react-redux";
import {Header} from "./components/Header/Header";
import {TodoListHeading} from "./components/TodoListHeading/TodoListHeading";
import {FloatingActionButton} from "./components/FloatingActionButton/FloatingActionButton";
import store from "./store";
import {TodoModal} from "./reusable/Modal/TodoModal";
import {TodoList} from "./components/TodoList/TodoList";


export default function App() {
  return (
      <Provider store={store}>
          <View style={styles.container}>
              <StatusBar barStyle="dark-content"/>
              <Header/>
              <FloatingActionButton/>
              <TodoListHeading/>
              <TodoModal/>
              <TodoList/>
          </View>
      </Provider>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        backgroundColor: '#303642',
        flex: 1,
    },
});

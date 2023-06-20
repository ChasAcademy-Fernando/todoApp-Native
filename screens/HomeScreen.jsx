import { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation, route }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (route.params?.addTodo) {
      setTodos([
        ...todos,
        {
          title: route.params.todo.title,
          done: route.params.todo.done,
          id: route.params.todo.id,
          created: route.params.todo.created,
          detail: route.params.todo.detail,
        },
      ]);
    }
    if (route.params?.change) {
      setTodos(
        todos.map((item) =>
          item.id === route.params.doneId ? { ...item, done: !item.done } : item
        )
      );
    }

    if (route.params?.delete) {
      setTodos((current) =>
        current.filter((item) => route.params.id !== item.id)
      );
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <SafeAreaView>
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate("Detail", {
                  title: item.title,
                  id: item.id,
                  detail: item.detail,
                  done: item.done,
                  created: item.created,
                })
              }
            >
              <View style={styles.item}>
                <Text style={item.done ? styles.doneItem : styles.title}>
                  {item.title}
                </Text>
                <Text style={styles.title}>{">"}</Text>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DABFFF",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#B8A2FF",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  doneItem: {
    textDecorationLine: "line-through",
    fontSize: 32,
    color: "#2C2A4A",
    fontWeight: "500",
  },
  title: {
    fontWeight: "500",
    fontSize: 32,
    color: "#2C2A4A",
  },
  button: {
    color: "red",
  },
  header: {
    fontSize: 40,
    textAlign: "center",
    color: "#2C2A4A",
    padding: 20,
    fontWeight: "700",
  },
});
export default HomeScreen;

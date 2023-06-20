import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
const AddScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a new todo item</Text>
      <View style={{ paddingHorizontal: 20, paddingBottom: 30 }}>
        <TextInput
          value={title}
          onChangeText={(value) => {
            setTitle(value);
          }}
          placeholder='Title'
          style={styles.input}
        />
        <TextInput
          value={description}
          onChangeText={(value) => {
            setDescription(value);
          }}
          placeholder='Description'
          style={styles.description}
          multiline
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#B8A2FF",
            paddingHorizontal: 20,
            borderRadius: 4,
          }}
          onPress={() => {
            navigation.navigate({
              name: "Home",
              params: {
                addTodo: true,
                todo: {
                  done: false,
                  id: Math.random(),
                  title: title,
                  detail: description,
                  created: new Date().toLocaleDateString(),
                },
              },
            });
          }}
        >
          <View>
            <Text style={styles.subHeader}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DABFFF",
  },
  input: {
    borderWidth: 2,
    borderColor: "#CCC",
    padding: 15,
    borderRadius: 4,
    flexDirection: "row",
    marginVertical: 40,
    fontSize: 25,
    backgroundColor: "#F5F5F5",
  },
  description: {
    borderWidth: 2,
    borderColor: "#CCC",
    padding: 15,
    height: 125,
    borderRadius: 4,
    paddingTop: 15,
    fontSize: 25,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 40,
    textAlign: "center",
    color: "#2C2A4A",
    padding: 20,
    paddingBottom: 10,
    fontWeight: "700",
  },
  subHeader: {
    fontSize: 30,
    textAlign: "center",
    color: "#2C2A4A",
    padding: 10,
  },
});

export default AddScreen;

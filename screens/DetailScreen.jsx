import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const DetailScreen = ({ route, navigation }) => {
  const { id, detail, title, created } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={styles.header}>Details of the task</Text>
        <Text style={styles.subHeader}>{title}</Text>
        <Text style={styles.text}>{detail}</Text>
        <Text>Created on {created}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={{ backgroundColor: "#F5F5F5", flex: 1 }}
          onPress={() => {
            navigation.navigate({
              name: "Home",
              params: { doneId: id, change: true },
            });
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              borderRightWidth: 0.4,
              borderRightColor: "#C7C7C7",
            }}
          >
            <Text style={styles.text}>Done</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#F5F5F5",
            flex: 1,
            borderLeftWidth: 0.4,
            borderLeftColor: "#C7C7C7",
          }}
          onPress={() => {
            navigation.navigate({
              name: "Home",
              params: { id: id, delete: true },
            });
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={styles.text}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: "center",

    flex: 1,
    backgroundColor: "#DABFFF",
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
    paddingBottom: 10,
    fontWeight: "500",
  },
  title: {
    fontSize: 32,
    color: "#2C2A4A",
  },
  text: {
    color: "#2C2A4A",
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  footer: {
    flex: 0.1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default DetailScreen;

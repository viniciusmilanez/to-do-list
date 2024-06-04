import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  task: {
    padding: 10,
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#888",
  },

  itemText: {
    fontSize: 16,
    color: "#000",
  },
});

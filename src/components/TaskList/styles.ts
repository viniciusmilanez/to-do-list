import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  items: {
    marginTop: 5,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 7,
    width: 355,
  },
  check: {
    width: 24,
    height: 24,
  },
  trash: {
    width: 24,
    height: 24,
  },
});

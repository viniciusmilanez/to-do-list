import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import TaskList from "./src/components/TaskList";
import TaskInput from "./src/components/TaskInput";

interface TaskItem {
  text: string;
  completed: boolean;
}

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [taskItems, setTaskItems] = useState<TaskItem[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index] = { ...itemsCopy[index], completed: true };
    setTaskItems(itemsCopy);
  };

  const deleteTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const filteredTasks = taskItems.filter((item) =>
    item.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const addTask = (newTask: string) => {
    setTaskItems([...taskItems, { text: newTask, completed: false }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./src/assets/logo.png")} style={styles.logo} />
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tasksWrapper}>
          <View style={styles.searchContainer}>
            <Image
              source={require("./src/assets/lupa.png")}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder={"Buscar tarefa"}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />

            <Text style={styles.sectionTitle}>Tarefas do dia</Text>
            <TaskList
              tasks={filteredTasks}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          </View>
        </View>
      </ScrollView>

      <TaskInput addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    width: "100%",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  logo: {
    width: 57,
    height: 54,
  },
  tasksWrapper: {
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: "#fff",
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 40,
  },
  searchIcon: {
    marginTop: 18,
    marginLeft: 10,
    marginRight: -25,
    position: "absolute",
    zIndex: 1,
    width: 24,
    height: 24,
  },
});

export default App;

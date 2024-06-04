import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Task from "../Task";
import { styles } from "./styles";

interface TaskListProps {
  tasks: { text: string; completed: boolean }[];
  completeTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  completeTask,
  deleteTask,
}) => {
  return (
    <View style={styles.items}>
      {tasks.map((item, index) => (
        <View key={index} style={styles.taskContainer}>
          <TouchableOpacity onPress={() => completeTask(index)}>
            <Image
              source={
                item.completed
                  ? require("../../assets/check.png")
                  : require("../../assets/not-check.png")
              }
              style={styles.check}
            />
          </TouchableOpacity>

          <Task
            text={item.text}
            completed={item.completed}
            onToggle={() => completeTask(index)}
          />

          <TouchableOpacity onPress={() => deleteTask(index)}>
            <Image
              source={require("../../assets/trash.png")}
              style={styles.trash}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default TaskList;

import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface TaskProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
}

const Task: React.FC<TaskProps> = ({ text, completed, onToggle }) => {
  return (
    <View style={styles.item}>
      <View>
        <Text
          style={[
            styles.itemText,
            { textDecorationLine: completed ? "line-through" : "none" },
          ]}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default Task;

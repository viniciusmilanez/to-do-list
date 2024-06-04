import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  View,
  Image,
} from "react-native";
import { styles } from "./styles";
import Modal from "react-native-modal";

interface TaskInputProps {
  addTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [task, setTask] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      addTask(task);
      setTask(null);
      toggleModal();
    }
  };

  return (
    <View style={styles.writeTaskWrapper}>
      <View>
        <TouchableOpacity onPress={toggleModal} style={styles.addWrapper}>
          <View style={styles.buttonContent}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        backdropOpacity={0.5}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View style={styles.modalContent}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.titleModal}>Nova Tarefa</Text>
          <Text style={styles.paragraph}>Adicione aqui sua nova tarefa</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={"Adicionar uma tarefa"}
              value={task || ""}
              onChangeText={(text) => setTask(text)}
            />
            <TouchableOpacity onPress={handleAddTask}>
              <Image
                source={require("../../assets/arrow.png")}
                style={styles.arrowImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TaskInput;

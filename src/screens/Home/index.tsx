import { FlatList, Image, StatusBar, View, Text, Alert } from "react-native"
import { styles } from "./styles"
import { AddNewTodo } from "@components/AddNewTodo"
import React, { useState } from "react"
import { Counter } from "@components/Counter"
import { Todo } from "@components/Todo"

export interface TaskInterface {
  name: string,
  checked: boolean,
}

export function Home(){
  const [tasks, setTasks] = useState<TaskInterface[]>([])
  const [newTask, setNewTask] = useState('')
  let checkedTasks = tasks.filter(tasks => tasks.checked === true).length

  function handleTodoAdd(){
    const taskWithSameName = tasks.find((task) => task.name === newTask)
    if (taskWithSameName) {
      Alert.alert('Tarefa já existe', 'Já existe uma tarefa dessa criada')
      return
    }
    setTasks(prevState => [...prevState, {name: newTask, checked: false}])
    setNewTask('')
  }

  function handleTodoRemove(name: string){
    setTasks(prevState => prevState.filter((item)=> item.name !== name))
  }

  function handleTodoCheck(task: TaskInterface){
    setTasks(prevState => prevState.map((item) => {
      if (item.name === task.name){
        return task
      } else {
        return item
      }
    }))
  }

  return (
    <>
      <StatusBar barStyle={"light-content"}
        backgroundColor='transparent'
        translucent
      />
      <View style={styles.header}>
        <Image source={require('@assets/logo.png')}></Image>
      </View>
      <View style={styles.body}>
        <AddNewTodo onPress={handleTodoAdd} onChange={setNewTask} 
        value={newTask}/>
        <View style={styles.bodyContent}>
          <View style={styles.coutersWrapper}>
            <Counter name="Criadas" value={tasks.length}/>
            <Counter name="Concluídas" value={checkedTasks}/>
          </View>
          <FlatList 
            data={tasks} 
            renderItem={(todo) => 
              (
                <Todo 
                key={todo.item.name}
                name={todo.item.name}
                onRemove={() => handleTodoRemove(todo.item.name)}
                onChecked={(isChecked) => {
                  handleTodoCheck({
                    name: todo.item.name,
                    checked: isChecked
                  })
                }}/>
              )
          }/>
        </View>
      </View>
    </>
  )
}
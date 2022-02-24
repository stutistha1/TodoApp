import React, {useContext, createContext, useState} from 'react';

const DataContext = createContext();
const ActionContext = createContext();

export const useDataProvider = () => useContext(DataContext);
export const useActionProvider = () => useContext(ActionContext);

const Provider = ({children}) => {
  const [tasks, setTasks] = useState({
    todo: [],
    done: [],
  });

  const addTask = task =>
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks.todo, task];

      return {todo: updatedTasks, done: prevTasks.done};
    });

  const finishTask = task =>
    setTasks(prevTasks => {
      const updatedUnFinished = prevTasks.todo.filter(value => value !== task);

      return {todo: updatedUnFinished, done: [...prevTasks.done, task]};
    });

  const unFinishTask = task =>
    setTasks(prevTasks => {
      const updatedFinished = prevTasks.done.filter(value => value !== task);

      return {todo: [...prevTasks.todo, task], done: updatedFinished};
    });

  const updateTask = task =>
    setTasks(prevTasks => {
      const updatedUnFinished = prevTasks.todo.map(value => {
        if (task.task === value) {
          let newValue = value;
          newValue.text = task.updatedText;

          return newValue;
        } else {
          return value;
        }
      });

      return {todo: updatedUnFinished, done: prevTasks.done};
    });

  const deleteFinished = task =>
    setTasks(prevTasks => {
      const remainingTasks = prevTasks.done.filter(value => value !== task);

      return {todo: prevTasks.todo, done: remainingTasks};
    });

  const deleteUnFinished = task =>
    setTasks(prevTasks => {
      const remainingTasks = prevTasks.todo.filter(value => value !== task);

      return {todo: remainingTasks, done: prevTasks.done};
    });

  const actions = {
    addTask,
    finishTask,
    updateTask,
    unFinishTask,
    deleteFinished,
    deleteUnFinished,
  };

  return (
    <DataContext.Provider value={tasks}>
      <ActionContext.Provider value={actions}>
        {children}
      </ActionContext.Provider>
    </DataContext.Provider>
  );
};

export default Provider;

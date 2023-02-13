import React, { useContext, useState } from "react";

const TaskContext = React.createContext();

export const TaskContextProvider = (props) => {
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

  const openTaskCreator = () => {
    setIsCreateTaskOpen(true);
  };

  const closeTaskCreator = () => {
    setIsCreateTaskOpen(false);
  };

  return (
    <TaskContext.Provider
      value={{
        isCreateTaskOpen,
        closeTaskCreator,
        openTaskCreator,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};

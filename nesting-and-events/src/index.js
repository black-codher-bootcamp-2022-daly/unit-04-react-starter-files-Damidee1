import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import TaskContainer from "./components/TaskContainer";
import Task from "./components/Task";

const taskList = [
  { id: "task1", title: "Buy Milk", isComplete: true },
  { id: "task2", title: "Read a book", isComplete: false },
  { id: "task3", title: "Early morning run", isComplete: false },
  { id: "task4", title: "Drink water", isComplete: false },
  { id: "task5", title: "Visit the puppy shelter", isComplete: true },
  { id: "task6", title: "Watch Bad Sisters", isComplete: false },
];

function App() {
  <Fragment>
  const [data] = usedate(tasklist)
      <h1 key="heading">Task List</h1>
   <TaskContainer>
        data.map((item))=> item;{
          const{isComplete, title, id} = item
        return <Task key ={id} if ={id} title = {title} iscomplete = {isComplete}
        }
      
      </TaskContainer>
    </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

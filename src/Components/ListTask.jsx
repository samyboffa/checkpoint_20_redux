import React from "react";
import "./ListTask.css";
import { useSelector } from "react-redux";
import { Task } from "./Task";

export const ListTask = () => {
    const allTasks = useSelector((state) => state);
    console.log(allTasks);
    return (
        <div className="allTasks">
            {allTasks.length ? (
                allTasks.map((task, index) => (
                    <Task
                        key={index}
                        order={index}
                        todo={task.todo}
                        isDone={task.isDone}
                    />
                ))
            ) : (
                <div className="notFound"> You've Done everything</div>
            )}
        </div>
    );
};

import React from "react";
import { add, filterDone, filterNotDone } from "../actions/actions";
import { useDispatch } from "react-redux";
import "./AddTask.css";

export const AddTask = () => {
    const dispatch = useDispatch();
    let newTodo = {
        id: 0,
        todo: "",
        isDone: false,
    };
    let i = 1; //counter

    return (
        <div className="addTask">
            <form
                action="submit"
                onSubmit={(e) => (
                    e.preventDefault(),
                    (newTodo.id = i),
                    (newTodo.todo = e.target.task.value),
                    (newTodo.isDone = e.target.doneOrNot.value ? true : false),
                    dispatch(add(newTodo)),
                    (newTodo = {}),
                    i++
                )}
            >
                <label> What's your next Task ?</label> <br />
                <input
                    className="text"
                    type="text"
                    placeholder="Your next task ?"
                    name="task"
                    required
                />
                <br />
                <input
                    type="radio"
                    name="doneOrNot"
                    value={true}
                    required
                />{" "}
                Already Done <br />
                <input type="radio" name="doneOrNot" value="" /> Not Done Yet
                <br />
                <input type="submit" className="submit" value="submit" />
            </form>
            <div className="filter">
                {" "}
                <button
                    className="filterbtn"
                    onClick={() => dispatch(filterDone())}
                >
                    Done First
                </button>
                <button
                    className="filterbtn"
                    onClick={() => dispatch(filterNotDone())}
                >
                    {" "}
                    Not Done First
                </button>{" "}
            </div>
        </div>
    );
};

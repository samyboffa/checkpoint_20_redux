import React from "react";
import "./Task.css";
import { useState } from "react";
import { remove } from "../actions/add";
import { useDispatch } from "react-redux";

export const Task = ({ order, todo, isDone }) => {
    const dispatch = useDispatch();
    let doneOrNot = isDone ? "Done" : "NotDone";
    let trash = (
        <svg className="svg trash" width="35" height="35" viewBox="0 0 24 24">
            <path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
        </svg>
    );
    let edit = (
        <svg className="svg edit" width="37" height="37" viewBox="0 0 24 24">
            <path d="M14.078 4.232l-12.64 12.639-1.438 7.129 7.127-1.438 12.641-12.64-5.69-5.69zm-10.369 14.893l-.85-.85 11.141-11.125.849.849-11.14 11.126zm2.008 2.008l-.85-.85 11.141-11.125.85.85-11.141 11.125zm18.283-15.444l-2.816 2.818-5.691-5.691 2.816-2.816 5.691 5.689z" />{" "}
        </svg>
    );
    let ok = (
        <svg className="svg ok" viewBox="0 0 24 24" width="40" height="40">
            <path d="M19 22h-19v-19h19v2h-1v-1h-17v17h17v-9.502h1v10.502zm5-19.315l-14.966 15.872-5.558-6.557.762-.648 4.833 5.707 14.201-15.059.728.685z" />
        </svg>
    );
    let no = (
        <svg className="svg no" width="36" height="36" viewBox="0 0 24 24">
            <path d="M20.197 2.837l.867.867-8.21 8.291 8.308 8.202-.866.867-8.292-8.21-8.23 8.311-.84-.84 8.213-8.32-8.312-8.231.84-.84 8.319 8.212 8.203-8.309zm-.009-2.837l-8.212 8.318-8.31-8.204-3.666 3.667 8.321 8.24-8.207 8.313 3.667 3.666 8.237-8.318 8.285 8.204 3.697-3.698-8.315-8.209 8.201-8.282-3.698-3.697z" />
        </svg>
    );
    const [displayed, setdisplayed] = useState("none");
    const switchDisplay = () => {
        displayed === "none" ? setdisplayed("block") : setdisplayed("none");
    };
    return (
        <div className={`itemTask${doneOrNot} itemTask`}>
            <div className={`up${doneOrNot} up`}>
                <h1 className={`order${doneOrNot} order`}>{order}</h1>
                <h1 className={`todo${doneOrNot} todo`}>{todo}</h1>
                <div className="logos">
                    <span onClick={() => switchDisplay()}>{edit}</span>
                    <form style={{ display: displayed }}>
                        <input
                            name="newTask"
                            className="inputEdit"
                            placeholder="Modify this task"
                            type="text"
                        />
                    </form>
                    <span>{ok}</span>
                    <span>{no}</span>
                    <span>{trash}</span>
                </div>
            </div>
            <div className={`down${doneOrNot} down`}>
                {" "}
                {isDone ? <h3> Done </h3> : <h3> Not Done</h3>}
            </div>
        </div>
    );
};

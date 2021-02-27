export const add = (newToDo) => {
    return {
        type: "ADD",
        payload: newToDo,
    };
};
export const changeTask = (index, newToDo) => {
    return {
        type: "CHANGE",
        payload: newToDo,
        index: index,
    };
};
export const doneOrNot = (index) => {
    return {
        type: "DONEORNOT",
        inedex: index,
    };
};
export const remove = (index) => {
    return {
        type: "REMOVE",
        index: index,
    };
};

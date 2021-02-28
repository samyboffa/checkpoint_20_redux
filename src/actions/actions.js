export const add = (newToDo) => {
    return {
        type: "ADD",
        payload: newToDo,
    };
};
export const editTask = (index, newToDo) => {
    return {
        type: "EDIT",
        payload: newToDo,
        index: index,
    };
};
export const markDone = (index) => {
    return {
        type: "MARKDONE",
        index: index,
    };
};
export const markNotDone = (index) => {
    return {
        type: "MARKNOTDONE",
        index: index,
    };
};
export const filterDone = () => {
    return {
        type: "FILTERDONE",
    };
};
export const filterNotDone = () => {
    return {
        type: "FILTERNOTDONE",
    };
};

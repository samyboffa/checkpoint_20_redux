let firstTodo = [
    {
        id: 0,
        todo: "Go to the Mall",
        isDone: false,
    },
];

const updateTask = (state = firstTodo, action) => {
    console.log(state);
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "REMOVE":
            return [...state.slice(1, action.index)];

        default:
            return state;
    }
};
export default updateTask;

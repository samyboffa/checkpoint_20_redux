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
        case "EDIT":
            state[action.index].todo = action.payload;
            return state.map((e) => e);
        case "MARKDONE":
            state[action.index].isDone = true;
            return state.map((e) => e);
        case "MARKNOTDONE":
            state[action.index].isDone = false;
            return state.map((e) => e);
        case "FILTERDONE":
            return [
                ...state.filter((e) => e.isDone === true),
                ...state.filter((e) => e.isDone === false),
            ];
        case "FILTERNOTDONE":
            return [
                ...state.filter((e) => e.isDone === false),
                ...state.filter((e) => e.isDone === true),
            ];

        default:
            return state;
    }
};
export default updateTask;

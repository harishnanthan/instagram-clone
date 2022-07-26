export const loginReducer = (state = false, action) => {
    switch (action.type) {
        case "LOGIN":
            return { state: !state };
        case "LOGOUT":
            return { state: state };
        default:
            return state;
    }
}
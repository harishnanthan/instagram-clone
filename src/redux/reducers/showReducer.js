const initialstate = {
    show: false
}

export const showPost = (state = initialstate, action) => {
    switch (action.type) {
        case "SHOWMODEL":
            return {
                show: true
            }
        case "HIDEMODEL":
            return {
                show: false
            }
        default:
            return state
    }
}
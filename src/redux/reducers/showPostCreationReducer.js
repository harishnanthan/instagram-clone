const initialstate = {
    show: false
}

export const showPostCreationReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "SHOWCREATEPOST":
            return {
                show: true
            }
        case "HIDECREATEPOST":
            return {
                show: false
            }
        default:
            return state
    }

}
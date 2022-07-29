export const CHANGELIKE = (id) => {
    return {
        type: "CHANGELIKE",
        payload: id
    }
}

export const TOGGLEDOTS = (id) => {
    return {
        type: "TOGGLEDOTS",
        payload: id
    }
}

export const DELETEPOST = (id) => {
    return{
        type : "DELETEPOST",
        payload: id
    }
}

export const ADDCOMMENT = (id,comment) => {
    return {
        type : "ADDCOMMENT",
        id,
        comment
    }
}


export const POSTSEARCH = (searchQuery) => {
    return{
        type: "POSTSEARCH",
        searchQuery
    }
}

export const CREATEPOST = (desc,file) => {
    return {
        type : "CREATEPOST",
        desc,
        file
    }
}
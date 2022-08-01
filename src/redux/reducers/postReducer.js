const initialState = [
    {
        id: 1,
        userName: "programminghub_app_official",
        like: false,
        likes: 10,
        desc: "Every brand needs an appealing user Interface design to stand out in the market and that's what we are here to do.⚡️",
        comments: [],
        time: "1 day ago",
        show: false
    },
    {
        id: 2,
        userName: "framerategg",
        like: false,
        likes: 122,
        desc: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        comments: [],
        time: "1 month ago",
        show: false
    },
    {
        id: 3,
        userName: "sarcastic_us",
        like: false,
        likes: 10221,
        desc: "readable Content here, content here",
        comments: [],
        time: "1 year ago",
        show: false
    },
]

let count = 1;
let val = 4

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGELIKE":
            return state.map(el => {
                if (el.id === action.payload) {
                    count++
                    console.log(count)
                    if (count % 2 === 0)
                        return { ...el, like: !el.like, likes: el.likes + 1 }
                    else
                        return { ...el, like: !el.like, likes: el.likes - 1 }
                }
                return { ...el }
            })
        case "TOGGLEDOTS":
            return state.map(el => {
                if (el.id === action.payload) {
                    return { ...el, show: !el.show }
                }
                return { ...el }
            })
        case "DELETEPOST":
            const idToRemove = action.payload;
            return state.filter(item => item.id !== idToRemove)
        case "ADDCOMMENT":
            return state.map(el => {
                if (el.id === action.id) {
                    return { ...el , comments:[...el.comments, action.comment]}
                }
                return { ...el }
            })
        case "POSTSEARCH":
            if (action.searchQuery === ""){
                return state
            }
            else{
                const value = action.searchQuery.toLowerCase()
                    return state.filter(item => {
                    return item.userName.toLowerCase().includes(value)
                })
            }
            
        case "CREATEPOST":
            let obj = {
                    id: null,
                    userName: "harishnanthans",
                    img: '',
                    like: false,
                    likes: 0,
                    desc: "",
                    comments: [],
                    time: "0 min ago",
                    show: false
                }
            obj.id = val++
            obj.desc = action.desc
            obj.img = action.file
            state.unshift(obj);
            console.log(state)
            return state.map(el=> el)
        default:
            return state;
    }
}

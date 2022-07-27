const initialState = [
    {   
        id : 1,
        userName: "programminghub_app_official",
        like: false,
        likes: 10,
        desc:"Every brand needs an appealing user Interface design to stand out in the market and that's what we are here to do.⚡️",
        comments: [],
        time: "1 day ago"
    },
    {
        id : 2,
        userName: "framerategg",
        like: false,
        likes: 122,
        desc:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
        comments: [],
        time: "1 month ago"
    },
    {
        id : 3,
        userName: "sarcastic_us",
        like: false,
        likes: 10221,
        desc:"readable Content here, content here",
        comments: [],
        time: "1 year ago"
    },
]

let count = 1;

export const postReducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGELIKE":
            return state.map(el => {
                if(el.id === action.payload){
                    count++
                    console.log(count)
                    if (count % 2 === 0) 
                        return {...el, like : !el.like, likes: el.likes + 1  }
                    else   
                        return {...el, like : !el.like, likes: el.likes - 1  }
                }
                return{...el}
            })
        case "TOGGLEDOTS":
            break;
        default:
            return state;
    }
}

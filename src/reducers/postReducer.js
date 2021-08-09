import { CREATE_POST } from '../actions/type';
const initState=[{
    name:"Deepak Gupta",
    date:"9th August 2021",
    time:"4:50pm",
    desc:"this is a demo text",
    img:"https://coolthemestores.com/wp-content/uploads/2021/04/nature-chrome-featured.jpg"
}];

const postReducer=(state=initState, action)=>{
    switch(action.type){
        case CREATE_POST:
            return [...state, action.payload];
        default:
            return state

    }
}

export default postReducer;
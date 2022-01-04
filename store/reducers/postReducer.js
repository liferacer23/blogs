import * as type from '../type';

const initialState={
    posts:['nopost','bypost','blah blah'],
    blogs:[{
        title:"First blog",
        subtitle:"Literally my first blog on redux",
        body:"The Redux DevTools make it easy to trace when, where, why, and how your application's state changed. Redux's architecture lets you log changes, use time-travel debugging, and even send complete error reports to a server."
    },{
        title:"First blog",
        subtitle:"Literally my first blog on redux",
        body:"The Redux DevTools make it easy to trace when, where, why, and how your application's state changed. Redux's architecture lets you log changes, use time-travel debugging, and even send complete error reports to a server."
    }],
    loading:false,
    error:null
}
export const postReducer=(state=initialState,action)=>{
    
        switch(action.type){
            case type.GET_POSTS:
                state.blogs= [...state.blogs,action.payload]
                return state
                
            default:
                return state
        }
       
}





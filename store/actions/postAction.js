import * as type from '../type';


export const fetchposts=(input)=> async dispatch=>{

    //const res = await axios.get('api/posts')

    dispatch({
        type:type.GET_POSTS,
        payload:input
    })

}
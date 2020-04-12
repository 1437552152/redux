import {FETCH_POSTS} from './types';
export function fetchPosts(){
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(posts=>{
            dispatch({
                type:FETCH_POSTS,      //这里是页面首先走的,走完之后会发送一个type:FETCH_POSTS给store，，，store最后会分发给postReducers
                payload:posts
            })
        })
    }
}
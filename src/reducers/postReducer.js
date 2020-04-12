import {FETCH_POSTS} from '../actions/types'
/* reducer的作用：返回新的状态 */
const initialState={
    items:[]
}

export default function(state=initialState,action){
   switch (action.type){
     case FETCH_POSTS:
        return {
            ...state,
            items:action.payload
        }
      default:
      return state;
   }
}
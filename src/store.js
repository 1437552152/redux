import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';  //中间件
import rootReducer from './reducers/index';
const initialState={};
const middleware=[thunk];
export const store=createStore(rootReducer,initialState,applyMiddleware(...middleware));  //这里需要传3个参数,需要慢慢理解传的三个参数

//  applyMiddleware 目的是将中间件连成一个数组，一次执行，，，因此可以先来了解redux-thunk这个中间件，异步操作至少要送出两个Action，，但是如何在第一个action送出后，系统自动送出第二个Action

//注意第一个参数就是Reducer，Store收到action以后，必须给出一个新的state，这样View才会发生变化，这种state的计算过程就叫做Reducer,Reducer是一个函数，他接受Action和当前的State作为参数，返回一个新的state

/* Reducer函数负责生成State，由于整个应用只有一个State对象，因此State在一个大型项目中一定十分庞大，因此需要将Reducer进行拆分，然后再利用combineReducers方法再将刚刚拆分的子Reducer，合并为一个大的Reducer */
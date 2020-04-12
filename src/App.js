import React, { Component } from 'react';
import { Provider} from "react-redux";   //React-Redux提供Provider组件，目的是让容器组件拿到state
import './App.css';
import Movie from "./Component/Movie";
import Phone from "./Component/Phone";
import Video from "./Component/Video";
import {store} from "./store"
//Store就是保存数据的地方，你可以把它看成一个容器，整个应用只能有一个Store，既然是容器肯定需要创建，Redux提供createStore这个函数来生成Store
class App extends Component {
  render() {
    return (
     <Provider store={store}> 
        <div className="App">
            <Movie />
            <Phone />
            <Video />
        </div>
      </Provider>
    );
  }
}

export default App;

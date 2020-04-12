import React, { Component } from 'react';
import {fetchPosts} from "../../actions/postActions";   //去触发方法       connect方法用于从UI组件生成容器组件，就是将这两种组件连起来
import {connect} from "react-redux";
import Phone from "../Phone";
const mapStateToProps=state=>({
  posts:state.posts.items
})
class Video extends Component {
    static defaultProps = {
        title: 'stranger'
      }
    
     /*  componentDidMount(){
        this.props.fetchPosts();
      } */

  render() {
      const {title}=this.props;
      console.log("222",this.props.posts)
    return (
      <div className="App">
      {title}
      <Phone />
      </div>
    );
  }
}
/* 注意：state.posts里的posts是reducers里的posts */

export default connect(mapStateToProps,{fetchPosts})(Video);
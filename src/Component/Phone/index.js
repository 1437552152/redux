import React, { Component } from 'react';
import {fetchPosts} from "../../actions/postActions";
import {connect} from "react-redux";
const mapStateToProps=state=>({
  posts:state.posts.items
})
class Phone extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  render() {
    console.log("111",this.props.posts)
    return (
      <div className="App">
      3333
      </div>
    );
  }
}

export default  connect(mapStateToProps,{fetchPosts})(Phone);
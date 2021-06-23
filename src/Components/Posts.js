import React, { Component } from 'react';
import {connect} from 'react-redux'
import {deletePost} from '../action/postActions'

class Posts extends Component{
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        const post = this.props.post? (
            <div className="post card addPadd">
                <h1 className="center blue-text">{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn green" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        ): ( <div className="center">Loading....Go to Home</div>)
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    let id = ownProps.match.params.post_id;
    return{
        post : state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost : (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)
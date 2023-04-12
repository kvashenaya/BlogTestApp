import React, { Component } from 'react';
import Start from './StartComponent';
import Post from './PostComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postPost, deletePost, fetchPosts, fetchComments, updatePost } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {     
      comments: state.comments,
      posts: state.posts,
    }
}

const mapDispatchToProps = (dispatch) => ({
  updatePost: (id, post) => {dispatch(updatePost(id, post))}, 
  fetchComments: () => {dispatch(fetchComments())}, 
  postComment: (values) => dispatch(postComment(values)),
  fetchPosts: () => {dispatch(fetchPosts())},
  postPost: (post) => dispatch(postPost(post)),
  deletePost: (id) => {dispatch(deletePost(id))},
  resetPostForm: () => {dispatch(actions.reset('post'))},  
  resetCommentForm: () => {dispatch(actions.reset('comment'))},    
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchComments();
    this.props.fetchPosts();  
  }

  render() {
    const DishWithId = ({match}) => {
      return(      
        <DishDetail dish={this.props.posts.posts.filter((dish) => dish.id === match.params.id)}
          isLoading={this.props.comments.isLoading}
          errMess={this.props.posts.errMess}
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
          comments={this.props.comments.comments}
          postComment={this.props.postComment}
          //commentsErrMess={this.props.comments.errMess}
        />       
      );
    }

    return (
      <div>
        <Header />   
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route exact path='/start' component={() => <Start />} />
              <Route exact path="/post" component={() => <Post resetForm={this.props.resetCommentForm} posts={this.props.posts} postPost={this.props.postPost} />} />
              <Route path="/post/:id" component={DishWithId} />
              <Redirect to='/start'/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

import * as ActionTypes from './ActionTypes';



export const fetchComments = () => (dispatch) => {

    dispatch(commentsLoading(true));
    return fetch('http://localhost:4000/comments')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => {dispatch(addComments(comments)); console.log(comments)})
        .catch(error => dispatch(commentsFailed(error.message)));
}


export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = ({author, commentcontent, postID}) => (dispatch) => {

    const newComment = {
        author: author,
        commentcontent: commentcontent,
        postID: postID
    }
    console.log('Comment ', newComment);
    return fetch('http://localhost:4000/comments/create', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('Post comments ', error.message); 
        alert('Your comment could not be posted\nError: '+ error.message); })
}

export const fetchPosts = () => (dispatch) => {
    dispatch(postsLoading(true));

    return fetch('http://localhost:4000/posts')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(posts => {dispatch(addPosts(posts)); console.log(posts)})
        .catch(error => dispatch(postsFailed(error.message)));
}

export const postsLoading = () => ({
    type: ActionTypes.POSTS_LOADING
});

export const postsFailed = (errmess) => ({
    type: ActionTypes.POSTS_FAILED,
    payload: errmess
});

export const addPosts = (posts) => ({
    type: ActionTypes.ADD_POSTS,
    payload: posts
});


export const postPost = (post) => (dispatch) => {
        
    return fetch('http://localhost:4000/posts/create', {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => {console.log('New post: ', response); alert('Thank you for the post!\n');})
    .catch(error =>  {console.log('New post: ', error.message); alert('Error: '+error.message);});
};

export const updatePost = (id, post) => (dispatch) => {
     console.log(id, post)   
    return fetch('http://localhost:4000/posts/update/'+id, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    
    .then(response => response.json())
    .then(response => {console.log('Upgraded post: ', response); alert('Thank you for the post!\n');})
    .catch(error =>  {console.log('Upgraded post: ', error.message); alert('Updated. Reload the page '+error.message);});
};

export const deletePost = (id) => (dispatch) => {
    return fetch('http://localhost:4000/posts/delete/'+id, {
        method: "DELETE",
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => {console.log('Post deleted:: ', response); alert('Your post deleted!\n'+JSON.stringify(response));})
    .catch(error =>  {console.log('Post is not deleted: ', error.message); alert('Deleted. Reload the page \nError: '+error.message);});
}



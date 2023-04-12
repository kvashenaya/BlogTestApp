import React from 'react';
import { Card, CardImg, CardText, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import NewPost from './CreatePostComponent';

const Post = (props) => {
        const menu = props.posts.posts.map((post) => {          
            return (   
                         
            <ul className="standard-list">
                <br></br>  
                <Link to={`/post/${post.id}`} > 
                <div className="row">               
                    <li key={post.id}>
                        <p>{post.posttitle}</p>
                        <p id="p">by {post.author}</p>
                    </li>
                </div>
                </Link>
            </ul>                 
            );
        });

        if (props.posts.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.posts.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.posts.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/start'>START</Link></BreadcrumbItem>
                            <BreadcrumbItem active>POST</BreadcrumbItem>
                        </Breadcrumb>
                        <h3>Post of user Alina</h3>
                        {menu}
                        </div>
                   
                    <div className="col">      
                        <NewPost resetForm={props.resetForm} postPost={props.postPost}/>
                    </div>
                    </div>
                </div>
            );
    }

export default Post;
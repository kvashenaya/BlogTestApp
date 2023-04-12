import React, { useState, useEffect } from 'react';
import { Card, CardText, CardBody, CardTitle, Button, Label, Col, Row} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
// import { Link } from 'react-router-dom';
// import { Control, LocalForm } from 'react-redux-form';
// import { Loading } from './LoadingComponent';
import UpdatePost from './UpdatePostComponent';

function DishDetail ({dish, comments, postComment, deletePost, updatePost}){
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !(val) || (val.length <= len);
  const minLength = (len) => (val) => (val) && (val.length >= len);

  const [post, setPost] = useState(dish[0]);
  const [comms, setComms] = useState(comments);   
  const [postId, setPostId] = useState();  
   
  useEffect(() => {
    setPost(dish[0]);
    setComms(comments);
    if(post)setPostId(post.id);
  });
  console.log('comms', comms);

  const handleSubmit = (values) => {
    var data = {...values,
      postID: post.id
    };  
    //console.log(data);
    postComment(data);
  }

  const handleDelete = (id) => {
    deletePost(id);
  }
      return(
        <div class="container">
        <div class="row">
          <div class="col">  
                    { post ?              
                    <Card key={post.id}> 
                        <CardBody>
                            <CardTitle>{post.posttitle}</CardTitle>
                            <CardText>by {post.author}</CardText>                            
                            <CardText>{post.postcontent}</CardText>
                        </CardBody>
                    </Card>
                    : null}
                    <br></br>
                    <Button onClick={()=>handleDelete(post.id)}>Delete post</Button>
                    <br></br>
                    <UpdatePost PostID={postId} updatePost={updatePost}/>    
                </div>  
                <div class="col">  
                <Label>Comment section</Label> 
                    { (comms[0] && post)?
                  comms.map(c=>{if(c.postID==post.id) return(<Card key={c.id}> 
                    <CardBody>
                        <CardTitle>{c.author}</CardTitle>
                        <CardText>{c.commentcontent}</CardText>
                    </CardBody>
                </Card>)}): null}
                
                
               <br></br>
                <Form model="comment" onSubmit={(values) => handleSubmit(values)}>
                
                  <Row className="form-group">
                      <Col md={12}>
                          <Control.textarea model=".commentcontent" id="commentcontent" name="commentcontent"
                              placeholder="Share your thoughts"
                              rows="7"
                              className="form-control" />
                      </Col>
                  </Row>
                  <Row className="form-group">
                      <Col md={12}>
                          <Control.text model=".author" id="author" name="author"
                              placeholder="Your name"
                              className="form-control"
                              validators={{
                                  required, minLength: minLength(3), maxLength: maxLength(30)
                              }}
                              />
                          <Errors
                              className="text-danger"
                              model=".author"
                              show="touched"
                              messages={{
                                  required: 'Required',
                                  minLength: 'Must be greater than 3 characters',
                                  maxLength: 'Must be 30 characters or less'
                              }}
                          />
                      </Col>
                  </Row>
                  <Row className="form-group">
                      <Col md={1}>
                          <Button type="submit" color="primary">
                          Send
                          </Button>
                      </Col>
                  </Row> 
               </Form>  
               </div> 
               </div>                                                   
              </div>
          );
      }
    
export default DishDetail;
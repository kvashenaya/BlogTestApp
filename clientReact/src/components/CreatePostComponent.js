import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postPost(values);
        this.props.resetForm();
    }

    render() {
        return(
            <div className="container">
                <div className="row row-content">
                    <div classNameauthorposttitle="col-12">
                        <h3>Create a post</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="post" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                               
                                <Col md={10}>
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
                                
                                <Col md={10}>
                                    <Control.text model=".posttitle" id="posttitle" name="posttitle"
                                        placeholder="Post title"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(30)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".posttitle"
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
                               <Col md={10}>
                                    <Control.textarea model=".postcontent" id="postcontent" name="postcontent"
                                        placeholder="Your post content"
                                        rows="7"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Create post
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

}

export default NewPost;
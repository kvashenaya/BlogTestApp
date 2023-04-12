import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem active>START</BreadcrumbItem>
                    <BreadcrumbItem><Link to="/post">POST</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>START PAGE of blog application</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content"> 
                <h2>Click on POST to create, update, or delete a certain post. You can also leave a comment.</h2>                                   
            <div className="col-12">
            </div>
        </div>
        </div>
    );
}

export default About;    
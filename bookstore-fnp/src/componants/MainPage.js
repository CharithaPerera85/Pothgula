import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Container, Navbar,Form, Button, Col, Row, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './FBconfig';




const db = firebase.firestore();





class mainMenu extends Component {

    state={
        newbooksData : [],
        bookname:'',
        author:'',
        price:'',
        isbn:'',
        username:'',
        password:''
    }

    componentDidMount () {

        db.collection('newbooks').get().then(data =>{
            data.docs.forEach(doc =>{
                
                this.setState({
                    newbooksData : [...this.state.newbooksData, doc.data()]
                })
            })
        })
        
    }

    handleChange =(e) => {
    this.setState({
        [e.target.name]:e.target.value,
         
        })
    }

    submitData = (e) => {
        e.preventDefault();
        var uname =this.state.username;
        var pwd = this.state.password;

if (uname ==='bookadmin' && pwd ==='pwdadmin') {
    
        db.collection('newbooks').add({
            bookname:this.state.bookname,
            author:this.state.author,
            price:this.state.price,
            isbn:this.state.isbn
        })
} else {
        window.alert("Incorrect Username or Password");
}
        
    }


    render() {
        return (
            <Container fluid >
            <Navbar className='navbar'>
            <div className='navbar'>
                   <h1><a href='#landing-link'>
                        Pothgula
                        <i class="fa fa-book" ></i></a>
                       </h1>
                </div>
                <div className='nav-link'>
                    
                    <ul className='nav'>
                        <li><a href='#landing-link'>Home</a></li>
                        <li><a href='#avabooks-link'>Books</a></li>
                        <li><a href='#addbook-link'>Add Books</a></li>
                        <li><a href='#contacts-link'>Contacts</a></li>
                        
                    </ul>
                </div>
            </Navbar>
   
               



                <Row className='sty-home-heading' id='landing-link'>
                    <h1> --~ Pothgula ~--</h1>
                </Row>

                <Row className='sty-home'>
                    <div>
                        <video src='/videos/video-1.mp4' autoPlay loop muted className='video' />
                    </div>  
                    <div className='sty-home-p'>     
                        <p>The Corporate goals of පොත්ගුල Book Emporium as a social oriented service organization upholding social values are to consolidate its present operations with market penetration and development, product development and diversification and look out for joint ventures establishing forward and backward linkages.

Already a concerted effort has been made to improve the quality of our product.<br/> We are involved in a continuous process of improvement. The prime target is to match international standards. The company hopes to increase the member of its publications and penetrate regional and international market.<br/> We are exploring the possibility of launching a joint venture with a foreign collaborator for this purpose to make Sri Lanka the hub of the book trade in South East Asia.
                        </p>
                    </div> 
                </Row>

                

                <Row className='sty-books-heading' id='avabooks-link'>
                    <h1> Available Books</h1>
                </Row>
                <Row className='sty-books'>
                    
                        <div>
                        {this.state.newbooksData.length ? (this.state.newbooksData.map(Item =>{
                                return( 
                                <div  className='card'>
                                   <div className='sty-card'>
                                   <h6>{Item.bookname}</h6>
                                   <hr></hr>
                                   <p>Author: {Item.author}</p>
                                   <p>Price: {Item.price}</p>
                                   <p>ISBN: {Item.isbn}</p>
                                   </div>
                                </div>
                                )
                        })) : 
                        
                        (<Spinner animation="border" />)} 
                        </div>
                     
                </Row>





              






                <Row className='sty-addbooks-heading' id='addbook-link'>
                
                   <h1> Add Books</h1>
                 
                </Row>

                <Row className='sty-addbook'>   
                <div className='sty-form'>
                    
                    <Form >
                            <Form.Group controlId="bookname">
                                <Form.Label>Book Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="bookname"
                                placeholder="Enter Book Name" 
                                onChange={this.handleChange}
                                />
                            
                            </Form.Group>

                            <Form.Group controlId="author">
                                <Form.Label>Author</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="author"
                                placeholder="Enter Author" 
                                onChange={this.handleChange}
                                />
                            
                            </Form.Group>

                            <Form.Group controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="price"
                                placeholder="Enter Price" 
                                onChange={this.handleChange}
                                />
                            
                            </Form.Group>

                            <Form.Group controlId="isbn">
                                <Form.Label>ISBN</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="isbn"
                                placeholder="Enter ISBN" 
                                onChange={this.handleChange}
                                />
                            
                            </Form.Group>

                            <Form.Group controlId="username">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="username"
                                placeholder="Enter User Name" 
                                onChange={this.handleChange}
                                />
                            
                            </Form.Group>
                            
                            
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                name="password"
                                placeholder="Enter Password" 
                                onChange={this.handleChange}
                                />
                            </Form.Group>
                           
                            <Button 
                            variant="primary" 
                            type="submit"
                            onClick={this.submitData}
                            >
                                Add Book
                            </Button>
                    </Form>
                   
                </div>
                </Row> 




                




                <Row className='sty-contact-heading' id='contacts-link'>    
                        <h1>Contacts</h1>
                </Row>

                <Row className='sty-contact'>
                
                    <Col >
                        <ul className='sty-contact-ul-1'>
                            <li><h4>Contacts</h4></li>
                            <li>Tel     : +94112235980</li>
                            <li>Hotline : +94774463463</li>
                            <li>Email   : transitsolutions@slt.lk</li>
                            
                        </ul>
                    </Col>
                    <Col >
                        <ul className='sty-contact-ul-2'>
                            <li><h4>Site Map</h4></li>
                            <li>Home</li>
                            <li>Books</li>
                            <li>Add Books</li>
     
                        </ul>
                    </Col>
                    <Col >
                        <ul className='sty-contact-ul-3'>
                            <li><h4>Category</h4></li>
                            <li>Novels</li>
                            <li>Translations</li>
                            <li>Stories</li>
     
                        </ul>
                    </Col>

                </Row>

              

                
                <Row className='sty-footer'>

                    <Col className='sty-footer-p1'>
                        <p>All Rights Pothgula Books Store</p>
                    </Col>

                    <Col className='sty-footer-p2'>
                        <p>Developed by TransIT Solutions @ 2020</p>
                    </Col>

                    <Col className='sty-footer-p3'>
                        <a href='https://web.facebook.com/' className='fb'>
                            <i class="fab fa-facebook" ></i>
                        </a>
                        <a href='https://www.youtube.com/' className='yt'>
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href='https://twitter.com/' className='tw'>
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href='https://lk.linkedin.com/' className='ln'>
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </Col>
                   
                
                
                
                
                </Row>
                
                
            </Container>
            
        )
    }
}

export default mainMenu 

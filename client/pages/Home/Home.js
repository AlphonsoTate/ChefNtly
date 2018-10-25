import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";


class Chefs extends Component {
  state = {
    firstname: "",
    lastname: "",
    city:"",
    company:"",
    bio:"",
    email: "",
    date: Date.now,
    servingMin: 0,
    servingMax: 0,
    password:"",
    phone: "",
    meals: { dinner:"",
             lunch:"",      
             breakfast:"" }  
  };

  componentDidMount() {
    this.loadChefs();
  }

  loadChefs = () => {
    API.getChefs()
      .then(res =>
        this.setState({ chefs: res.data, email: res.data.email, city: res.data.city, bio: res.data.bio, phone: res.data.phone })
      )
      .catch(err => console.log(err));
  };

  deleteChef = id => {
    API.deleteChef(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.saveChef({
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        city: this.state.city,
        password: this.state.password,
        bio: this.state.bio,
        company: this.state.company,
        phone: this.state.phone,
        servingMin: this.state.servingMin,
        servingMax: this.state.servingMax,
        date: this.state.date,
        meals: this.state.meals,


      })
        .then(res => this.loadChefs())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      
      <Container fluid>
        <Row>-
          <Col size="md-6">
            <Jumbotron>
              <h1>What Should I Eat </h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chefs;

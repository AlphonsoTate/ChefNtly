import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/chefs");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/chefs/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/chefs/" + id);
  },
  // Saves a book to the database
  saveBook: function(chefData) {
    return axios.post("/api/chefs", chefData);
  }
};

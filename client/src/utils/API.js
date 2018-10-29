import axios from "axios";

export default {
  // Gets all books
  getChefs: function() {
    return axios.get("/api/chefs");
  },
  // Gets the book with the given id
  getChef: function(id) {
    return axios.get("/api/chefs/" + id);
  },
  // Deletes the book with the given id
  deleteChef: function(id) {
    return axios.delete("/api/chefs/" + id);
  },
  // Saves a book to the database
  saveChef: function(chefData) {
    return axios.post("/api/chefs", chefData);
  }
};

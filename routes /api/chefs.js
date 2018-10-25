const router = require("express").Router();
const chefsController = require("../../controllers/chefsController");

// Matches with "/api/books"
router
  .route("/")
  .get(chefsController.findAll)
  .post(chefsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(chefsController.findById)
  .put(chefsController.update)
  .delete(chefsController.remove);

module.exports = router;

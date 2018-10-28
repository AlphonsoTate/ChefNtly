const router = require("express").Router();
const chefsController = require("../../controllers/chefsController");

// Matches with "/api/chefs"
router
  .route("/")
  .get(chefsController.findAll)
  .post(chefsController.create);

// Matches with "/api/chefs/:id"
router
  .route("/:id")
  .get(chefsController.findById)
  .put(chefsController.update)
  .delete(chefsController.remove);

module.exports = router;

const router = require("express").Router();
const chefRoutes = require("./books");

// Book routes
router.use("/chefs", chefRoutes);

module.exports = router;

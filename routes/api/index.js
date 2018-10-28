const router = require("express").Router();
const chefRoutes = require("./chefs");

// Book routes
router.use("/chefs", chefRoutes);

module.exports = router;

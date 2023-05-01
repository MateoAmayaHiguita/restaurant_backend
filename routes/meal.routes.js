const express = require('express');

// Controllers
const mealController = require('../controllers/restaurant.controller');

// Middlewares
const authMiddleware = require('../middlewares/auth.middleware');
const mealMiddleware = require('../middlewares/meal.middleware');
const validationMiddleware = require('../middlewares/validations.middleware');

const router = express.Router();

router.get("/")
router.get("/:id")

router.use(authMiddleware.protect, authMiddleware.restrictTo('admin'), mealMiddleware.validIfMealExist)
router
.route('/:id')
.post(validationMiddleware.createMeal,mealController.create)
.patch(validationMiddleware.updateMeal,mealController.update)
.delete(mealController.delete)

module.exports = router;
const asyncHandler = require('express-async-handler');
const courseController = require("../controllers/course")
const { createRouter } = require("../helper/app")
const isAuthenticated = require('../middlewares/auth');
const router = createRouter();

router.post("/add", isAuthenticated, asyncHandler(courseController.add))
router.get("/list", isAuthenticated, asyncHandler(courseController.list))
router.get("/myCourses", isAuthenticated, asyncHandler(courseController.listById))
router.patch("/update/:id", isAuthenticated, asyncHandler(courseController.update))
router.delete("/:id", isAuthenticated, asyncHandler(courseController.deleteCourse))
// router.delete("/all", isAuthenticated, asyncHandler(courseController.deleteAllCourses))

module.exports = { courseRouter: router };
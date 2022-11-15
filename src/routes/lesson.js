const asyncHandler = require('express-async-handler');
const lessonController = require("../controllers/lesson")
const { createRouter } = require("../helper/app")
const isAuthenticated = require('../middlewares/auth');
const router = createRouter();

router.post("/add", isAuthenticated, asyncHandler(lessonController.add))
router.get("/list", isAuthenticated, asyncHandler(lessonController.list))
router.patch("/:id", isAuthenticated, asyncHandler(lessonController.update))
router.delete("/:id", isAuthenticated, asyncHandler(lessonController.deleteLesson))

module.exports = { lessonRouter: router };
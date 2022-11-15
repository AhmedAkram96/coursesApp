const asyncHandler = require('express-async-handler');
const userController = require("../controllers/user")
const { createRouter } = require("../helper/app")
const isAuthenticated = require('../middlewares/auth');
const isNotAuthenticated = require('../middlewares/no-auth');
const { profilePicture } = require("../middlewares/multer")
const router = createRouter();

router.post("/signup", asyncHandler(userController.signUp))
router.post("/signin", asyncHandler(userController.signIn))

router.get("/", isAuthenticated, asyncHandler(userController.viewUserDetails))
router.delete("/", isAuthenticated, asyncHandler(userController.deleteUser))
router.patch("/profilePicture", isAuthenticated, profilePicture.single("profilePicture"), asyncHandler(userController.updateProfilePicture))
router.patch("/updateName", isAuthenticated, asyncHandler(userController.updateName))
module.exports = { userRouter: router };
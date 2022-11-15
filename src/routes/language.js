const asyncHandler = require('express-async-handler');
const languageController = require("../controllers/language")
const { createRouter } = require("../helper/app")
const isAuthenticated = require('../middlewares/auth');
const router = createRouter();

router.post("/add", isAuthenticated, asyncHandler(languageController.add))
router.get("/list", isAuthenticated, asyncHandler(languageController.list))
router.patch("/:id", isAuthenticated, asyncHandler(languageController.update))
router.put("/:id", isAuthenticated, asyncHandler(languageController.replace))
router.delete("/:id", isAuthenticated, asyncHandler(languageController.deleteLanguage))
router.delete("/all", isAuthenticated, asyncHandler(languageController.deleteAllLanguages))

module.exports = { languageRouter: router };
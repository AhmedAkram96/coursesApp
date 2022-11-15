const express = require('express')
const bodyParser = require('body-parser');
const routes = require("./src/routes");

const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//bootstrap the app with all needed configs
require("./src/config/bootstrap");

app.use("/user/", routes.userRouter);
app.use("/language/", routes.languageRouter);
app.use("/lesson/", routes.lessonRouter);
app.use("/course/", routes.courseRouter);
app.listen(port, () => {
    console.log(`babbel task app is listening on port ${port}`)
})
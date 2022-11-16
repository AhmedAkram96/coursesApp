const userValidator = require("../validators/user")
const userServices = require("../services/user")

const signUp = (async (req, res) => {
    let body;
    try {
        body = userValidator.signupInput(req.body)
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.details[0].message
        });
    }
    const { first_name, last_name, username, password } = req.body;
    try {
        const [data, token] = await userServices.signup(first_name, last_name, username, password);

        return res.status(201).json({
            status: 201,
            message: "user created successfully",
            data: data,
            token: token
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})
const signIn = (async (req, res) => {
    let body;
    try {
        body = userValidator.signinInput(req.body)
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.details[0].message
        });
    }
    const { username, password } = body;

    try {
        const [data, token] = await userServices.signin(username, password)
        return res.status(200).json({
            status: 200,
            message: "you are signed in successfully",
            data: data,
            token: token
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})

const viewUserDetails = (async (req, res) => {
    const id = req.decodedToken.id
    try {
        const data = await userServices.viewUserDetails(id)
        return res.status(200).json({
            status: 200,
            message: "user found successfully",
            data: data,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }

})
const deleteUser = (async (req, res) => {
    const id = req.params.id
    try {
        const result = await userServices.deleteUser(id)
        return res.status(200).json({
            status: 200,
            message: "user deleted successfully",
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }

})
const updateProfilePicture = (async (req, res) => {

    try {
        const id = req.decodedToken.id
        const path = req.file.path
        const user = await userServices.updateProfilePicture(path, id)
        return res.status(200).json({
            status: 200,
            message: "profile picture updated successfully !",
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }
})
const updateName = (async (req, res) => {
    let body;
    try {
        body = userValidator.updateNameInput(req.body)
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.details[0].message
        });
    }
    try {
        const id = req.decodedToken.id
        const user = await userServices.updateName(body, id)
        return res.status(200).json({
            status: 200,
            message: "user updated successfully",
            data: user
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: "Bad Request",
            data: error.detail
        });
    }

})


module.exports = { signUp, viewUserDetails, signIn, deleteUser, updateProfilePicture, updateName };
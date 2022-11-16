const { userDAL } = require("../dal")
const { hashPassword, checkForCorrectPassword } = require("./auth")
const { signJWT } = require("../services/auth")

const signup = (async (first_name, last_name, username, password) => {
    const encryptedPassword = await hashPassword(password);
    try {
        const user = await userDAL.signup(first_name, last_name, username, encryptedPassword)
        const token = await signJWT(user.id);
        return [user, token]
    } catch (error) {
        throw error
    }

})
const viewUserDetails = (async (id) => {
    try {
        const user = await userDAL.viewUserDetails(id)
        if (!user) {
            throw "no user found with that ID"
        }
        return user
    } catch (error) {
        throw { detail: error }
    }

})
const signin = (async (username, password) => {
    try {
        const user = await userDAL.getUserByName(username)
        if (!user) {
            throw "username is incorrect"
        }
        const passwordMatches = await checkForCorrectPassword(
            password,
            user.password,
        );
        if (!passwordMatches) {
            throw "password is incorrect"
        }
        const token = await signJWT(user.id);
        delete user.password
        return [user, token]

    } catch (error) {
        throw { detail: error }
    }
})
const deleteUser = (async (id) => {
    try {
        const user = await userDAL.viewUserDetails(id)
        if (!user) {
            throw "user is already deleted"
        }
        return userDAL.deleteUser(id);
    } catch (error) {
        throw { detail: error }
    }

})
const updateProfilePicture = (async (path, id) => {
    try {
        return userDAL.updateProfilePicture(path, id);
    } catch (error) {
        throw error
    }
})

const updateName = (async (body, id) => {
    try {
        var user = await userDAL.viewUserDetails(id)
        user = { ...user, ...body }
        return userDAL.updateName(user.first_name, user.last_name, id);
    } catch (error) {
        throw error
    }
})
module.exports = { signup, viewUserDetails, signin, deleteUser, updateProfilePicture, updateName }
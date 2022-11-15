

const userCreateOutput = (async (result) => {
    let user = result.rows[0]
    delete user.password
    return user
})
const userViewOutput = (async (result) => {
    let user = result.rows[0]
    delete user.password
    return user
})
const userSigninOutput = (async (result) => {
    let user = result.rows[0]
    return user
})
module.exports = { userCreateOutput, userViewOutput, userSigninOutput }
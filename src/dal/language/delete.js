const { pool } = require("../../config/db")
const languageSerializer = require("./serialize")


const deleteLanguage = (async (id) => {
    const query =
        "DELETE FROM languages WHERE id=$1;"
    const values = [id];
    try {
        return pool.query(query, values);
    } catch (error) {
        throw error
    }
})
const deleteAllLanguages = (async () => {
    const query =
        "DELETE FROM languages;"
    try {
        return pool.query(query);
    } catch (error) {
        throw error
    }
})

module.exports = { deleteLanguage, deleteAllLanguages }
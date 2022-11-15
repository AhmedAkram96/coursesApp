const { pool } = require("../../config/db")
const languageSerializer = require("./serialize")

const list = (async () => {
    const query =
        "SELECT * FROM languages;";
    try {
        const result = await pool.query(query);
        return languageSerializer.languageListOutput(result);
    } catch (error) {
        throw error
    }
})
const getLanguageById = (async (id) => {
    const query =
        "SELECT * FROM languages WHERE id=$1;";
    const values = [id];
    try {
        const result = await pool.query(query, values);
        return languageSerializer.languageCreateOutput(result);
    } catch (error) {
        throw error
    }
})
module.exports = { list, getLanguageById }
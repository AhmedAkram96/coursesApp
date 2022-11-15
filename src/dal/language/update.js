const { pool } = require("../../config/db")
const languageSerializer = require("./serialize")


const update = (async (id, body) => {
    const query =
        "UPDATE languages SET name=$1, code=$2 WHERE id=$3 RETURNING *;"
    const values = [body.name, body.code, id];
    try {
        const result = await pool.query(query, values);
        return languageSerializer.languageCreateOutput(result);
    } catch (error) {
        throw error
    }
})
const replace = (async (id, body) => {
    const query =
        "UPDATE languages SET name=$1, code=$2 WHERE id=$3 RETURNING *;"
    const values = [body.name, body.code, id];
    try {
        const result = await pool.query(query, values);
        return languageSerializer.languageCreateOutput(result);
    } catch (error) {
        throw error
    }
})

module.exports = { update, replace }
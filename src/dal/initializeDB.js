const { pool } = require("../config/db")
const schema = require("./schema")

const init = async () => {
    await Promise.all([
        await pool.query(schema.userTable),
        await pool.query(schema.languageTable),
        await pool.query(schema.lessonTable),
        await pool.query(schema.courseTable),
    ]).catch(
        process.exit
    )
}
module.exports = { init }
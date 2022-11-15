const languageCreateOutput = (async (result) => {
    const language = result.rows[0]
    return language
})
const languageListOutput = (async (result) => {
    const languages = result.rows;
    const count = result.rowCount;
    return [languages, count]
})

module.exports = { languageCreateOutput, languageListOutput }
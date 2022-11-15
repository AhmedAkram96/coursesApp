const create = require("./create");
const read = require("./read");
const remove = require("./delete")
const update = require("./update")
module.exports = { ...create, ...update, ...read, ...remove }
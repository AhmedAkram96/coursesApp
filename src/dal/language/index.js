const create = require("./create");
const read = require("./read");
const remove = require("./delete")
const update = require("./update")
module.exports = { ...create, ...read, ...remove, ...update }
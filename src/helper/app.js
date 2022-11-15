const express = require("express");
const { celebrate } = require("celebrate");


const createRouter = (() => {
    const router = express.Router();
    router.add = (method, path, validation, ...middleware) => {
        const mdl = typeof validation === "object" ? celebrate(validation) : validation;
        middleware.unshift(mdl);
        return router[method](path, middleware);
    };

    return router;
})

module.exports = { createRouter };
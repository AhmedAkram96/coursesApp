const jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs");

const signJWT = (id, expiresIn = '24h') =>
    new Promise((resolve, reject) => {
        if (!expiresIn) {
            expiresIn = '7h'
        } else {
            expiresIn = '10h'
        }
        jwt.sign(
            {
                id: id,
            },
            process.env.SECRET,
            {
                expiresIn,
            },
            (err, token) => {
                if (err) {
                    return reject(err);
                }
                resolve(token);
            },
        );
    });

const extractToken = authHeader => {
    if (!typeof authHeader === 'string') {
        return null;
    }
    const headerParts = authHeader.trim().split(' ');
    if (!(headerParts.length === 2 && headerParts[0] === 'Bearer')) {
        return null;
    }
    return headerParts[1];
};

const verifyToken = token =>
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
            if (err) {
                return reject(err);
            }
            resolve(decodedToken);
        });
    });


const isAuthenticated = token => verifyToken(token);

const isNotAuthenticated = async token => {
    try {
        await verifyToken(token);
        return Promise.reject();
    } catch (err) {
        return Promise.resolve();
    }
};

const checkForCorrectPassword = (candidatePassword, hash) =>
    bcrypt.compare(candidatePassword, hash);

const hashPassword = password => bcrypt.hash(password, 8);



module.exports = { signJWT, extractToken, verifyToken, isAuthenticated, isNotAuthenticated, checkForCorrectPassword, hashPassword }
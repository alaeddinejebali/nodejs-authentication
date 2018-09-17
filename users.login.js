const express = require('express');
const router = express.Router();

const config = require('config.json');
const jwt = require('jsonwebtoken');

router.post('/login', login);

module.exports = router;


async function fakeDbCheck({ username, password }) {
    if ( username === "admin" && password === "adminadmin" ) {
        const user = { id: 1, firstName: 'Ala Eddine', lastName: 'JEBALI' };
        const token = jwt.sign({ sub: user.id }, config.secret);
        return {user, token};
    }
}

function login(req, res, next) {
    fakeDbCheck(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Nom utilisateur et/ou mot de passe incorrecte!' }))
        .catch(err => next(err));
}
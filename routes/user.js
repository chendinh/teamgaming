var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var cors = require('cors');
router.use(cors());
const { getUserByName } = require('../users');

const MESSAGE_CODE_SUCCESS = 1;
const MESSAGE_CODE_ERROR = 0;
// Router: /user
function generateResponseMessage(messageCode, message, data) {
    return {
        messageCode: messageCode,
        message: message,
        data: data
    };
}

router.post('/check-name', jsonParser, (req, res) => {
    let body = req.body;
    let name = body.name;
    let isExist = false
    isExist = getUserByName(name)
    console.log('Check Exist Username: ' + name);

    if (isExist) {
        res.send(generateResponseMessage(MESSAGE_CODE_ERROR, 'This name was taken', {
            
        }));
    } else {
        res.send(generateResponseMessage(MESSAGE_CODE_SUCCESS, 'Success', {

        }));
    }
});

module.exports = router


const router = require('express').Router();
const userQueryController = require('../controller/userQuery');
const verifygoogleToken = require('./middleware/verifygoogleToken')
const agentService = require('../services/service');
const authController = require('../controller/authController');
const service = new agentService()
const conroller = new userQueryController(service)

router.post('/user/query', conroller.requestProcessing)
router.post('/auth/google',verifygoogleToken,authController)
module.exports = router;
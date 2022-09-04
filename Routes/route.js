const express = require('express')

const router = express.Router()

const routeController = require('../controllers/route.controller')

const obj = {
    1:"value",
    name: "Vikash"
}

router.get('/', routeController.getIndex)

router.get('/posts', routeController.getPost)

router.post('/post', routeController.postPosts)

module.exports = router









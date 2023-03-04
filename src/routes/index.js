const { Router } = require('express')
const routerUser = require('./routerUser')
const routerProject = require('./routerProject')
const routerComment = require('./routerComment')
const routerCategory = require('./routerCategory')
const mainRouter = Router()



mainRouter.use('/user', routerUser)
mainRouter.use('/project', routerProject)
mainRouter.use('/comment', routerComment)
mainRouter.use('/category', routerCategory)

module.exports = mainRouter
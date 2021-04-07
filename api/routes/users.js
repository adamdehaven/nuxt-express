import { users } from '../mock'

const { Router } = require('express')
const router = Router()

/* GET users listing. */
router.get('/users', async (req, res, next) => {
  try {
    res.json(users)
  } catch (error) {
    return next(error)
  }
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router

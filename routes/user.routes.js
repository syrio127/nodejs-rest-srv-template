const { Router } = require('express');
const { usersGet, userPut, userPost, userDelete } = require('../controllers/user.controllers');

const router = Router();

router.get('/', usersGet);

//* This route is expecting the "id" parameter in the req
router.put('/:id', userPut);
router.post('/', userPost);
router.delete('/', userDelete);


module.exports = router;
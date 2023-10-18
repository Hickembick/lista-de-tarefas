const {Router} = require('express');
const { getToDo, saveToDo, updateToDo,deleteToDo ,getToDoById,searchByPartialText } = require('../controllers/ToDoController');

const router = Router();

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)
router.get('/search-by-id/:id', getToDoById);
router.post('/search-by-text', searchByPartialText);


module.exports = router;
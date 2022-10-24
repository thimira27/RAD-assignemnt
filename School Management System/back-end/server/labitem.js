import express from 'express';
import { getLabItems,addLabItem, deleteLabItem, editLabItem,getLabItemByid} from '../controller/labitem-controller.js';

const router = express.Router();

router.get('/labitems', getLabItems);
router.post('/addLabItem', addLabItem);
router.delete('/:id', deleteLabItem);
router.put('/:id', editLabItem);
router.get('/labitems/:id', getLabItemByid);

export default router;
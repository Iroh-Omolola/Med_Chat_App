import express,{Router} from 'express';

import { signup, login } from '../controllers/auth.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
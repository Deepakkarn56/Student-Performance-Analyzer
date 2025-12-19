import { Router } from 'express';
import protect from '../middlewares/auth.middleware.js';
import { addStudent, getStudentDetails, getStudents, updateStudentData } from '../controllers/student.controller.js';

const router = Router();
router.post('/add', protect, addStudent);
router.get('/', protect, getStudents);




export default router;

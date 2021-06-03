import express, {Request, Response} from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router(); 

router.post('/api/users/signup', [
    body('email')
    .isEmail()
    .withMessage("Not a valid email."),
    body('password')
    .trim()
    .isLength({min:4, max:20})
    .withMessage('Password not correct.')
], (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.status(400).send(errors.array());
    }

    console.log("Without any error!")
    const { email, password } = req.body;
    res.send({});
});

export { router as signUpRouter };
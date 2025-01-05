import User from '../utils/db/UserSchema.js';
class UsersController {
    static async getUser(req, res) {
       res.send('from users')

    }

    static async registerUser(req, res) {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'All fields are required'
            });
        }
        try {
            const user = await User.findOne({ email })
            if (user) {
                return res.status(400).json({
                    message: 'User already exists'
                });
            }
            const newuser = await User.create({
                name,
                email,
                password
            });
            if (newuser) {
                return res.status(201).json({
                    _id: newuser._id,
                    name: newuser.name,
                    email: newuser.email,
                    password: newuser.password
                });
            }
        } catch (error) {
            return res.status(400).json({
                message: `${error.message}`

            });
        }
    }





    static async loginUser(req, res) {
        res.send('from login')
    }
}

export default UsersController

import User from '../utils/db/UserSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { ObjectId } from 'mongodb';

dotenv.config()
const Secret = process.env.JWTSECRET

class UsersController {
    static async getUser(req, res) {
        const { id } = req.payload
        const user = await User.findOne({ _id: new ObjectId(id)})
        return res.status(200).json({user})

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
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const newuser = await User.create({
                name,
                email,
                password: hashPassword,
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
        const { email, password } = req.body;
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(400).json({
                message: 'No account found, Kindly Signup'
            })
        }
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.status(400).json({
                message: 'Incorrect password'
            })
        }
        const payload = {
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            id: user._id,
            name: user.name,
            role: user.role

        }
        const token = await jwt.sign(payload, Secret, { algorithm: 'HS256' })
        return res.status(200).set('Authorization', `Bearer ${token}`).json({
            message: `${user.name} welcome back. Here is your token ${token}`
        })
          
    }

    static async logoutUser(req, res) {
        req.headers('Authorization') = null
        return res.status(200).json({
            message: 'You have successfully logged out'
        })
    }
}

export default UsersController

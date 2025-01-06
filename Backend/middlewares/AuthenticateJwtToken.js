import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config()

const Secret = process.env.JWTSECRET

async function authenticateToken(req, res, next) {
    const authheader = req.headers['authorization']
    const token = authheader && authheader.split(' ')[1]
    if (token === null) {
        res.status(401).json({
            message: 'Unauthorized Access'
        })
    }
    try {
        const payload = await jwt.verify(token, Secret, { algorithm: 'HS256' });
        req.payload = payload
    } catch (err) {
        res.status(403).json({
            message: 'expired token'
        })
    }
    
    next()
}

export default authenticateToken

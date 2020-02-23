const bcrypt = require('bcrypt')

const hashPass = async (password) => {
    try {
        const salt = await bcrypt.genSalt(12)
        return await bcrypt.hash(password, salt)
    } catch (error) {
        console.log('error', error)
    }
}

const comparePass = async (guess, digest) => {
    try {
        return await bcrypt.compare(guess, digest)
    } catch (error) {
        console.log('error', error)
    }
}

const requireLoginMid = (req, res, next) => {
    if (req.user) return next()
    res.status(401).json({
        payload: null, 
        msg: 'You need to be logged in to access this route',
        err: true,
    })
}

module.exports = {
    hashPass,
    comparePass,
    requireLoginMid
}
import jwt from 'jsonwebtoken'

export const generateToken = (user) => {

    // For creating JSON web token for particular user
    // Here jwt is taking 3 parameters to create token

    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_SECRET || 'somethingsecret',
    {
        expiresIn: '30d',
    });
}
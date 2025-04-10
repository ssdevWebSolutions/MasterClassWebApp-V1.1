import jwt from 'jsonwebtoken';

export function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.mailid,
    },
    process.env.JWT_SECRET,  // secret key from .env
    { expiresIn: '7d' }       // token expiry
  );
}

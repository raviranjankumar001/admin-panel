// backend/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

export const adminAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, 'shhhhhhhhhh');
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

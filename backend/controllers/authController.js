import jwt from 'jsonwebtoken';

export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  // 🔐 Static admin credentials
  const adminEmail = 'admin@e.com';
  const adminPassword = '123';

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ success: false, message: 'Invalid admin credentials' });
  }

  // ✅ Generate JWT token
  const token = jwt.sign({ role: 'admin', email }, "shhhhhhhhhh");

  res.json({
    success: true,
    token,
    message: 'Admin login successful',
  });
};

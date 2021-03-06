import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ erro: 'token not provide' });
  }
  const [, token] = authHeader.split(' ');
  try {
    const decoded = await promisify(jwt.verify)(token, authConig.secret);
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ erro: 'token invalid' });
  }
};

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "HIRohit";

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer <token>
  if (!token) {
    return res.status(401).json({
      message: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded token data to the request
    next();
  } catch (error) {
    res.status(403).json({
      message: "Invalid token",
    });
  }
};

module.exports = authenticate;

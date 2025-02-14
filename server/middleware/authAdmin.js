const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

module.exports = async function (req, res, next) {
	// get token from header
	const token = req.header("x-auth-token");

	// check if no token
	if (!token) {
		return res.status(401).json({ msg: "No token, authorization denied" });
	}

	try {
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		const thisUser = await User.findById(decoded.user.id);

		if (!thisUser.isAdmin) {
			return res.status(401).json({ msg: "User should be admin" });
		}
		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401).json({ msg: "Token is not Valid" });
	}
};

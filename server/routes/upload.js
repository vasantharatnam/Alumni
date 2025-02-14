const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const upload = require("../middleware/upload");

router.post("/multiple-upload", auth, async (req, res) => {
	try {
		await upload(req, res);
		console.log(req.files);
		if (req.files.length <= 0) {
			return res.send(`You must select at least 1 file.`);
		}
		return res.send(`Files has been uploaded.`);
	} catch (error) {
		console.log(error);
		if (error.code === "LIMIT_UNEXPECTED_FILE") {
			return res.send("Too many files to upload.");
		}
		return res.send(`Error when trying upload many files: ${error}`);
	}
});

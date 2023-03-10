const express = require("express");
const router = express.Router();
const { userController: controller } = require("./user.module");
const upload = require("../../middlewares/upload")

router.post("/", (req, res, next) => controller.postSignup(req, res, next));
router.post("/usercheck", (req, res, next) => controller.postUserCheck(req, res, next));
router.get("/me", (req, res, next) => controller.getMe(req, res, next));
router.put("/", (req, res, next) => controller.putProfile(req, res, next));

router.post("/single", upload.single("filename"), (req, res) => {
    res.send(req.file);
  });
router.post("/array", upload.array("filename"), (req, res) => {
    res.send(req.files);
  });

module.exports = router;

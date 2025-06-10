import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import {
  createReport,
  getAllReports,
  getReportById,
  updateReportStatus,
  deleteReport
} from "../controllers/reportController.js";

const router = express.Router();


const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error("Only image files are allowed"));
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: fileFilter,
});

// -------------------------
// Routes
// -------------------------

router.post("/", upload.array("supportingImages"), createReport);         
router.get("/", getAllReports);            
router.get("/:id", getReportById);         
router.patch("/:id/status", updateReportStatus); 
router.delete("/:id", deleteReport);       

export default router;
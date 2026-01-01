import e from "express";
import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "../client/public/uploads";
    fs.mkdir(path.resolve(uploadPath), { recursive: true }, (err) => {
      if (err) return cb(err);
      cb(null, uploadPath);
    });
  },

  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;

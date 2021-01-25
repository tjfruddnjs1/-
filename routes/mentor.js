const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentor');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

// upload 폴더 생성
try{
    fs.readdirSync('uploads');        
}catch(error){
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

// 파일 관리 
const upload = multer({
    storage: multer.diskStorage({
        destination(req,file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits : {fileSize : 5 * 1024 * 1024},
});

router.get('/', async (req, res, next) => {
    try {
      res.render('home/mentor');
    } catch (err) {
      console.error(err);
      next(err);
    }
});

router.post('/',  upload.single('image'), async(req, res, next) => {    
    const {username, gender, firm, department, career, field, email, intro, path} = req.body;
    try{
        const mentor = await Mentor.findOne({
            where : {
                username
            }
        });
        if(mentor){
            res.render('home/mentor', {flag : false})                        
        }
        await Mentor.create({
            username, gender, firm, department, career, field, email, intro, path
        });                
        res.render('home/mentor', {flag : true})                        
    }catch(err){
        console.error(err);
        return next(err);
    }
})

module.exports = router;
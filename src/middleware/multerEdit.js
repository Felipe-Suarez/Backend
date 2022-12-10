import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/profileImgs");
    },
    filename: function (req, file, cb) {
        let fileType = ''
        const position = file.mimetype.indexOf('/')
        for (let i = position + 1; i < file.mimetype.length; i++) {
            fileType += file.mimetype[i]
        }
        // cb(null, `${req.body.email}.${fileType}`);
        cb(null, `${req.user.image}`);
    },

});

const multerEdit = multer({ storage: storage });

export default multerEdit;
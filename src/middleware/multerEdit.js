import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/profileImgs");
    },
    filename: function (req, file, cb) {
        cb(null, `${req.user.image}`);
    },

});

const multerEdit = multer({ storage: storage });

export default multerEdit;
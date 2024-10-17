const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is the prodcuts route');
});

router.get('/kitten-mittens', (req, res) => {
    res.send({
        title: 'Kitten Mittens',
        description: "These mittens are a great way to quiet your cat's loud, heavy footsteps.",
        imgPath: 'img/kitten-mittens.png'
    });
});

router.get('/doggles', (req, res) => {
    res.send({
        title: 'Doggles',
        description: "If your dog has seasonal allergies or refuses to ride his or her motorcycle, we've got you covered. Comes in small, medium, and Marmaduke.",
        imgPath: 'img/doggles.png'
    });
});

router.get('/clown-shoes', (req, res) => {
    res.send({
        title: 'Clown Shoes',
        description: "Dozens of styles to choose from, but only one size (men's 29).",
        imgPath: 'img/clown-shoes.png'
    });
});

router.get('/nonfat-water', (req, res) => {
    res.send({
        title: 'Nonfat Water',
        description: "Just like Mom used to make, but without the fat. Now with less arsenic!",
        imgPath: 'img/nonfat-water.png'
    });
});

module.exports = router;
const express = require('express'); 
const router = express.Router();

router.get('/:id?', (req, res, next) => {
    res.status(200).send({
        mensagem: "ok, produtos get"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "ok, produtos post"
    });
})

router.put('/:id', (req, res, next) => {
    res.status(201).send({
        mensagem: "ok, produtos update"
    });
})

router.delete('/:id', (req, res, next) => {
    res.status(201).send({
        mensagem: "ok, produtos delete"
    });
})


module.exports = router;
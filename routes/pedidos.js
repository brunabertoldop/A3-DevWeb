const express = require('express'); 
const router = express.Router();

router.get('/:id?', (req, res, next) => {
    res.status(200).send({
        mensagem: "ok, pedidos get"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: "ok, pedidos post"
    });
})

router.put('/:id', (req, res, next) => {
    res.status(201).send({
        mensagem: "ok, pedidos update"
    });
})

router.delete('/:id', (req, res, next) => {
    res.status(201).send({
        mensagem: "ok, pedidos delete"
    });
})


module.exports = router;
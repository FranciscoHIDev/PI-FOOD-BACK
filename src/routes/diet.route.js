// const { Router } = require('express')
const { Diet } = require('../db')
const { getApiDiets } = require('../controllers/diet.controller')


const getAllDiets = async (req, res) => {
    try {
        const result = await Diet.findAll();
        if (result.length == 0) {
            const resultado = await getApiDiets()
            return res.json(resultado)
        }
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(400).json({ Error: "No se obtivieron los datos" })
    }
}

module.exports = {
    getAllDiets
}
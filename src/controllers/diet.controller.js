const axios = require('axios')
const { Diet } = require('../db')



const getApiDiets = async (req, res) => {
    try {
        const { data } = await axios("https://run.mocky.io/v3/9c1ecdba-b59f-4cd3-a496-27082e1eb9ef")
        // const { data } = await axios({
        //     method: 'get',
        //     url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=6032fcf8e8a04693a878e6b145158f6b&addRecipeInformation=true&number=100`,
        //     headers: { "Accept-Encoding": "null" }
        // })
        const diets = data.results.map((e) => e.diets);
        diets.flat().map(async (diet) => {
            await Diet.findOrCreate({
                where: {
                    name: diet
                }
            })
        })
        const result = await Diet.findAll()
        return result
    } catch (error) {
        console.log(error);
        res.status(400).send("No se encontraron las dietas")
    }
};



module.exports = {
    getApiDiets
}

const axios = require('axios')
const { Diet } = require('../db')



const getApiDiets = async (req, res) => {
    try {
        const { data } = await axios("https://run.mocky.io/v3/7e445a46-1b5f-49af-9ee5-a3d89d29b72f")
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

const axios = require('axios')


const getApiInfo = async () => {
    try {

         let dataInfo = await axios("https://run.mocky.io/v3/9c1ecdba-b59f-4cd3-a496-27082e1eb9ef")
        // let dataInfo = await axios({
        //     method: 'get',
        //     url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=6032fcf8e8a04693a878e6b145158f6b&addRecipeInformation=true&number=100`,
        //     headers: { "Accept-Encoding": "null" }
        // })

        dataAPI = dataInfo.data.results.map(e => {
            return {
                id: e.id,
                name: e.title,
                image: e.image,
                diets: e.diets.map(e => e),
                dishTypes: e.dishTypes,
                summary: e.summary,
                healthScore: e.healthScore,
                steps: e.analyzedInstructions[0]?.steps.map((step) => step)
            }
        })
        return dataAPI
    } catch (error) {
        console.log(error)

    }
};


module.exports = {
    getApiInfo,

}

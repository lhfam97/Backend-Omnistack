const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
    async index(req, res) {
        //buscar em um raio de 10 km
        //filtrar por tecnologias
        const { latitude, longitude, techs } = req.query;
        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });
        return res.status(200).json({ devs });
    }
};

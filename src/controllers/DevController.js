const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

// Controller Functions: index, show, store, update, destroy
module.exports = {
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },
    async store(req, res) {
        // console.log(req.body);
        const { github_username, techs, latitude, longitude } = req.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {
            const api_res = await axios.get(
                `https://api.github.com/users/${github_username}`
            );
            const techs_array = parseStringAsArray(techs);

            const location = {
                type: "Point",
                coordinates: [longitude, latitude]
            };
            console.log(api_res.data);
            const { name = login, avatar_url, bio } = api_res.data;
            dev = await Dev.create({
                name,
                github_username,
                avatar_url,
                bio,
                techs: techs_array,
                location
            });
        }

        return res.json(dev);
    }
};

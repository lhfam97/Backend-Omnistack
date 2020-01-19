const { Router } = require("express");
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");
const routes = Router();

routes.post("/devs", DevController.store);
routes.get("/devs", DevController.index);

routes.get("/search", SearchController.index);

routes.get("/", (request, response) => {
    console.log(request.query);
    return response.json({ message: "Hello Omnistack" });
});
routes.put("/users/:id", (req, res) => {
    console.log(req.params);
    return res.json({ Luique: "Gado demais" });
});

module.exports = routes;

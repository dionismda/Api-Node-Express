import { Router } from "express";

const categoriesRouter = Router();

categoriesRouter.post("/", (request, response) => {
    const {name, description} = request.body;

    return response.status(201).send();

})

export { categoriesRouter }
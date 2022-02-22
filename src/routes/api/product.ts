import { Router } from "express";
import product from "../../controller/product";
import auth from '../../middleware/authenticate_valid';
const routes = Router();

routes.route("/").get(product.index).post(auth,product.create)

routes.route("/:id").get(product.show);

export default routes;
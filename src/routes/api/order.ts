import { Router } from "express";
import order from '../../controller/order';
import authcheck from '../../middleware/authenticate_valid';
const routus = Router();

routus.route('/').post(order.create)
routus.route("/:id").get(authcheck,order.current_order);


export default routus;

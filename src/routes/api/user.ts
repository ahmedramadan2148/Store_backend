import { Router } from "express";
import User from "../../controller/user";
import auth from '../../middleware/authenticate_valid';
const routes =Router();

routes.route('/')
.get(auth,User.index)
.post(auth,User.createUser)
.patch(auth,User.update)

routes.route('/:id')
.get(auth,User.show)

.delete(auth,User.delete_user)

routes.route("/auth").post(User.auth_user);
export default routes;
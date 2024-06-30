import { Router } from "express";
import express from "express"
import { getall, update } from "../controller/controlller.mjs";

const routes = Router();

routes.use(express.json())

routes.route("/questions").get(getall);

routes.route("/updatequestions/:id").put(update);

export default routes;

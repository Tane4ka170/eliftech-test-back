import express from "express";
import ctrl from "../controllers/events.js";
import isValidId from "../../middlewares/isValidId.js";
import { isEmptyBody, validateBody } from "../../middlewares/index.js";
import { userRegister } from "../../models/event.js";

export const eventRoute = express.Router();

eventRoute.get("/", ctrl.getEvents);

eventRoute.post(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(userRegister),
  ctrl.addParticipants
);

eventRoute.get("/:id", isValidId, ctrl.getEventParticipants);

import express from "express";
import isValidId from "../../middlewares/isValidId.mjs";
import { isEmptyBody, validateBody } from "../../middlewares/index.mjs";
import { userRegister } from "../../models/event.mjs";
import ctrl from "../../controllers/events.mjs";

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

import { Router } from "express";
import PlantController from "../controllers/PlantControllers";

const plantRouter = Router();
const plantController = new PlantController();

plantRouter.get("/", (req, res) => {
  console.log("PlantRouter get");
  plantController.getAll(req, res);
});
plantRouter.get("/:id", (req, res) => {
  console.log("get id plantRouter avec id");
  plantController.getPlantById(req, res);
});

plantRouter.post("/", (req, res) => {
  console.log("post plantRouter");
  plantController.create(req, res);
});

plantRouter.put("/:id", (req, res) => {
  console.log("put plantRouter");
  plantController.update(req, res);
});

plantRouter.delete("/:id", (req, res) => {
  console.log("plantRouter");
  plantController.delete(req, res);
});

export default plantRouter;

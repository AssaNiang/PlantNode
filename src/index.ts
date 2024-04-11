import express from "express";
import cors from "cors";
import AppDataSource from "./data-source";
import plantRouter from "./routes/PlantRoutes";

//initialisation de orm
AppDataSource.initialize().then(() => {
  const app = express();
  app.use(cors()); //autorise tout monde
  app.use(express.json()); //on peut recuperer des infos dans un body en format json

  //   app.get("/", (req, res) => {
  //     res.send("Hello, world!");
  //   });

  app.use("/api/plants", plantRouter);
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});

import AppDataSource from "../data-source";
import { Plants } from "../entities/Plant";
import Plant from "../models/interfaces/Plant";


class PlantService{
    private plantRepository = AppDataSource.getRepository(Plants);

    async getAll(){
        console.log("PlantService");
        return this.plantRepository.find();
    }
    async getPlantById(id_plant:number){
        console.log("getPlantById");
        return this.plantRepository.findOneBy({ id: id_plant });
    }
    async create (plant:Plant){
        console.log(" one plant service ");
        const newPlant= this.plantRepository.create(plant);
        return this.plantRepository.save(newPlant);
    }
    async update(id: string, Plant: Plant) {
        console.log("update PlantService");
        return this.plantRepository.update(id, Plant);
      }
    
      async delete(id: string) {
        console.log("delete PlantService");
        return this.plantRepository.delete(id);
      }
}
export default PlantService;
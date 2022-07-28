import { IVehicle } from '../../../../models/example/models/vehicle';
import VehicleRepository from '../../../../models/example/repositories/firestore/vehicle';

class ListVehiclesController {
  public async execute(): Promise<Array<IVehicle>> {
    const vehicleRepository = new VehicleRepository();

    const vehicles = await vehicleRepository.findAll();
    const usersToJSON = vehicles.map(vehicle => vehicle.toJSON());

    return usersToJSON;
  }
}

export { ListVehiclesController };

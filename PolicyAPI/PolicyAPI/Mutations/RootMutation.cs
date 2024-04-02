using GraphQL;
using GraphQL.Types;
using PolicyAPI.Models;
using PolicyAPI.Queries;
using PolicyAPI.Repositories;

namespace PolicyAPI.Mutations
{
    public class RootMutation:ObjectGraphType
    {

        public RootMutation(IVehicleRepo vehicleRepo) {

            FieldAsync<VehicleGQLType>(
                Name = "AddVehicle",
                arguments: new QueryArguments(new QueryArgument<VehicleGQLInputType>
                {
                    Name = "vehicleInput"
                }),
                resolve: async context =>  await vehicleRepo.AddVehicle(
                       context.GetArgument<Vehicle>("vehicleInput"))               
                );
        
        
        }
    }
}

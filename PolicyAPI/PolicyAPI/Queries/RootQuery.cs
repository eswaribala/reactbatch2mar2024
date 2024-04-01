

using GraphQL;
using GraphQL.Types;
using PolicyAPI.Repositories;

namespace PolicyAPI.Queries
{
    public class RootQuery:ObjectGraphType
    {

        public RootQuery(IVehicleRepo vehicleRepo) {

            //all vehicles
            Field<ListGraphType<VehicleGQLType>>(
            "vehicles",
                    resolve: context => vehicleRepo.GetAllVehicles());



            //get vehicle by id
            Field<VehicleGQLType>(
               "vehicle",
               arguments: new QueryArguments(new
               QueryArgument<StringGraphType>
               { Name = "registrationNo" }),
               resolve: context => vehicleRepo
               .GetVehicleById(context.GetArgument<string>("registrationNo"))

               );

        }

    }
}

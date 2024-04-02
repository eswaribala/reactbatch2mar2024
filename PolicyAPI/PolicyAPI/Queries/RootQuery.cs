

using GraphQL;
using GraphQL.Types;
using PolicyAPI.Repositories;

namespace PolicyAPI.Queries
{
    public class RootQuery:ObjectGraphType
    {

        public RootQuery(IVehicleRepo vehicleRepo,
            IPolicyHolderRepo policyHolderRepo) {

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


            Field<ListGraphType<PolicyHolderGQLType>>(
                Name="policyholders",
                resolve: context=>policyHolderRepo.GetAllPolicyHolders()
                
                );

            Field<PolicyHolderGQLType>(
                Name = "policyholder",
                arguments: new QueryArguments(new
                QueryArgument<StringGraphType>
                {
                    Name = "adharCardNo"
                }),
                resolve: context => policyHolderRepo
                .GetPolicyHolderById(context.GetArgument<string>("adharCardNo")

                ));



        }

    }
}

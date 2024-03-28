using PolicyAPI.Models;

namespace PolicyAPI.Repositories
{
    public interface IPolicyRepo
    {
        Task<Policy> AddPolicy(Policy policy);
        Task<Policy> DeletePolicy(long PolicyNo);

        Task<Policy> GetPolicyByPolicyNo(long PolicyNo);

        Task<IEnumerable<Policy>> GetAllPolicies();


      


    }
}

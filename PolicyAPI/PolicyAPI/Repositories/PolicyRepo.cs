using PolicyAPI.Contexts;
using PolicyAPI.Models;

namespace PolicyAPI.Repositories
{
    public class PolicyRepo : IPolicyRepo
    {
        private PolicyContext _dbContext;
        public Task<Policy> AddPolicy(Policy policy)
        {
            throw new NotImplementedException();
        }

        public Task<Policy> DeletePolicy(long PolicyNo)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Policy>> GetAllPolicies()
        {
            throw new NotImplementedException();
        }

        public Task<Policy> GetPolicyByPolicyNo(long PolicyNo)
        {
            throw new NotImplementedException();
        }
    }
}

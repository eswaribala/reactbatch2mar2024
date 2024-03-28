using PolicyAPI.Contexts;
using PolicyAPI.Models;

namespace PolicyAPI.Repositories
{
    public class PolicyHolderRepo : IPolicyHolderRepo
    {
        private PolicyContext _dbContext;

        public Task<PolicyHolder> AddPolicyHolder(PolicyHolder policyHolder)
        {
            throw new NotImplementedException();
        }

        public Task<PolicyHolder> DeletePolicyHolder(string adharCardNo)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<PolicyHolder>> GetAllPolicyHolders()
        {
            throw new NotImplementedException();
        }

        public Task<PolicyHolder> GetPolicyHolderById(string adharCardNo)
        {
            throw new NotImplementedException();
        }

        public Task<PolicyHolder> UpdatePolicyHolderData(string adharCardNo, string email, string phone)
        {
            throw new NotImplementedException();
        }
    }
}

using Amazon.Auth.AccessControlPolicy;

namespace ClaimAPI.Repositories
{
    public interface IPolicyRepo
    {

        Task<Policy> AddPolicy(Policy policy);
    }
}

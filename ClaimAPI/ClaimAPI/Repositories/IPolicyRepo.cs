using Amazon.Auth.AccessControlPolicy;

namespace ClaimAPI.Repositories
{
    public interface IPolicyRepo
    {

        void AddPolicy(Policy policy);
    }
}

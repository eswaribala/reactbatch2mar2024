using Amazon.Auth.AccessControlPolicy;
using MongoDB.Driver;

namespace ClaimAPI.Repositories
{
    public class PolicyRepo : IPolicyRepo
    {
        private IConfiguration _configuration;
        private IMongoCollection<Policy> _MongoCollection;

        public PolicyRepo(IConfiguration configuration)
        {
            _configuration = configuration;
            var mongoClient = new MongoClient(_configuration["ConnectionString"]);

            var database = mongoClient.GetDatabase(_configuration["DatabaseName"]);

            _MongoCollection = database.GetCollection<Policy>(
             _configuration["PoliciesCollectionName"]);

        }
        public async void AddPolicy(Policy policy)
        {
           await _MongoCollection.InsertOneAsync(policy);
        }
    }
}

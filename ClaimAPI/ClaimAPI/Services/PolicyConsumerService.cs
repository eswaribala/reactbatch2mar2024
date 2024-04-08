
using ClaimAPI.Repositories;
using Confluent.Kafka;

namespace ClaimAPI.Services
{
    public class PolicyConsumerService : BackgroundService
    {
        private IPolicyRepo _policyRepo;
        private IConfiguration _configuration;

        public PolicyConsumerService(IPoicyRepo policyRepo,
            IConfiguration configuration)
        {
            _configuration = configuration;
            _policyRepo = policyRepo;

        }
        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var groupId = _configuration["GroupId"];
            var bootStrapServer = _configuration["BootstrapServer"];
            var topicName = _configuration["TopicName"];

        }

        public Task<string> ConsumePolicyData(string TopicName, 
            string Group_Id, string BootstarpServer)
        {

            var consumerConfig = new ConsumerConfig
            {
                BootstrapServers=BootstarpServer,
                GroupId=Group_Id,
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

        }


    }
}

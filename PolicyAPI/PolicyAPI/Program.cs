using Microsoft.Data.SqlClient;
using PolicyAPI.Configurations;
using Steeltoe.Extensions.Configuration.ConfigServer;

var builder = WebApplication.CreateBuilder(args);
//step to add config server
builder.Configuration.AddConfigServer();
ConfigurationManager configuration = builder.Configuration;
var Url = configuration["url"].ToString();
var RootKey = configuration["rootkey"].ToString();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle


Dictionary<string,Object> result = new VaultConfiguration(configuration)
    .GetSecrets(RootKey,Url).Result;
SqlConnectionStringBuilder providerCs 
    = new SqlConnectionStringBuilder();
providerCs.UserID = result["username"].ToString();
providerCs.Password = result["password"].ToString();
providerCs.DataSource = configuration["trainerservername"];


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

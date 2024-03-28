using Microsoft.Data.SqlClient;
using PolicyAPI.Configurations;

var builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
Dictionary<string,Object> result = new VaultConfiguration(configuration)
    .GetSecrets().Result;
SqlConnectionStringBuilder providerCs 
    = new SqlConnectionStringBuilder();
providerCs.UserID = result["username"].ToString();
providerCs.Password = result["password"].ToString();



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

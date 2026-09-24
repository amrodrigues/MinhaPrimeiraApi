using Microsoft.EntityFrameworkCore;
using MinhaPrimeira_APi.Data;

var builder = WebApplication.CreateBuilder(args);

// 1. Configurar o SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// 2. Configurar o CORS para permitir o Angular (localhost:4200)
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 3. Ativar o CORS antes dos mapeamentos
app.UseCors("PermitirAngular");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
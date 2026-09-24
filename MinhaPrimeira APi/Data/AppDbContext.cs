using Microsoft.EntityFrameworkCore;
using MinhaPrimeira_APi.Models;
using System.Collections.Generic;

namespace MinhaPrimeira_APi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Produto> Produtos { get; set; }
    }
}

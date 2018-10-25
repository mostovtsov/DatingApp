using DatingApp.APP.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.APP.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Value> Values { get; set; }
    }
}
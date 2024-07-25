using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using model.Entities;

namespace model.Context
{
    public class SurveyDBContext : DbContext
    {
        public DbSet<Survey> Surveys { get; set; }
        public DbSet<Section> Sections { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<TextQuestion> TextQuestions { get; set; }
        public DbSet<RatingQuestion> RatingQuestions { get; set; }
        public DbSet<SelectQuestion> SelectQuestions { get; set; }
        public DbSet<Option> Options { get; set; }

        public SurveyDBContext(DbContextOptions<SurveyDBContext> options) : base(options) { }
    }
}

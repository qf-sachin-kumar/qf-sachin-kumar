using Microsoft.EntityFrameworkCore;
using model.Context;
using model.Entities;
using repository.Interfaces;

namespace repository.Repositories
{
    public class SurveyRepository : ISurveyRepository
    {
        private readonly SurveyDBContext _context;

        public SurveyRepository(SurveyDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Survey>> GetAllSurveysAsync()
        {
            return await _context.Surveys.Include(s => s.Sections).ToListAsync();
        }

        public async Task<Survey> GetSurveyByIdAsync(int id)
        {
            return await _context.Surveys.Include(s => s.Sections)
                                         .FirstOrDefaultAsync(s => s.Id == id);
        }

        public async Task<Survey> CreateSurveyAsync(Survey survey)
        {
            _context.Surveys.Add(survey);
            await _context.SaveChangesAsync();
            return survey;
        }

        public async Task<Survey> UpdateSurveyAsync(Survey survey)
        {
            _context.Entry(survey).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return survey;
        }

        public async Task DeleteSurveyAsync(int id)
        {
            var survey = await _context.Surveys.FindAsync(id);
            if (survey != null)
            {
                _context.Surveys.Remove(survey);
                await _context.SaveChangesAsync();
            }
        }
    }

}

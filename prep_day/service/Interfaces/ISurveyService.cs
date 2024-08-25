
using model.Entities;

namespace service.Interfaces
{
    public interface ISurveyService
    {
        Task<IEnumerable<Survey>> GetAllSurveysAsync();
        Task<Survey> GetSurveyByIdAsync(int id);
        Task<Survey> CreateSurveyAsync(Survey survey);
        Task<Survey> UpdateSurveyAsync(Survey survey);
        Task DeleteSurveyAsync(int id);
    }
}

using model.Entities;

namespace repository.Interfaces
{
    public interface ISurveyRepository
    {
        Task<IEnumerable<Survey>> GetAllSurveysAsync();
        Task<Survey> GetSurveyByIdAsync(int id);
        Task<Survey> CreateSurveyAsync(Survey survey);
        Task<Survey> UpdateSurveyAsync(Survey survey);
        Task DeleteSurveyAsync(int id);
    }
}

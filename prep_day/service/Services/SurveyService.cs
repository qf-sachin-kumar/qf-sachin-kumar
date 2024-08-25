using model.Entities;
using repository.Interfaces;
using service.Interfaces;

namespace service.Services
{
    public class SurveyService : ISurveyService
    {
        private readonly ISurveyRepository _surveyRepository;

        public SurveyService(ISurveyRepository surveyRepository)
        {
            _surveyRepository = surveyRepository;
        }

        public async Task<IEnumerable<Survey>> GetAllSurveysAsync()
        {
            return await _surveyRepository.GetAllSurveysAsync();
        }

        public async Task<Survey> GetSurveyByIdAsync(int id)
        {
            return await _surveyRepository.GetSurveyByIdAsync(id);
        }

        public async Task<Survey> CreateSurveyAsync(Survey survey)
        {
            return await _surveyRepository.CreateSurveyAsync(survey);
        }

        public async Task<Survey> UpdateSurveyAsync(Survey survey)
        {
            return await _surveyRepository.UpdateSurveyAsync(survey);
        }

        public async Task DeleteSurveyAsync(int id)
        {
            await _surveyRepository.DeleteSurveyAsync(id);
        }
    }

}

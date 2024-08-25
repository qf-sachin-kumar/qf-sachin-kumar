using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using model.Entities;
using service.Interfaces;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SurveyController : Controller
    {
        private readonly ISurveyService _surveyService;

        public SurveyController(ISurveyService surveyService)
        {
            _surveyService = surveyService;
        }

        // GET: api/surveys
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Survey>>> GetSurveys()
        {
            var surveys = await _surveyService.GetAllSurveysAsync();
            return Ok(surveys);
        }

        // GET: api/surveys/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Survey>> GetSurvey(int id)
        {
            var survey = await _surveyService.GetSurveyByIdAsync(id);

            if (survey == null)
            {
                return NotFound();
            }

            return Ok(survey);
        }

        // POST: api/surveys
        [HttpPost]
        public async Task<ActionResult<Survey>> PostSurvey(Survey survey)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdSurvey = await _surveyService.CreateSurveyAsync(survey);

            return CreatedAtAction(nameof(GetSurvey), new { id = createdSurvey.Id }, createdSurvey);
        }

        // PUT: api/surveys/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSurvey(int id, Survey survey)
        {
            if (id != survey.Id)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                await _surveyService.UpdateSurveyAsync(survey);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (await _surveyService.GetSurveyByIdAsync(id) == null)
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/surveys/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSurvey(int id)
        {
            var survey = await _surveyService.GetSurveyByIdAsync(id);
            if (survey == null)
            {
                return NotFound();
            }

            await _surveyService.DeleteSurveyAsync(id);

            return NoContent();
        }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace model.Entities
{
    public class Section
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(200)]
        public string Title { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        [Required]
        [ForeignKey("Survey")]
        public int SurveyId { get; set; }
        public Survey Survey { get; set; }

        public ICollection<Question> Questions { get; set; }
    }
}

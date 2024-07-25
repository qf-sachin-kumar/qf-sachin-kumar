using model.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace model.Entities
{
    public abstract class Question
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(250)]
        public string Title { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        [Required]
        public QuestionType Type { get; set; }

        [Required]
        [ForeignKey("Section")]
        public int SectionId { get; set; }
        public Section Section { get; set; }
    }
}

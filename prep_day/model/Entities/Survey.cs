using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace model.Entities
{
    public class Survey
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(250)]
        public string Title { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        public DateTime StartDate { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        public DateTime EndDate { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        public DateTime ModifiedOn { get; set; }

        public bool IsPublished { get; set; }

        [Required]
        [StringLength(50)]
        public string Owner { get; set; }

        public ICollection<Section> Sections { get; set; }
    }
}

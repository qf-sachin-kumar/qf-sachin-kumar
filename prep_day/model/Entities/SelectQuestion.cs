using System.ComponentModel.DataAnnotations;

namespace model.Entities
{
    // Select question model
    public class SelectQuestion : Question
    {
        [Required]
        [StringLength(20)]
        public string View { get; set; } // e.g., "dropdown", "checkbox", "radio", "ranking"

        public ICollection<Option> Options { get; set; }
    }
}

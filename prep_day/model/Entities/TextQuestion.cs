using System.ComponentModel.DataAnnotations;

namespace model.Entities
{
    // Text question model
    public class TextQuestion : Question
    {
        [Required]
        [StringLength(20)]
        public string InputType { get; set; } // e.g., "text", "date", "file"
    }
}

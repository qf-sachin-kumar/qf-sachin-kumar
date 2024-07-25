using System.ComponentModel.DataAnnotations;

namespace model.Entities
{
    // Text question model
    public class RatingQuestion : Question
    {
        [Required]
        public int Min { get; set; }

        [Required]
        public int Max { get; set; }
    }
}

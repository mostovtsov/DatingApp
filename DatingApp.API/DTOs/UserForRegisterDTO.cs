using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDTO
    {
        [Required]
        public string Username { get; set;}
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 an 8 charachters")]
        public string Password { get; set;}
    }
}
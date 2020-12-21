using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UserManagementAPI.Models
{
    public class UserDetail
    {
        [Key]
        public int UserDetailId { get; set; }
        [Column(TypeName ="nvarchar(40)")]
        public string FirstName { get; set; }
        [Column(TypeName = "nvarchar(40)")]
        public string LastName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Phone { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string Address { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string Gender { get; set; }
        [Column(TypeName = "nvarchar(3)")]
        public string Active { get; set; }
    }
}

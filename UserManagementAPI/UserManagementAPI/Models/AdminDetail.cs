using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UserManagementAPI.Models
{
    public class AdminDetail
    {
        [Key]
        public int AdminId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string AdminEmail { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string AdminPassword { get; set; }
       
    }
}

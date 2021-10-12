using System;
using System.Collections.Generic;

#nullable disable

namespace Pizza.Models
{
    public partial class OrderInfo
    {
        public int OrderId { get; set; }
        public string PizzaType { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Adress { get; set; }
        public string Options { get; set; }
    }
}

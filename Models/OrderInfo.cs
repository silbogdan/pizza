using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Pizza.Models
{
    public partial class OrderInfo
    {
        public string OrderId { get; set; }
        public string PizzaType { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string DeliveryAddress { get; set; }
        public string Options { get; set; }
    }
}

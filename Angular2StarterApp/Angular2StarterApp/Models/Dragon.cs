using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2StarterApp.Models
{
    public class Dragon
    {
        public int id { get; set; }
        public string name { get; set; }
        public string imageUrl { get; set; }
        public string skill { get; set; }
        public string details { get; set; }
        public string[] abilites { get; set; }

    }
}
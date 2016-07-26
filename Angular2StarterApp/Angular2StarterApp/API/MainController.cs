using Angular2StarterApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular2StarterApp.API
{
    public class MainController : ApiController
    {

        [HttpGet]
        [Route("getDragons")]
        public HttpResponseMessage GetDragons(HttpRequestMessage request)
        {
            List<Dragon> lst = new List<Dragon>
            {
                new Dragon
                {
                    id = 1, name = "Axe", details = "dragon 1 details",
                    imageUrl = "http://www.toptenbestin.com/wp-content/uploads/2015/06/axe-wallpaper-1.jpg", abilites = new string[] { "Fire", "Freeze" }
                },
                new Dragon
                {
                    id = 1, name = "Razor", details = "dragon 2 details",
                    imageUrl = "http://www.toptenbestin.com/wp-content/uploads/2015/06/axe-wallpaper-1.jpg", abilites = new string[] { "Fire", "Freeze" }
                },
            };
            List<Dragon> data = lst;
            return request.CreateResponse<List<Dragon>>(HttpStatusCode.OK, data);
        }

        [HttpPost]
        [Route("addDragon")]
        public HttpResponseMessage AddDragon(Dragon propInfo)
        {

            propInfo.id = 56;

            var result = propInfo;

            return Request.CreateResponse<Dragon>(HttpStatusCode.OK, result);
        }
    }
}

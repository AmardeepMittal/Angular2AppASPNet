"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var dragons = [
            {
                id: 1, name: 'Axe',
                imageUrl: 'http://www.toptenbestin.com/wp-content/uploads/2015/06/axe-wallpaper-1.jpg',
                details: 'He is the red animal who can kill you if you piss him off',
                abilites: ["Fire Breath", "Teleportation"]
            },
            {
                id: 2, name: 'Razor',
                imageUrl: 'http://www.toptenbestin.com/wp-content/uploads/2015/06/axe-wallpaper-1.jpg',
                details: 'If you dont want to get electrified. Stay away from him !',
                abilites: ["Electirc Shock", "Razor Blade"]
            },
        ];
        return { dragons: dragons };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
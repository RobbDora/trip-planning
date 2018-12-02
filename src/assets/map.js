
    var map, searchManager;
    function GetMap() {
      map = new Microsoft.Maps.Map('#myMap', {});
      Microsoft.Maps.loadModule(['Microsoft.Maps.AutoSuggest', 'Microsoft.Maps.Search'], function () {
        var manager = new Microsoft.Maps.AutosuggestManager({ map: map });
        manager.attachAutosuggest('#searchBox', '#searchBoxContainer', suggestionSelected);
        searchManager = new Microsoft.Maps.Search.SearchManager(map);
      });
    }
    function suggestionSelected(result) {
      //Remove previously results from the map.
      map.entities.clear();
      //Show the suggestion as a pushpin and center map over it.
      var pin = new Microsoft.Maps.Pushpin(result.location);
      map.entities.push(pin);
      map.setView({ bounds: result.bestView });
    }
   

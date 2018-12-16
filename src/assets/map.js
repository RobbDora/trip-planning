
var map, searchManager, dataLayer;

var sdsDataSourceUrl = 'https://spatial.virtualearth.net/REST/v1/data/f22876ec257b474b82fe2ffcb8393150/NavteqNA/NavteqPOIs';

function GetMap() {
    map = new Microsoft.Maps.Map('#myMap', {});

    dataLayer = new Microsoft.Maps.Layer();

    map.layers.insert(dataLayer);

    // add click event to show infobox for hotels
    Microsoft.Maps.Events.addHandler(dataLayer, 'click', hotelClicked);
    infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
      visible: false
    });
    infobox.setMap(map);

    Microsoft.Maps.loadModule(['Microsoft.Maps.AutoSuggest', 'Microsoft.Maps.Search'], function () {
       var manager = new Microsoft.Maps.AutosuggestManager({ map: map });
       manager.attachAutosuggest('#searchBox', '#searchBoxContainer', suggestionSelected);
       searchManager = new Microsoft.Maps.Search.SearchManager(map);
    });

    Microsoft.Maps.loadModule('Microsoft.Maps.SpatialDataService', function () { 
    });
}

function suggestionSelected(result) {
      // show pin for the selected suggestion
      var pin = new Microsoft.Maps.Pushpin(result.location);
      map.entities.push(pin);
      map.setView({ bounds: result.bestView });
}

function showHotels() {

  var queryOptions = {
    queryUrl: sdsDataSourceUrl,
    spatialFilter: {
      spatialFilterType: 'nearby',
      location: map.getCenter(),
      radius: 25
    },
    // filter for hotels
    filter: new Microsoft.Maps.SpatialDataService.Filter('EntityTypeID', 'eq', 7011)
  };
    
    // show result
  Microsoft.Maps.SpatialDataService.QueryAPIManager.search(queryOptions, map, function (data) {
    dataLayer.add(data);
  });
}

function hotelClicked(data) {

  // display hotel infobox
  if (data.primitive.metadata) {
    infobox.setOptions({
      location: data.primitive.getLocation(),
      title: data.primitive.metadata.Name,
      visible: true
    });
  }
}

   

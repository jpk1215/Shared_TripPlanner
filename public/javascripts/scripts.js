      var map;

      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(40.725, -73.99),
          zoom: 13
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
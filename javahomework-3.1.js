<script type="text/javascript">
    var currentValue = 100;
    var targetValue = 1500;
// Should use var to name variables currentValue and targetValue 
    function count()
    {
        if (currentValue > targetValue) 
        {
        currentValue -= 1
        } 
        
        else if (currentValue < targetValue) 
        {
            currentValue += 1
        } 
        
        document.getElementById('myDiv').innerHTML = 'Total wordcount:'+ currentValue.toString();
        var changeTime = 20;
        
        if (Math.abs(currentValue - targetValue) < 980) 
        {
            changeTime = 1000 - Math.abs(currentValue - targetValue);
        }
        setTimeout(count,changeTime/2);
    }
count()
// Using the almond style for brackets could make the code cleaner
</script> 

var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;

function initialize() {
    document.upload.lat.value = geoip_latitude();
    document.upload.lng.value = geoip_longitude();
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(geoip_latitude(), geoip_longitude());
    var myOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: 'roadmap'
        }
        map = new google.maps.Map(document.getElementById("gmap"), myOptions);
    //var ctaLayer = new google.maps.KmlLayer('http://www.koolbusiness.com/list.kml');
    //ctaLayer.setMap(map);
    google.maps.event.addListener(map, "click", gAdd);

    geocoder.geocode({
        'latLng': latlng
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            document.getElementById("message").innerHTML = results[5].formatted_address;
            document.upload.place.value = results[5].formatted_address;
        } else {

        }
    });

    if (navigator.geolocation) {

        browserSupportFlag = true;
        navigator.geolocation.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var latlng = initialLocation
                geocoder.geocode({
                    'latLng': latlng
                }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            marker = new google.maps.Marker({
                                position: latlng,
                                map: map
                            });
                            infowindow.setContent('<a href="/li?lat=' + latlng.lat() + '&lon=' + latlng.lng() + '">' + results[1].formatted_address + '</a>');
                            infowindow.open(map, marker);
                            document.upload.lat.value = latlng.lat();
                            document.upload.lng.value = latlng.lng();
                            document.upload.place.value = results[5].formatted_address

                        } else {
                            alert("No results found");
                        }
                    } else {
                        alert("Geocoder failed due to: " + status);
                    }
                });

        }, function () {
            handleNoGeolocation(browserSupportFlag);
        });
    } else if (google.gears) {
        // Try Google Gears Geolocation
        browserSupportFlag = true;
        var geo = google.gears.factory.create('beta.geolocation');
        geo.getCurrentPosition(function (position) {
            initialLocation = new google.maps.LatLng(position.latitude, position.longitude);
            var latlng = initialLocation
                geocoder.geocode({
                    'latLng': latlng
                }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            marker = new google.maps.Marker({
                                position: latlng,
                                map: map
                            });
                            infowindow.setContent('<a href="/li?lat=' + latlng.lat() + '&lon=' + latlng.lng() + '">' + results[1].formatted_address + '</a>');
                            infowindow.open(map, marker);
                            document.upload.lat.value = latlng.lat();
                            document.upload.lng.value = latlng.lng();;
                            document.upload.place.value = results[5].formatted_address;

                        } else {
                            alert("No results found");
                        }
                    } else {
                        alert("Geocoder failed due to: " + status);
                    }
                });

        }, function () {
            handleNoGeolocation(browserSupportFlag);
        });
    } else {
        // Browser doesn't support Geolocation
        browserSupportFlag = false;
        handleNoGeolocation(browserSupportFlag);
    }

}

function gAdd(ev) {
    marker.setMap(null)
    var latlng = new google.maps.LatLng(ev.latLng.lat(), ev.latLng.lng());

    geocoder.geocode({
        'latLng': latlng
    }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            document.getElementById("message").innerHTML = results[1].formatted_address;
            document.upload.place.value = results[5].formatted_address
            document.upload.lat.value = latlng.lat();
            document.upload.lng.value = latlng.lng();
            marker = new google.maps.Marker({
                position: latlng,
                draggable: true,
                animation: google.maps.Animation.DROP,
                map: map
            });
            google.maps.event.addListener(marker, 'click', toggleBounce);
            infowindow.setContent('<a href="/li?lat=' + latlng.lat() + '&lon=' + latlng.lng() + '">' + results[1].formatted_address + '</a>');
            infowindow.open(map, marker);

        } else {

        }
    });

}

function toggleBounce() {
    if (marker.getAnimation() != null) {
        alert("test");
        marker.setAnimation(null);

    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);

    }
}
'use strict';

/*jshint -W117 */
/*jshint globalstrict: true*/
/* jasmine specs for directives go here */

describe('Directive: leaflet', function() {
    var $compile = null, $rootScope = null, leafletData = null;

    beforeEach(module('leaflet-directive'));
    beforeEach(inject(function(_$compile_, _$rootScope_, _leafletData_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        leafletData = _leafletData_;
    }));

    // Markers
    it('should create markers on the map', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02
            },
            madrid: {
                lat: 2.02,
                lng: 4.04
            }
        };
        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(leafletMarkers.paris.getLatLng().lat).toBeCloseTo(0.966);
        expect(leafletMarkers.paris.getLatLng().lng).toBeCloseTo(2.02);
        expect(leafletMarkers.madrid.getLatLng().lat).toBeCloseTo(2.02);
        expect(leafletMarkers.madrid.getLatLng().lng).toBeCloseTo(4.04);
    });

    it('should detect errors in lat-lng (undefined lat) when marker is updated', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02
            },
            madrid: {
                lat: 2.02,
                lng: 4.04
            }
        };
        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(true);
        delete markers.madrid.lat;
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
    });

    it('should detect errors in lat-lng (null lat) when marker is updated', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02
            },
            madrid: {
                lat: 2.02,
                lng: 4.04
            }
        };
        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(true);
        markers.madrid.lat = null;
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
    });

    it('should detect errors in lat-lng (lat is NaN) when marker is updated', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02
            },
            madrid: {
                lat: 2.02,
                lng: 4.04
            }
        };
        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(true);
        markers.madrid.lat = "aak";
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
    });

    it('should detect errors in lat-lng (lat not a number) when marker is updated', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02
            },
            madrid: {
                lat: 2.02,
                lng: 4.04
            }
        };
        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(true);
        markers.madrid.lat = "not a number :P";
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
    });

    it('should detect errors in lat-lng (undefined lng) when marker is updated', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02
            },
            madrid: {
                lat: 2.02,
                lng: 4.04
            }
        };
        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(true);
        delete markers.madrid.lng;
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
    });

    it('should detect errors in lat-lng (null lng) when marker is updated', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02
            },
            madrid: {
                lat: 2.02,
                lng: 4.04
            }
        };
        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(true);
        markers.madrid.lng = null;
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
    });

    it('should detect errors in lat-lng (lng is NaN) when marker is updated', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02
            },
            madrid: {
                lat: 2.02,
                lng: 4.04
            }
        };
        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(true);
        markers.madrid.lng = "kk";
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
    });

    it('should detect errors in lat-lng (lng not a number) when marker is updated', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02
            },
            madrid: {
                lat: 2.02,
                lng: 4.04
            }
        };
        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(true);
        markers.madrid.lng = "not a number :P";
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
    });

    it('should detect errors in lat-lng (lng not a number) when marker is updated in a layer group', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02,
                layer: 'cars'
            },
            madrid: {
                lat: 2.02,
                lng: 4.04,
                layer: 'trucks'
            }
        };
        var layers = {
            baselayers: {
                osm: {
                    name: 'OpenStreetMap',
                    type: 'xyz',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    layerOptions: {
                        subdomains: ['a', 'b', 'c'],
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        continuousWorld: true
                    }
                }
            },
            overlays: {
                cars: {
                    name: 'cars',
                    type: 'group',
                    visible: true
                },
                trucks: {
                    name: 'trucks',
                    type: 'group',
                    visible: false
                }
            }
        };
        angular.extend($rootScope, { markers: markers, layers: layers });
        var element = angular.element('<leaflet markers="markers" layers="layers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        var overlays = leafletData.getLayers().overlays;
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false); // Layer is hidden
        expect(overlays.trucks.hasLayer(leafletMarkers.madrid)).toBe(true);
        markers.madrid.lng = "not a number :P";
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
        expect(overlays.trucks.hasLayer(leafletMarkers.madrid)).toBe(false);
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.paris)).toBe(true); // Layer is shown
        expect(overlays.cars.hasLayer(leafletMarkers.paris)).toBe(true);
        markers.paris.lat = "not a number :P";
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.paris)).toBe(false);
        expect(overlays.cars.hasLayer(leafletMarkers.paris)).toBe(false);
    });

    it('should detect errors in lat-lng (lng not a number) when marker is updated in a layer markercluster', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02,
                layer: 'cars'
            },
            madrid: {
                lat: 2.02,
                lng: 4.04,
                layer: 'trucks'
            }
        };
        var layers = {
            baselayers: {
                osm: {
                    name: 'OpenStreetMap',
                    type: 'xyz',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    layerOptions: {
                        subdomains: ['a', 'b', 'c'],
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        continuousWorld: true
                    }
                }
            },
            overlays: {
                cars: {
                    name: 'cars',
                    type: 'markercluster',
                    visible: true
                },
                trucks: {
                    name: 'trucks',
                    type: 'markercluster',
                    visible: false
                }
            }
        };
        angular.extend($rootScope, { markers: markers, layers: layers });
        var element = angular.element('<leaflet markers="markers" layers="layers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        var overlays = leafletData.getLayers().overlays;
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false); // Layer is markercluster
        expect(overlays.trucks.hasLayer(leafletMarkers.madrid)).toBe(true);
        markers.madrid.lng = "not a number :P";
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
        expect(overlays.trucks.hasLayer(leafletMarkers.madrid)).toBe(false);
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.paris)).toBe(false); // Layer is markercluster
        expect(overlays.cars.hasLayer(leafletMarkers.paris)).toBe(true);
        markers.paris.lat = "not a number :P";
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.paris)).toBe(false);
        expect(overlays.cars.hasLayer(leafletMarkers.paris)).toBe(false);
    });

    it('should update lat-lng when marker is updated', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02
            },
            madrid: {
                lat: 2.02,
                lng: 4.04
            }
        };
        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(leafletMarkers.paris.getLatLng().lat).toBeCloseTo(0.966);
        expect(leafletMarkers.paris.getLatLng().lng).toBeCloseTo(2.02);
        expect(leafletMarkers.madrid.getLatLng().lat).toBeCloseTo(2.02);
        expect(leafletMarkers.madrid.getLatLng().lng).toBeCloseTo(4.04);
        markers.madrid.lng = 1.23;
        markers.madrid.lat = 4.56;
        markers.paris.lng = 7.89;
        markers.paris.lat = 0.98;
        $rootScope.$digest();
        expect(leafletMarkers.paris.getLatLng().lat).toBeCloseTo(0.98);
        expect(leafletMarkers.paris.getLatLng().lng).toBeCloseTo(7.89);
        expect(leafletMarkers.madrid.getLatLng().lat).toBeCloseTo(4.56);
        expect(leafletMarkers.madrid.getLatLng().lng).toBeCloseTo(1.23);
    });

    it('should update lat-lng when marker is updated in a layer markercluster', function() {
        // This case is tested because in a marker cluster the marker has to be removed from the layer
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02,
                layer: 'cars'
            },
            madrid: {
                lat: 2.02,
                lng: 4.04,
                layer: 'trucks'
            }
        };
        var layers = {
            baselayers: {
                osm: {
                    name: 'OpenStreetMap',
                    type: 'xyz',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    layerOptions: {
                        subdomains: ['a', 'b', 'c'],
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        continuousWorld: true
                    }
                }
            },
            overlays: {
                cars: {
                    name: 'cars',
                    type: 'markercluster',
                    visible: true
                },
                trucks: {
                    name: 'trucks',
                    type: 'markercluster',
                    visible: false
                }
            }
        };
        angular.extend($rootScope, { markers: markers, layers: layers });
        var element = angular.element('<leaflet markers="markers" layers="layers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        var overlays = leafletData.getLayers().overlays;
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false); // Layer is markercluster
        expect(overlays.trucks.hasLayer(leafletMarkers.madrid)).toBe(true);
        expect(map.hasLayer(leafletMarkers.paris)).toBe(false); // Layer is markercluster
        expect(overlays.cars.hasLayer(leafletMarkers.paris)).toBe(true);
        expect(leafletMarkers.paris.getLatLng().lat).toBeCloseTo(0.966);
        expect(leafletMarkers.paris.getLatLng().lng).toBeCloseTo(2.02);
        expect(leafletMarkers.madrid.getLatLng().lat).toBeCloseTo(2.02);
        expect(leafletMarkers.madrid.getLatLng().lng).toBeCloseTo(4.04);
        markers.madrid.lng = 1.23;
        markers.madrid.lat = 4.56;
        markers.paris.lng = 7.89;
        markers.paris.lat = 0.98;
        $rootScope.$digest();
        expect(map.hasLayer(leafletMarkers.madrid)).toBe(false);
        expect(overlays.trucks.hasLayer(leafletMarkers.madrid)).toBe(true);
        expect(map.hasLayer(leafletMarkers.paris)).toBe(false);
        expect(overlays.cars.hasLayer(leafletMarkers.paris)).toBe(true);
        expect(leafletMarkers.paris.getLatLng().lat).toBeCloseTo(0.98);
        expect(leafletMarkers.paris.getLatLng().lng).toBeCloseTo(7.89);
        expect(leafletMarkers.madrid.getLatLng().lat).toBeCloseTo(4.56);
        expect(leafletMarkers.madrid.getLatLng().lng).toBeCloseTo(1.23);
    });


    it('should bind popup to marker if message is given', function() {
        var markers = {
            paris: {
                lat: 0.966,
                lng: 2.02,
                message: 'this is paris'
            }
        };
        angular.extend($rootScope, { markers: markers});
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var map = leafletData.getMap();
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(leafletMarkers.paris._popup._content)
            .toEqual('this is paris');
    });

    it('should watch marker icon bindings', function() {
        var leaf_icon = L.icon({
            iconUrl: 'http://leafletjs.com/docs/images/leaf-green.png',
            shadowUrl: 'http://leafletjs.com/docs/images/leaf-shadow.png',
            iconSize:     [38, 95],
            shadowSize:   [50, 64],
            iconAnchor:   [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor:  [-3, -76]
        });
        var default_icon = L.icon({
            iconUrl: 'http://cdn.leafletjs.com/leaflet-0.5.1/images/marker-icon.png',
            shadowUrl: 'http://cdn.leafletjs.com/leaflet-0.5.1/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 40],
            popupAnchor: [0, 40],
            shadowSize: [41, 41],
            shadowAnchor: [12, 40]
        });
        var markers = {
            m1: {
                lat: 51.505,
                lng: -0.09,
                message: "I'm a static marker",
                icon: leaf_icon,
            },
        };

        angular.extend($rootScope, { markers: markers });
        var element = angular.element('<leaflet markers="markers"></leaflet>');
        element = $compile(element)($rootScope);
        var leafletMarkers = leafletData.getMarkers();
        $rootScope.$digest();
        expect(leafletMarkers.m1.options.icon.iconUrl).toEqual(leaf_icon.iconUrl);

        markers.m1.icon = default_icon;
        $rootScope.$digest();
        expect(leafletMarkers.m1.options.icon.iconUrl).toEqual(default_icon.iconUrl);
    });
});

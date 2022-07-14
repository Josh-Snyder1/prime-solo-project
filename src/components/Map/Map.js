import './Map.css'
import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import mapboxgl from '!mapbox-gl';
// import { Marker } from 'react-map-gl';
import track_points from "./track_points.json";
import rumRiver from "./rumRiver.json";

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaC1zbnlkZXIxIiwiYSI6ImNsNTY2ZnU0aDFkanEzZXMwMmx3aDJweXEifQ.R4SJFu_XEoz-FNJilIswYQ';


export default function Map({coordinates}) {

  const dispatch = useDispatch(); 
  const routes = useSelector((store) => store.routes.routesReducer);

  const mapContainer = useRef(null);
  const map = useRef(null);

  // let longitude;
  // let latitude;
  
  if ( Object.keys(coordinates).length === 0 ) {
    coordinates.longitude = -93.21
    coordinates.latitude = 45.05;
  }

  // console.log('in map',coordinates)
  //sets initial coordinates to show view of greater
  //twin cites area where most of the routes will be generated
  const [lng, setLng] = useState(coordinates.longitude);
  const [lat, setLat] = useState(coordinates.latitude);
  const [zoom, setZoom] = useState(coordinates.zoom);
  
  //44.952254678652544, -93.2048053417367

  //this initializes the map on page load
  useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [lng, lat],
        zoom: zoom
      });
    });

//1. this updates lat and lng as user interacts with map
  useEffect(() => {
      if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(2));
        setLat(map.current.getCenter().lat.toFixed(2));
        setZoom(map.current.getZoom().toFixed(2));
      });
    }); 

    //https://www.youtube.com/watch?v=OySigNMXOZU

    //api request to get current position

// gets users current location
    navigator.geolocation.getCurrentPosition(successLocation,
      errorLocation, {
        enableHighAccuracy: true
      });

      function successLocation (position) {
      }

      function errorLocation (position) {
        
      }
      //end of get current location functionality

  //****** api call to convert GPX to GEOJSON
  // read in our GPX file and then parse it
  // const parsedGPX = new DOMParser().parseFromString(
  //   fs.readFileSync("../activity_8916588284.gpx", "utf8")
  // )

  // convert our gpx to geojson and store the results
  // const geojson = converter.gpx(parsedGPX)

  // do something with the output
  // i.e. save the file locally
  // upload it to the Mapbox tilesets API, etc

      //video on adding markers to map
      // https://www.youtube.com/watch?v=JJatzkPcmoI

      // const routeCoordinates = [];

      // // const routes = [rumRiver,track_points]
   

      function parseCoordinates(geojson) {
        let routeCoordinatesTest = [];
        // routeCoordinatesTest = [];
        //initialize an empty array for the return array of coordinates
        // let routeCoordinatesTest = [];
        //maps through the given route 'track_points'
        //to pull out coordinate information
        // console.log('in parseCoordinates jsonFile', geojson.features[0].geometry.coordinates)
        geojson.features[0].geometry.coordinates.map((route, i) => {
          // console.log('in routeCoordinates', route)
          //adds coordinates to final aray to display on map
          routeCoordinatesTest.push(route)
        })
          // console.log('at end of parse', routeCoordinatesTest)
          return routeCoordinatesTest;
        // console.log('testing route import', track_points.features[0].geometry.coordinates);
        // console.log('testing route import', routeCoordinates);
      };

      function handleClick() {
        console.log('testing on click')
      }
////////*********THIS IS THE HARDCODE VERSION OF MULTIPLE FEATURES */
      // useEffect(() => {
      //   map.current.on('load', () => {
      //     map.current.addSource(`riverRoutes`, {
      //     'type': 'geojson',
      //     'data': {
      //     'type': 'FeatureCollection',
      //     'features': [
      //          {
      //             'type': 'Feature',
      //             'properties': {},
      //               'geometry': {
      //               'type': 'LineString',
      //               'coordinates': [
      //                   [-122.483696, 37.833818],
      //                   [-122.483482, 37.833174],
      //                   [-122.483396, 37.8327],
      //                   [-122.483568, 37.832056],
      //                   [-122.48404, 37.831141],
      //                   [-122.48404, 37.830497],
      //                   [-122.483482, 37.82992],
      //                   [-122.483568, 37.829548],
      //                   [-122.48507, 37.829446],
      //                   [-122.4861, 37.828802]
      //                 ]
      //               }
      //             },
      //             {
      //               'type': 'Feature',
      //               'properties': {},
      //               'geometry': {
      //               'type': 'LineString',
      //               'coordinates': [
      //                 [ -93.371011856943369, 45.284281382337213 ],
      //                 [ -93.371350988745689, 45.284545915201306 ],
      //                 [ -93.371683834120631, 45.284735932946205 ],
      //                 [ -93.372103096917272, 45.284861661493778 ],
      //                 [ -93.372626965865493, 45.28498001396656 ],
      //                 [ -93.372938772663474, 45.284987725317478 ]
      //               ]
      //               }
      //               }

      //     ]//end features
      //     }//end addSource
      //   })//end add source

      //     map.current.addLayer({
      //     'id': `riverRoutes`,
      //     'type': 'line',
      //     'source': `riverRoutes`,
      //     'layout': {
      //     'line-join': 'round',
      //     'line-cap': 'round'
      //     },
      //     'paint': {
      //     'line-color': '#888',
      //     'line-width': 8
      //     }
      //     });//end map.current.addLayer
      //     }//end map.current.onLoad arrow function
      //     )//end map.current.on 'load'
      // })//end use effect

/////////*******THIS ONE SHOULD MAP THROUGH FOR MULTIPLE FEATURES */
 
    useEffect(() => {
      routes.length > 0 &&
        map.current.on('load', () => {
          map.current.addSource(`routes`, {
          'type': 'geojson',
          'data': {
          'type': 'FeatureCollection',
          'features': 
              routes.map((route, i) => {
                console.log('in routes.map', route.id)
                return {
                    'id': route.id,
                  'type': 'Feature',
                  'properties': {
                    'description': route.startPoint + ' To ' + route.endPoint
                  },
                  'geometry': {
                  'type': 'LineString',
                  'coordinates': parseCoordinates(route.geoJson)
                  },
                  }
              })//end routes.map
              
          //end features
          }//end addSource
        })//end add source

          map.current.addLayer({
          'id': `routes`,
          'type': 'line',
          'source': `routes`,
          'layout': {
          'line-join': 'round',
          'line-cap': 'round'
          },
          'paint': {
          'line-color': '#888',
          'line-width': 5
          }
          });//end map.current.addLayer
          
          map.current.on('click', 'routes', (e) => {
            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates[0].slice();
            const description = e.features[0].properties.description;
             
            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
            new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(description)
            .addTo(map.current);
            console.log('2. in on click', coordinates)
            });
             
            // Change the cursor to a pointer when the mouse is over the places layer.
            map.current.on('mouseenter', 'routes', () => {
            map.current.getCanvas().style.cursor = 'pointer';
            });
             
            // Change it back to a pointer when it leaves.
            map.current.on('mouseleave', 'routes', () => {
            map.current.getCanvas().style.cursor = '';
            });  
        
        }//end map.current.onLoad arrow function
          )//end map.current.on 'load'
      })//end use effect

///////********THIS IS THE MOST COMPLETE WORKING VERSION */
      // useEffect(() => {
      //   map.current.on('load', () => {
      //   routes.map((route, i) => {
      //     console.log('in routes.map', i)
      //     map.current.addSource(`route${i}`, {
      //     'type': 'geojson',
      //     'data': {
      //     'type': 'Feature',
      //     'properties': {},
      //     'geometry': {
      //     'type': 'LineString',
      //     'coordinates': parseCoordinates(route)
      //     }
      //     }
      //     });
      //     map.current.addLayer({
      //     'id': `route${i}`,
      //     'type': 'line',
      //     'source': `route${i}`,
      //     'layout': {
      //     'line-join': 'round',
      //     'line-cap': 'round'
      //     },
      //     'paint': {
      //     'line-color': '#888',
      //     'line-width': 8
      //     }
      //     });//end map.current.addLayer
      //     }//end map.current.onLoad arrow function
      //     )//end map.current.on 'load'
      //   })
      // })//end use effect
///////********THIS IS THE MOST COMPLETE WORKING VERSION */
  
      // Add functionality to click route and show more detail

      // When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.

      return (
          <div>
            {/* displays bar on top left to show coordinates */}
            <div className="sidebar">
              Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}

            <div ref={mapContainer} className="map-container">
            </div>
            </div>
          </div>
        );
}
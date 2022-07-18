import './AddRoute.css';
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 


function AddRoutePage(){

    let [ startPoint, setStartPoint ] = useState('');
    let [ startCoordinates, setStartCoordinates ] = useState('');
    let [ startInfo, setStartInfo ] = useState('');
    let [ endPoint, setEndPoint ] = useState('');
    let [ endCoordinates, setEndCoordinates ] = useState('');
    let [ endInfo, setEndInfo ] = useState('');
    let [ geoJSON, setGeoJSON ] = useState('');
    let [ distance, setDistance ] = useState('');
    let [ time, setTime ] = useState('');
    let [ difficulty, setDifficulty ] = useState('');
    let [ cityState, setCityState ] = useState('');
    let [ parkingFee, setParkingFee ] = useState('');


    // const user = useSelector(store=> store.user);
    const dispatch = useDispatch(); 

const addRoute = (event) => {
    event.preventDefault()
    console.log('description, imgurl')
    dispatch({
        type:'ADD_ROUTE',
        // this payload has a user id already attached to it
        payload:{
            startPoint,
            startCoordinates,
            startInfo,
            endPoint,
            endCoordinates,
            endInfo,
            geoJSON,
            distance,
            time,
            difficulty,
            cityState,
            parkingFee
        }
    })
}

    function fakeAdd() {
        console.log('in fakeAdd');

        setStartPoint=('Rice Creek North');
        setStartCoordinates=('-93.04,45.30');
        startInfo,
        endPoint,
        endCoordinates,
        endInfo,
        geoJSON,
        distance,
        time,
        difficulty,
        cityState,
        parkingFee
    }
    
    return(
        <>  
        <h1 onClick={fakeAdd}> Add Route</h1>
        <form className='addRouteForm' onSubmit={addRoute}>
            <span >
            <label>Start Point</label>
            <input className='addRouteInput'
            onChange={(event) => { setStartPoint(event.target.value)}}
            placeholder="Landing/Park"
            defaultValue={startPoint}
            /> 
            </span>
            <br/>
            <span>
            <label>Start Coordinates</label>
            <input className='addRouteInput'
            onChange={(event) => { setStartCoordinates(event.target.value)}}
            placeholder="Long/Lat (-93.21,45.05)"
            />
            </span>
            <br/>
            <span>
            <label>Start Info</label>
            <textarea className='addRouteInput' className='infoInput'
            onChange={(event) => { setStartInfo(event.target.value)}}
            placeholder="Any Helpful Info"
            /> 
            </span>
            <br/>
            <span>
            <label>End Point</label>
            <input className='addRouteInput'
            onChange={(event) => { setEndPoint(event.target.value)}}
            placeholder="Landing/Park"
            /> 
            </span>
            <br/>
            <span>
            <label>End Coordinates</label>
            <input className='addRouteInput'
            onChange={(event) => { setEndCoordinates(event.target.value)}}
            placeholder="Long/Lat (-93.21,45.05)"
            /> 
            </span>
            <br/>
            <span>
            <label>End Info</label>
            <textarea className='addRouteInput' className='infoInput'
            onChange={(event) => { setEndInfo(event.target.value)}}
            placeholder="Any Helpful Info"
            /> 
            </span>
            <br/>
            <span>
            <label>geoJSON File</label>
            <textarea className='addRouteInput' className='infoInput'
            onChange={(event) => { setGeoJSON(event.target.value)}}
            placeholder="geoJSON File"
            /> 
            </span>
            <br/>
            <span>
            <label>Distance</label>
            <input className='addRouteInput'
            onChange={(event) => { setDistance(event.target.value)}}
            placeholder="Miles"
            /> 
            </span>
            <br/>
            <span>
            <label>Time</label>
            <input className='addRouteInput'
            onChange={(event) => { setTime(event.target.value)}}
            placeholder="Hours"
            /> 
            </span>
            <br/>
            <span>
            <label>Difficulty</label>
            <input className='addRouteInput'
            onChange={(event) => { setDifficulty(event.target.value)}}
            placeholder="Easy/Moderate/Hard"
            /> 
            </span>
            <br/>
            <span>
            <label>City, State</label>
            <input className='addRouteInput'
            onChange={(event) => { setCityState(event.target.value)}}
            placeholder="City, State (Starting Location)"
            /> 
            </span>
            <br/>
            <span>
            <label>Parking Fee</label>
            <input className='addRouteInput'
            onChange={(event) => { setParkingFee(event.target.value)}}
            placeholder="5"
            /> 
            </span>
            <br/>
            <input onClick={addRoute} type="submit"/>
        </form>
        </>
    )
}

export default AddRoutePage;
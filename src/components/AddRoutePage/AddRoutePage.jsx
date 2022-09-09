import './AddRoute.css';
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';


function AddRoutePage(){

    let [ startPoint, setStartPoint ] = useState('Rice Creek North');
    let [ startCoordinates, setStartCoordinates ] = useState('-93.04,45.30');
    let [ startInfo, setStartInfo ] = useState('No boat launch, put in on side of paved trail');
    let [ endPoint, setEndPoint ] = useState('Rice Creek South Park');
    let [ endCoordinates, setEndCoordinates ] = useState('-93.05,45.2');
    let [ endInfo, setEndInfo ] = useState('End near trail head along 35W. requires short portage from trail to river');
    let [ geoJSON, setGeoJSON ] = useState('');
    let [ distance, setDistance ] = useState('4');
    let [ time, setTime ] = useState('3');
    let [ difficulty, setDifficulty ] = useState('Easy');
    let [ cityState, setCityState ] = useState('Lino Lakes, MN');
    let [ parkingFee, setParkingFee ] = useState('0');


    // const user = useSelector(store=> store.user);
    const dispatch = useDispatch(); 
    const history = useHistory();

const addRoute = (event) => {
    event.preventDefault()
    console.log('description, imgurl')
    dispatch({
        type:'ADD_ROUTE',
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
    history.push('/homePage')
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
            Value={startPoint}
            /> 
            </span>
            <br/>
            <span>
            <label>Start Coordinates</label>
            <input className='addRouteInput'
            onChange={(event) => { setStartCoordinates(event.target.value)}}
            placeholder="Long/Lat (-93.21,45.05)"
            Value={startCoordinates}
            />
            </span>
            <br/>
            <span>
            <label>Start Info</label>
            <textarea className='addRouteInput' className='infoInput'
            onChange={(event) => { setStartInfo(event.target.value)}}
            placeholder="Any Helpful Info"
            defaultValue={startInfo}
            /> 
            </span>
            <br/>
            <span>
            <label>End Point</label>
            <input className='addRouteInput'
            onChange={(event) => { setEndPoint(event.target.value)}}
            placeholder="Landing/Park"
            Value={endPoint}
            /> 
            </span>
            <br/>
            <span>
            <label>End Coordinates</label>
            <input className='addRouteInput'
            onChange={(event) => { setEndCoordinates(event.target.value)}}
            placeholder="Long/Lat (-93.21,45.05)"
            Value={endCoordinates}
            /> 
            </span>
            <br/>
            <span>
            <label>End Info</label>
            <textarea className='addRouteInput' className='infoInput'
            onChange={(event) => { setEndInfo(event.target.value)}}
            placeholder="Any Helpful Info"
            defaultValue={endInfo}
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
            Value={distance}
            /> 
            </span>
            <br/>
            <span>
            <label>Time</label>
            <input className='addRouteInput'
            onChange={(event) => { setTime(event.target.value)}}
            placeholder="Hours"
            Value={time}
            /> 
            </span>
            <br/>
            <span>
            <label>Difficulty</label>
            <input className='addRouteInput'
            onChange={(event) => { setDifficulty(event.target.value)}}
            placeholder="Easy/Moderate/Hard"
            Value={difficulty}
            /> 
            </span>
            <br/>
            <span>
            <label>City, State</label>
            <input className='addRouteInput'
            onChange={(event) => { setCityState(event.target.value)}}
            placeholder="City, State (Starting Location)"
            Value={cityState}
            /> 
            </span>
            <br/>
            <span>
            <label>Parking Fee</label>
            <input className='addRouteInput'
            onChange={(event) => { setParkingFee(event.target.value)}}
            placeholder="5"
            Value={parkingFee}
            /> 
            </span>
            <br/>
            <input onClick={addRoute} type="submit"/>
        </form>
        </>
    )
}

export default AddRoutePage;
import './AddRoute.css';
import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 


function AddRoutePage(){

    let [ description, setDescription] = useState('');
    let [ image_url, setImage_url] = useState('');
    // const user = useSelector(store=> store.user);
    const dispatch = useDispatch(); 

const addRoute = (event) => {
    event.preventDefault()
    console.log('description, imgurl', description, image_url)
    dispatch({
        type:'ADD_ITEM',
        // this payload has a user id already attached to it
        payload:{
            description,
            image_url,
        }
    })
}
    
    return(
        <>  
        <h1> Add Route</h1>
        <form className='addRouteForm' onSubmit={addRoute}>
            <span >
            <label>Start Point</label>
            <input className='addRouteInput'
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            </span>
            <br/>
            <span>
            <label>Start Coordinates</label>
            <input className='addRouteInput'
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            />
            </span>
            <br/>
            <span>
            <label>Start Info</label>
            <input className='addRouteInput'
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            </span>
            <br/>
            <span>
            <label>End Point</label>
            <input className='addRouteInput'
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            </span>
            <br/>
            <span>
            <label>End Coordinates</label>
            <input 
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            </span>
            <br/>
            <span>
            <label>End Info</label>
            <input className='addRouteInput'
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            </span>
            <br/>
            <span>
            <label>Distance</label>
            <input className='addRouteInput'
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            </span>
            <br/>
            <span>
            <label>Time</label>
            <input className='addRouteInput'
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            </span>
            <br/>
            <span>
            <label>Difficulty</label>
            <input className='addRouteInput'
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            </span>
            <br/>
            <span>
            <label>City, State</label>
            <input className='addRouteInput'
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            </span>
            <br/>
            <span>
            <label>Parking Fee</label>
            <input className='addRouteInput'
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            </span>
            <br/>
            <input type="submit"/>
        </form>
        </>
    )
}

export default AddRoutePage;
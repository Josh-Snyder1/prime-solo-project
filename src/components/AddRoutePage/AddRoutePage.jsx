import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'; 


function AddRoutePage(){

    let [ description, setDescription] = useState('');
    let [ image_url, setImage_url] = useState('');
    // const user = useSelector(store=> store.user);
    const dispatch = useDispatch(); 

const addToShelf = (event) => {
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
        <h1> This is the form</h1>
        <form onSubmit={addToShelf}>
            <input 
            onChange={(event) => { setDescription(event.target.value)}}
            placeholder="Discription"
            /> 
            <input 
            onChange={(event) => { setImage_url(event.target.value)}}
            placeholder="Url"
            /> 
            <input type="submit"/>
        </form>
        </>
    )
}

export default AddRoutePage;
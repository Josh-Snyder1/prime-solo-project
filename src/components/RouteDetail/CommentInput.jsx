import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './RouteDetail.css'

function CommentInput({route}) {

    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState('');

    function postComment(evt){
        evt.preventDefault()
        console.log('in post comment jsx', newComment)
        dispatch({
            type: 'POST_COMMENT',
            payload: {
                routeId: route.id,
                newComment
            }
        })
        document.getElementById('newCommentInput').value = '';
        dispatch ({type: 'FETCH_COMMENTS', payload: route.id});
    }

  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <form className='commentInput'>
    <textarea 
        id='newCommentInput' 
        type='text' 
        placeholder='Leave comment here'
        onChange={((event) => setNewComment(event.target.value))}
    />
    <br/>
    <button className='button-13' onClick={postComment} >Post</button>
    </form>
  );
}

export default CommentInput;

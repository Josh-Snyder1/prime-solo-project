import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './RouteDetail.css'

function CommentInput(props) {

    const dispatch=useDispatch();
    const [newComment, setNewComment] = useState('');

    function postComment(evt){
        evt.preventDefault()

        dispatch({
            type: 'POST_COMMENT',
            payload: {
                newComment
            }
        })
    }

  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <form className='comment-input'>
    <textarea 
        id='new-comment-input' 
        type='text' 
        placeholder='Leave comment here' 
        onChange={((event) => setNewComment(event.target.value))}
    />
    <br/>
    <button onClick={postComment} >Post</button>
    </form>
  );
}

export default CommentInput;

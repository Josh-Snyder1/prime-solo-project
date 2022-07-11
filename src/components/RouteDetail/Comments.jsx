import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';

import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useParams, HashRouter as Router, Route} from "react-router-dom";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function Comments({route}) {

    const dispatch = useDispatch(); 
    
    const comments = useSelector((store) => store.comments.commentsReducer);
    const user = useSelector((store) => store.user)

    useEffect(() => {
        console.log('in comments useEffect', routeId)
      dispatch ({type: 'FETCH_COMMENTS', payload: routeId});
    }, []); 

    //sets state for comment to toggle between view and edit
    const [commentView, setCommentView] = useState(0);
    //if edit icon pressed, sets commentView to commentId
    //allowing conditional rendering below to display edit text box
    const toggleEditComment = (id) => {
        console.log('in toggleEditComment', id)
        if (commentView === id) {
            //if edit button has already been pressed for this comment
            //reset state to 0
            setCommentView(0)
        }
        else {
            setCommentView(id)
        }
        
    }

    const [updatedComment, setUpdatedComment] = useState('');
    const routeId = useParams().id

    function updateComment(id) {
        // evt.preventDefault()
        console.log('in post comment jsx', updatedComment)
        dispatch({
            type: 'UPDATE_COMMENT',
            payload: {
                id: id,
                updatedComment
            }
        })
        toggleEditComment(id);
        // dispatch ({type: 'FETCH_COMMENTS', payload: routeId});
    }

    function deleteComment(id) {
        console.log('in delete comment', id)
        dispatch({ type: 'DELETE_COMMENT', payload: id})
        toggleEditComment();
        // dispatch ({type: 'FETCH_COMMENTS', payload: routeId});
    }

  return (
    comments.map(comment => {
        return(
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {comment.username.charAt(0).toUpperCase()}
            </Avatar>
            }
            action={
                user.id === comment.userId &&
            <IconButton aria-label="settings" onClick={() => {toggleEditComment(comment.comment_id)}}>
                <EditIcon />
            </IconButton>
                }
            title={comment.username}
            subheader={comment.timeDate}
        />
        <CardContent>
            {commentView != comment.comment_id ?
            <Typography variant="body2" color="text.secondary">
            {comment.comment}
            </Typography>
            :
            <Typography variant="body2" color="text.secondary">
                {/* <form className='comment-input'> */}
                <textarea 
                    id='new-comment-input' 
                    type='text' 
                    defaultValue={comment.comment}
                    onChange={((event) => setUpdatedComment(event.target.value))}
                />
                <br/>
                <button 
                onClick={() => {updateComment(comment.comment_id)}} 
                >Update</button>
                <button
                onClick={() => {deleteComment(comment.comment_id)}}
                >Delete</button>
                {/* </form> */}
            </Typography>
            }
        </CardContent>
        <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton> */}
        </CardActions>
        
        </Card>
        )
    })
  );
}

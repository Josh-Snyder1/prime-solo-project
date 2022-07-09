import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchComments(req) {
    try {
        console.log('in fetch Comments', req.payload)
        const res = yield axios.get(`/api/comments/${req.payload}`);
        console.log('in fetchComments try', res)
        yield put ({ type: 'SET_COMMENTS', payload: res.data})
    }
    catch (err) {
        console.error('error is', err)
    };
};

function* postComment(req) {
    try {
        console.log('in postComment saga', req.payload)
        yield axios.post('/api/comments', req.payload);
        yield put ({ type: 'FETCH_COMMENTS'})
    }
    catch (err) {
        console.error('error is', err)
    };
};

function* updateComment(req) {
    try {
        console.log('in updateComment saga', req.payload);
        yield axios.put(`/api/comments/update/${req.payload.id}`, req.payload)
        yield put ({ type: 'UPDATE_COMMENTS'})
    }
    catch (err) {
        console.error('error in put', err)
    };
};

function* commentsSaga() {
    yield takeLatest('FETCH_COMMENTS', fetchComments);
    yield takeLatest('POST_COMMENT', postComment);
    yield takeLatest('UPDATE_COMMENT', updateComment);
}

export default commentsSaga;
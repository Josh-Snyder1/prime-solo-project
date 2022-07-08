import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchComments() {
    try {
        const res = yield axios.get('/api/comments');
        yield put ({ type: 'SET_COMMENTS', payload: res.data})
    }
    catch (err) {
        console.error('error is', err)
    };
};

function* postComment(req) {
    try {
        yield axios.post('/api/comments', req.body);
        yield put ({ type: 'FETCH_COMMENTS', payload: res.data})
    }
    catch (err) {
        console.error('error is', err)
    };
};

function* commentsSaga() {
    yield takeLatest('FETCH_COMMENTS', fetchComments);
    yield takeLatest('POST_COMMENT', postComment);
}

export default commentsSaga;
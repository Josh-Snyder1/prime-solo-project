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
        yield put ({ type: 'FETCH_COMMENTS', payload: req.payload.routeId})
    }
    catch (err) {
        console.error('error is', err)
    };
};

function* updateComment(req) {
    try {
        console.log('in updateComment saga', req.payload);
        yield axios.put(`/api/comments/update/${req.payload.id}`, req.payload)
        yield put ({ type: 'FETCH_COMMENTS', payload: req.payload.routeId})
    }
    catch (err) {
        console.error('error in put', err)
    };
};

function* deleteComment(req) {
    try {
        console.log('in deleteComment saga', req.payload);
        yield axios.delete(`/api/comments/delete/${req.payload.id}`)
        yield put ({ type: 'FETCH_COMMENTS', payload: req.payload.routeId})
    }
    catch (err) {
        console.error('error in delete', err)
    };
}

function* commentsSaga() {
    yield takeLatest('FETCH_COMMENTS', fetchComments);
    yield takeLatest('POST_COMMENT', postComment);
    yield takeLatest('UPDATE_COMMENT', updateComment);
    yield takeLatest('DELETE_COMMENT', deleteComment);
}

export default commentsSaga;
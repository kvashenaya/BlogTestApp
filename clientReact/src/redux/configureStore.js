import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Posts } from './posts';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialPost } from './forms';
import { InitialComm } from './formComment';
import { PostUpdate } from './formUpdate';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            posts: Posts,
            comments: Comments,
            ...createForms({
                post: InitialPost,
                comment: InitialComm,
                update: PostUpdate
            })         
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
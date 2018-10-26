import * as actions from './actions';
import * as types from './constants';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
        type: types.CHANGE_SEARCHFIELD,
        payload: text
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
});

describe('request robots', () => {
    it('handles requesting robots API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        const expectedAction = {
            type: types.REQUEST_ROBOTS_PENDING
        };

        expect(action[0]).toEqual(expectedAction);
    });
});

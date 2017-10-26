import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../bench_actions';
import * as ApiUtil from '../../util/bench_api_util';

import { testBenches } from '../../testUtil/bench_helper';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {

  test('fetchBenches creates RECEIVE_BENCHES after fetching benches', () => {
    // REFER TO REDUX TESTS DOCS
    // Set up expectedActions:
    const expectedActions = [
      {
        type: actions.RECEIVE_BENCHES,
        benches: testBenches
      }
    ];

    // jest.fn makes mock functions that can return whatever you want
    ApiUtil.fetchBenches = jest.fn(() => {
      return Promise.resolve(testBenches);
      // to resolve the promise that normal ajax call would have
    });
    // Not actually making ajax call, mocking up a function to return correct values to us

    const store = mockStore({ benches: {} });

    return store.dispatch(actions.fetchBenches()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

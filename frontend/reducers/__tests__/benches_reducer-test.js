import BenchesReducer from '../benches_reducer';
import { testBenches } from '../../testUtil/bench_helper';
import * as BenchActions from '../../actions/bench_actions';

/*
NOTE: Our frontend state shape looks like this:
{
  benches: {
    1: {
        id: 1,
        description: "...",
        lat: 0.0,
        lng: 0.0
      },
    2: {
      id: 2,
      description: "...",
      lat: 0.0,
      lng: 0.0
    },
    ...
  }
  ...
}
*/

describe('BenchesReducer', () => {

  test('should initialize with an empty object as the default state', () => {
    expect(BenchesReducer(undefined, {})).toEqual({});
    // toBe compares objects in memory, checks it that object is the exact same in memory
  });

  describe('handling the RECEIVE_BENCHES action', () => {
    let action;

    beforeEach(() => {
      // Set up the action that will be passed into the reducer:
      action = {
        type: BenchActions.RECEIVE_BENCHES,
        benches: testBenches
      };
      // we care about whether the reducer is working in this test file
      // rather than whether BenchActions is working
      // action = BenchActions.receiveBenches(testBenches);
    });

    test('should replace the state with the action\'s benches', () => {
      expect(BenchesReducer(undefined, action)).toEqual(testBenches);
    });

    test('should not modify the old state', () => {
      const oldState = { 1: "hi" };
      BenchesReducer(oldState, action);
      expect(oldState).toEqual({ 1: "hi" });
    });
  });
});

// Reducer is a function
// We are trying to test that passing in arguments, we are getting the
// results we expect

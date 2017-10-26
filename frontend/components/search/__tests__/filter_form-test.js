import React from 'react';
import FilterForm from '../filter_form';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Containerless component - use shallow rendering

// setup function for our tests
const setup = () => {
  const props = {
    minSeating: 2,
    maxSeating: 5,
    updateFilter: jest.fn(),
    // mock function because we don't care what parent/children are doing
  };

  const filterFormWrapper = shallow(<FilterForm {...props } />);

  return {
    filterFormWrapper,
    props,
  };
};

describe('FilterForm', () => {
  let minSeatFilter;
  const { filterFormWrapper, props } = setup();
  minSeatFilter = filterFormWrapper.find('input').first();

  test('minSeating filter defaults to the passed in props of minSeating', () => {
    expect(minSeatFilter.props().value).toEqual(props.minSeating);
    // prop method of shallow wrapper allows you to pass in the key for
    // the prop you want, prop("value")
  });

  test('updates filter onChange', () => {
    // mocking event object for onChange function
    minSeatFilter.props().onChange({ currentTarget: {value: 3} });
    // expect(props.updateFilter).toHaveBeenCalled();
    expect(props.updateFilter.mock.calls.length).toBe(1);
    // mock is the updateFilter jest mock function, which has a .mock function on it
    // .calls is object of the mock that shows all the calls made to that function
  });

  test ('renders correctly', () => {
    // Snapshot testing here
    // toJson to convert enzyme wrapper to json represention of what is being rendered
    expect(toJson(filterFormWrapper)).toMatchSnapshot();
    // update snapshot have changes
    // npm test -- -u
  });
});

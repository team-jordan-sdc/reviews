import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockData from './mockData.js';
import AdditionalInfo from '../client/src/components/AdditionalInfo.jsx';


configure( {adapter: new Adapter()} );



describe('App component', () => {

 test('check if additional info component renders', () => {
  const wrapper = shallow(<AdditionalInfo additionalInfo={mockData}/>);
  expect(wrapper.exists()).toBe(true);
});


test('check data elements', () => {
  const wrapper = shallow(<AdditionalInfo additionalInfo={mockData}/>);
  expect(wrapper.find('RowDetails').first().text()).toBe(' Length: 168 minutes ');
  //console.log(wrapper.debug());
});


});



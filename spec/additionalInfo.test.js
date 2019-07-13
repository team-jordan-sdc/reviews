import React from 'react';
import { shallow, configure} from 'enzyme';
import mockData from './mockData.js';
import Adapter from 'enzyme-adapter-react-16';
import AdditionalInfo from '../client/src/components/AdditionalInfo.jsx';


configure({adapter: new Adapter()});



describe('App component', () => {

  /*test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  */

 test('check if additional info component renders', () => {
  const wrapper = shallow(<AdditionalInfo additionalInfo={mockData}/>);
  expect(wrapper.exists()).toBe(true);
});


test('check data elements', () => {
  const wrapper = shallow(<AdditionalInfo additionalInfo={mockData}/>);


 // test('ReviewCarousel should render once data is retrieved', () => {
  //  expect(wrapper.find('ReviewCarousel').text().length).toBeGreaterThan(0);

  });


});



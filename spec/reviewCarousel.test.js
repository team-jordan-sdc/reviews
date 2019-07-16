//ReviewlistContainer
import React from 'react';
import { shallow, configure } from 'enzyme';
import mockData from './mockData.js';
import Adapter from 'enzyme-adapter-react-16';
import ReviewCarousel from '../client/src/components/ReviewCarousel.jsx';
import Review from '../client/src/components/Review.jsx';


configure( {adapter: new Adapter()} );



describe('App component', () => {

  test('check if review carousel component renders', () => {
    const wrapper = shallow(<ReviewCarousel reviews1={mockData.reviews} reviews2={mockData.reviews} filmname={mockData.filmname}/>);
    expect(wrapper.exists()).toBe(true);
  });

  test('check data elements', () => {
    const wrapper = shallow(<Review review={mockData.reviews[0]}  filmname={mockData.filmname}/>);
    expect(wrapper.find('Source').text()).toBe(mockData.reviews[0].source);
    expect(wrapper.find('Author').text()).toBe(mockData.reviews[0].author);
  });

});

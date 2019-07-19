import React from 'react';
import renderer from 'react-test-renderer';

//Component to test
import About from '../pages/about.js'; 

describe('When testing the About page', () => {
    it('should render and match the snapshot', () => {  
        const aboutComponent = renderer.create(<About />).toJSON();
        expect(aboutComponent).toMatchSnapshot();
    });
  })
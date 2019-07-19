import React from 'react';
import renderer from 'react-test-renderer';

//Component to test
import Header from '../components/header.js'; 

describe('When testing the Header component', () => {
    it('should render and match the snapshot', () => {  
        const headerComponent = renderer.create(<Header />).toJSON();
        expect(headerComponent).toMatchSnapshot();
    });
  })
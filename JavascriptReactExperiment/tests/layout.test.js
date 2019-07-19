import React from 'react';
import renderer from 'react-test-renderer';

//Component to test
import Layout from '../components/layout.js'; 

describe('When testing the Layout component', () => {
    it('should render and match the snapshot', () => {  
        const layoutComponent = renderer.create(<Layout />).toJSON();
        expect(layoutComponent).toMatchSnapshot();
    });
  })
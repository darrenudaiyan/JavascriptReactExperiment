import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

//Component to test
import Index from '../pages/index.js'; 

describe('When testing the Index page', () => {
    let container;
    
    //setup
    beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    });

    //teardown
    afterEach(() => {
    document.body.removeChild(container);
    container = null;
    });

    //test
    it('the heading should match the expected title text', () => {  
        const expectedText = "Attribute Component Capability Matrix";

        act(() => {
            ReactDOM.render(<Index />, container);
          });

        const heading = container.querySelector('H1');
        
        expect(heading.textContent).toBe(expectedText);
    });
  })

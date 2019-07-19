import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

//Component to test
import About from '../pages/about.js'; 

describe('When testing the About page', () => {
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
    it('the label should match the expected text', () => {  
        const expectedText = "Created by Darren Udaiyan using react, node.js, next.js etc...";

        act(() => {
            ReactDOM.render(<About />, container);
          });

        const label = container.querySelector('p');
        
        expect(label.textContent).toBe(expectedText);
    });
  })

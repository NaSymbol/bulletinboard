import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import Board from './Board';

Enzyme.configure({ adapter: new Adapter() });




describe('<MyComponent />', () => {




  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Board />);
    // expect(wrapper.find(Foo)).to.have.lengthOf(3);
    wrapper.setState(
        {
            "notes": [
              {
                "id": 0,
                "note": "New Note"
              },
              {
                "id": 1,
                "note": "New Note"
              },
              {
                "id": 3,
                "note": "New Note"
              }
            ]
          }
        );


  });



});
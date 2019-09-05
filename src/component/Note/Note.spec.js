import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


import Note from './Note';




describe('<MyComponent />', () => {




  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Note index={0} key={0} >New Note</Note>

    );
    expect(wrapper.find('.note p').text()).toEqual('New Note');
  });



});
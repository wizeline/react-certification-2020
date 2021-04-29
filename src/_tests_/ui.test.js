import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-15';
import 'jest-styled-components';
import ReactDOM from 'react-dom';
import {Title, Container} from '../components/Body';
import { MemoryRouter } from 'react-router';
//import {render, fireEvent, cleanup} from '@testing-library/react';
import Main from '../main';
import FavoriteListPage from '../FavoriteListPage';
import { mount, configure } from 'enzyme';
import Circle from '../components/menu';




describe('Correct style in Body components', () => {
    test('Title : Correct style', () => {
        const wrapper =renderer.create(<Title/>).toJSON();
        expect(wrapper).toHaveStyleRule('font-family', 'sans-serif');
        //expect(wrapper).toHaveStyleRule('color', 'black');
    });
    test('Container: Corect Styles', () => {
        const wrapper = renderer.create(<Container />).toJSON();
       expect(wrapper).toHaveStyleRule('display', 'static');
        expect(wrapper).toHaveStyleRule('justify-content', 'center');
        expect(wrapper).toHaveStyleRule('margin-top', '0px')
    })
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Container />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('Text in state is changed when button clicked', () => {
//   const { getByText } = render(<Input />);

//   expect(getByText(/Initial/i).textContent).toBe("Initial State")

//   fireEvent.click(getByText("State Change Button"))

//   expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
// })

test('invalid path should redirect to 404', () => {
  configure({ adapter: new Adapter() })
  const wrapper= mount(
    <MemoryRouter initialEntries={[ '/favorite' ]}>
      <Main/>
    </MemoryRouter>
  )
  expect(wrapper.find(FavoriteListPage)).toHaveLength(0);
  
});

it('render correctly text component', () => {  
  const Menu = renderer.create(<Circle />).toJSON();
  expect(Menu).toMatchSnapshot();
});






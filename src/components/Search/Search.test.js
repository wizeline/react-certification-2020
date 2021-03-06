import React from 'react';
import renderer from 'react-test-renderer';
import { Search } from './Search.component';

describe('Search component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});

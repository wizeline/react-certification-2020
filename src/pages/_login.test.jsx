/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getPage } from 'next-page-tester';


describe('login', () => {
    it('login render', async () => {
        const { render } = await getPage({
            route: '/login',
        });
        render()
        const name = screen.getByText('name')
        expect(name).toBeInTheDocument()
    });
    
});

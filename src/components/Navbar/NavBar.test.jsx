import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar"
import "@testing-library/jest-dom/extend-expect";

describe('NavBar', () => {
    it('renders without crashing title', () => {
        render(<NavBar/>);
        const title = screen.getByText(/Dutube/i);
        expect(title).toBeInTheDocument();
    });
    
});

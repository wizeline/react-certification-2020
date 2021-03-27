import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Title from "./Title";

describe('Testing Title component', () => {
    it('renders component without crashing', () => {
        render(<Title/>);
        const title = screen.getByText(/Dutube/i);
        expect(title).toBeInTheDocument();
    });
        
});

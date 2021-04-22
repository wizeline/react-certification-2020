import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar"
import "@testing-library/jest-dom/extend-expect";
import DataProvider from "../../state/DataProvider";

describe('NavBar', () => {
    it('renders without crashing title', () => {
        render(
            <DataProvider>
                <NavBar/>
            </DataProvider>);
        const title = screen.getByText(/Dutube/i);
        expect(title).toBeInTheDocument();
    });
    
});

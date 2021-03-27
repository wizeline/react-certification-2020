import "@testing-library/jest-dom/extend-expect"
import { render, screen, cleanup, waitFor } from "@testing-library/react"
import fetchData from "../../utils/useFetchData"
import CardList from "./CardList"
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Testing CardList', () => {
    afterEach(cleanup)
    it('Testing data result from API', async () => {
        const result = await fetchData.get("/search")
        expect(Object.keys(result).length).not.toBe(0);
    });
    
    it('Testing data result from API with params', async () => {
        const result = await fetchData.get("/search", {params: {q: "hola"}})
        expect(Object.keys(result).length).not.toBe(0)
    });
    
    it('CardList Component', async () => {

        useRouter.mockImplementationOnce(() => ({
            query: { search: '' },
          }))

        
        const { container } = render(<CardList/>)
        expect(container).toMatchSnapshot()

    });
    
    
});

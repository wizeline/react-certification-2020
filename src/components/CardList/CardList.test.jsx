import "@testing-library/jest-dom/extend-expect"
import { render, screen, cleanup, waitFor } from "@testing-library/react"
import CardList from "./CardList"
import fetchData from '../../utils/useFetchData'
import dotenv from 'dotenv'
import axios from "axios"
dotenv.config()

describe('Testing CardList', () => {
    it('fetchData all videos', async (done) => {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                part: 'snippet',
                maxResults: 15,
                key: process.env.API_KEY,
                type: 'video',
            }
        })
        expect(res.status).toBe(200)
        done()
    });

    it('fetchData realated videos', async (done) => {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                part: 'snippet',
                maxResults: 15,
                key: process.env.API_KEY,
                type: 'video',
                q: "hola"
            }
        })
        expect(res.status).toBe(200)
        done()
    });
    
    
});

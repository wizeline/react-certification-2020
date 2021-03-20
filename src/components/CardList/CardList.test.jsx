import "@testing-library/jest-dom/extend-expect";
const fetch = require("node-fetch");


const fetchData = async () => {
    const res = await fetch("https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json");
    return res;
}

describe('Testing CardList', () => {
    it('Testing data result from request', async () => {
        const result = await fetchData();
        const obj = await result.json();
        expect(Object.keys(obj).length).not.toBe(0);
    });
    
    
});

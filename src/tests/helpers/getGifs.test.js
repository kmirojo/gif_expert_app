const { getGifs } = require("../../helpers/getGifs");

describe("getGifts() test", () => {
    
    test("should load 10 items", async () => {
        const gifs = await getGifs("homer");

        expect(gifs).toHaveLength(10);
    });

    test("should load gifs with length 0", async () => {
        const gifs = await getGifs("");

        expect(gifs).toHaveLength(0);
    });
});

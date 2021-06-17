let blogPosts = [];

describe('Blog - kodziak.com/blog/', () => {
    // Will trigger methods before tests
    beforeAll(async () => {
        // Load blog page
        await page.goto('https://auth.leboncoin.fr/login/');
    })

    test('title should be "Blog | Przemysław Paczoski"', async () => {
        // Get website title
        const title = await page.title();

        // Compare title of current page
        expect(title).toBe('leboncoin - connexion');
    })
    test('fill in username and password', async () => {
        // Click on input field and simulate keyboard typing
        await page.click(`//input[@id='email']`);
        await page.keyboard.type('GoodUser');
        await page.click(`//input[@id='password']`);
        await page.keyboard.type('GoodPassword');
        await page.pause();
    })
})

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


export const testApi = async () => {

    await wait(5000);
    return await fetch("https://youtubeapp-fb07a.firebaseio.com/items.json").then(res => res.json())
};
const ADD_ARTICLE = "ADD_ARTICLE";

export const getNews = () => ({
    type: 'GET_NEWS_DATA',
});

export const setNews = (item) => ({
    type: 'SET_NEWS_DATA',
    payload: item
})
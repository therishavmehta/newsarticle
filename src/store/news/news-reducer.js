const INTIAL_STATE = {
    newsArticle: []
};

const newsReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_NEWS_DATA':
            return {
                ...state
            };
        case 'SET_NEWS_DATA':
            return {
                newsArticle: [...state.newsArticle, action.payload]
            }
        default:
            return state;
    }
}

export default newsReducer;
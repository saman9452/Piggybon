const initialState = {};

const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            console.log('create project success', action.transaction);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
};

export default transactionReducer;
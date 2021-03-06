


export const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    firstVisit: true

}

const reducer = (state = initialState, action) => {
   
    const { type, payload} = action;

    switch(type) {
        case 'REGISTER_SUCCESS':
            localStorage.setItem('token', payload.token);
            console.log(initialState)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case 'REGISTER_FAILED':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        default: 
        return state
    }
}

export default reducer


export default (state={}, action) => {
    switch (action.type) {
        case 'SHOW_EMP':
            return Object.assign({}, state, { empInfo :  state.empDetails[action.payload]});
      
        default:
            return state
    }
}
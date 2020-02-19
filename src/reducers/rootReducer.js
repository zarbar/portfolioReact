const initState = {
    menu: ['menuClosed']
}

const rootReducer = (state = initState, action) => {
    let newState = { ...state };
    // Create a new state object so we don't mutate original
    switch (action.type) {
        // Check what type was sent to see if we should update
        case 'TOGGLE_MENU':
            newState.menu = action.menu;
            // Set new state based on action
            return newState;
        default:
            return state;
        // Return old state if nothing changed
    }
}

export default rootReducer;
import { createStore } from 'redux'

const userVal = {
    username: "",
    userPrivilege: "",
    wishList: {

    },
    cart: {

    },
}

const reducer = (state = userVal, action) => {
    switch(action.type) {
        case 'ITEM_LIKE':
            return "FIRST TEST";
        case 'ITEM_CART':
            return "REST TEST";
        default: 
            return;
    }
}

const store = createStore(reducer);


export default store
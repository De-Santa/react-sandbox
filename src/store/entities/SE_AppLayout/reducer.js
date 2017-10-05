import {MENU, OPEN, CLOSE} from '../../constants'

const initialState = {
  isMenuOpened: false,
};

export default (state = initialState, {type}) => {
  switch (type) {
    case OPEN + MENU:
      return {...state, isMenuOpened : true};

    case CLOSE + MENU:
      return {...state, isMenuOpened : false};

    default:
      return state
  }
};
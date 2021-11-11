import {
  CLOSE_ORDER,
  CLOSE_QUICKVIEW,
  CLOSE_SIGNIN,
  SHOW_ORDER,
  SHOW_QUICKVIEW,
  SHOW_SIGNIN,
} from '../constants/modalConstants';

export const modalReducer = (
  state = {
    type: '',
    showModal: false,
  },
  action
) => {
  switch (action.type) {
    case SHOW_QUICKVIEW:
      return {
        ...state,
        type: 'quickview',
        showModal: true,
        product: action.payload,
      };
    case CLOSE_QUICKVIEW:
      return {
        ...state,
        showModal: false,
        type: '',
      };
    case SHOW_SIGNIN:
      return {
        ...state,
        showModal: true,
        type: 'signin',
      };
    case CLOSE_SIGNIN:
      return {
        ...state,
        showModal: false,
        type: '',
      };
    case SHOW_ORDER:
      return {
        ...state,
        showModal: true,
        type: 'order',
        order: action.payload,
      };
    case CLOSE_ORDER:
      return {
        ...state,
        showModal: false,
        type: '',
      };

    default:
      return state;
  }
};

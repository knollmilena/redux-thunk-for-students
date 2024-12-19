import { fetchCustomers } from "../asyncAction/customers";

const initialState = {
  customers: [{ name: "Антон" }],
  loading: false,
  error: null,
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchCustomers.pending.type:
      return { ...state, loading: true, error: null };

    case fetchCustomers.fulfilled.type:
      return {
        ...state,
        loading: false,
        customers: [...state.customers, ...action.payload],
      };

    case fetchCustomers.rejected.type:
      return { ...state, loading: false, error: action.error.message };

    default:
      return state;
  }
};

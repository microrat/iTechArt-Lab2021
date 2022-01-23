const defaultState = {
  customers: [
    { id: 1, name: "Polina" },
    { id: 2, name: "Ulia" },
  ],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.payload] };
    case "REMOVE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const addCustomerAction=(payload)=>({type:"ADD_CUSTOMER", payload})
export const removeCustomerAction=(payload)=>({type:"REMOVE_CUSTOMER", payload})

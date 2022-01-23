import { ADD_PIZZA, DELETE_PIZZA, EDIT_PIZZA } from "../constants/actionTypes";

const initialState = {
  pizzas: [
    {
      id: 1,
      img:
        "https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic1.jpg",
      name: "Пеперонни",
      desc:
        "Салями пепперони, острый консервированный перец, сыр пармезан, свежая зелень, паприка, твёрдый сыр, мексиканский острый соус, основа для пиццы",
      size: {
        sm: {
          price: 15,
        },
        md: {
          price: 19,
        },
        lg: {
          price: 26,
        },
      },
    },
    {
      id: 2,
      img:
        "https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic2.jpg",
      name: "Барбекю",
      desc:
        "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
      size: {
        sm: {
          price: 16,
        },
        md: {
          price: 20,
        },
        lg: {
          price: 25,
        },
      },
    },
    {
      id: 3,
      img:
        "https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic3.jpg",
      name: "Морская",
      desc:
        "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
      size: {
        sm: {
          price: 16,
        },
        md: {
          price: 20,
        },
        lg: {
          price: 25,
        },
      },
    },
    {
      id: 4,
      img:
        "https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic4.jpg",
      name: "Ананасовая",
      desc:
        "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
      size: {
        sm: {
          price: 16,
        },
        md: {
          price: 20,
        },
        lg: {
          price: 25,
        },
      },
    },
    {
      id: 5,
      img:
        "https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic5.jpg",
      name: "Мясная",
      desc:
        "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
      size: {
        sm: {
          price: 16,
        },
        md: {
          price: 20,
        },
        lg: {
          price: 25,
        },
      },
    },
    {
      id: 6,
      img:
        "https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic6.jpg",
      name: "Грибная",
      desc:
        "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
      size: {
        sm: {
          price: 16,
        },
        md: {
          price: 20,
        },
        lg: {
          price: 25,
        },
      },
    },
    {
      id: 7,
      img:
        "https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic7.jpg",
      name: "Грибная",
      desc:
        "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
      size: {
        sm: {
          price: 16,
        },
        md: {
          price: 20,
        },
        lg: {
          price: 25,
        },
      },
    },
    {
      id: 8,
      img:
        "https://raw.githubusercontent.com/microrat/iTechArt-Lab2021/main/src/assets/img/pic8.jpg",
      name: "Грибная",
      desc:
        "Копчёная грудинка, сыр моцарелла, соус барбекю, репчатый лук, сушёный орегано, твёрдый сыр, томатный соус, основа для пиццы",
      size: {
        sm: {
          price: 16,
        },
        md: {
          price: 20,
        },
        lg: {
          price: 25,
        },
      },
    },
  ],
};

export const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return { ...state, pizzas: [...state.pizzas, action.payload] };
   case EDIT_PIZZA:
       return state.map(pizza=> pizza.id===action.payload.id ? pizza=action.payload : pizza)
      default:
      return state;
  }
};

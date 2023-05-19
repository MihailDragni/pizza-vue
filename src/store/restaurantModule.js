import axios from 'axios'
export const restaurantModule = {
  state: () => {
    return {
      products: [],
      restaurants: [],
    }
  },

  getters: {
    PRODUCTS(state) {
      return state.products
    },
    RESTAURANTS(state) {
      return state.restaurants
    },
  },

  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products.reduce((acc, el) => {
        const obj = { ...el, quantity: 1 }
        acc.push(obj)
        return acc
      }, [])
    },
    SET_RESTAURANTS_TO_STATE: (state, restaurants) => {
      state.restaurants = restaurants
    },
  },

  actions: {
    async GET_PRODUCTS_FROM_API({ commit }, products) {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/MihailDragni/pizza-vue/dev/db/${products}`
        )
        commit('SET_PRODUCTS_TO_STATE', response.data)
        return response.data
      } catch (error) {
        console.log(error)
        return error
      }
    },

    async GET_RESTAURANTS_FROM_API({ commit }) {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/MihailDragni/pizza-vue/dev/db/db.json`
        )
        commit('SET_RESTAURANTS_TO_STATE', response.data.db.partners)
        return response.data.db.partners
      } catch (error) {
        console.log(error)
        return error
      }
    },
  },
}

export const cartModule = {
  state: () => {
    return {
      cart: [],
    }
  },

  getters: {
    CART(state) {
      return state.cart
    },
  },

  mutations: {
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false
        state.cart.map((item) => {
          if (item.id === product.id) {
            isProductExists = true
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, id) => {
      state.cart = state.cart.filter((el) => el.id !== id)
    },
    INCREMENT_ITEM: (state, id) => {
      let currentItem = state.cart.find((el) => el.id === id)
      currentItem.quantity++
    },
    DECREMENT_ITEM: (state, id) => {
      let currentItem = state.cart.find((el) => el.id === id)
      currentItem.quantity--
    },
    CLEAR_CART: (state) => {
      state.cart = []
    },
  },

  actions: {
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({ commit }, id) {
      commit('REMOVE_FROM_CART', id)
    },
    INCREMENT_CART_ITEM({ commit }, id) {
      commit('INCREMENT_ITEM', id)
    },
    DECREMENT_CART_ITEM({ commit }, id) {
      commit('DECREMENT_ITEM', id)
    },
    CLEAR_CART({ commit }) {
      commit('CLEAR_CART')
    },
  },
}

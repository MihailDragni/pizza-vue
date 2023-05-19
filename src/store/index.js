import { createStore } from 'vuex'
import { cartModule } from './cartModule'
import { restaurantModule } from './restaurantModule'

export default createStore({
  modules: {
    cart: cartModule,
    restaurant: restaurantModule,
  },
})

import { atom, selector } from 'recoil'
import { destinations, inventory } from './Data'

export const cartState = atom({
    key: "cartState",
    default: {},
})

export const shippingState = atom({
    key: "shippingState",
    default: "PAK"
})

export const invoiceTotal = selector({
    key: "invoiceTotal",
    get: ({ get }) => {
        // getting the Atom from the Recoil
        const shippingDestination = get(shippingState)
        const cart = get(cartState)
        // Calculating the value for the Invoice
        const shippingCost = destinations[shippingDestination]
        const cartCost = Object.entries(cart).reduce((acc, [key, quantity]) => 
            // Extracting the Price of the Product and multiply it with the quantity
            acc + (inventory[key].price * quantity), 0)
        
            // Returning all the calculated value as the object
        return {
            shippingTotal: shippingCost,
            cartTotal: cartCost,
            total: (shippingCost + cartCost)
        }
    }

})


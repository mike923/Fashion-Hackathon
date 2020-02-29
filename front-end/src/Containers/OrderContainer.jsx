import React from 'react'
import axios from 'axios'
import { Switch } from 'react-router-dom'

import { PrivateRoute } from "./";

const OrderContainer = () => {
    // This should contain all the info regarding an incomplete product.
    // Whether a manufacturer is logged in or Designer.

    // This should get all products with complete = false (meaning its not a finished product)
    const getAllOrders = async () => {
        try {
            const {data: {payload}} = await axios.get()
            console.log(payload)
        } catch (error) {
            console.log(`there was an error getting all orders`)
        }
    }

    // This should get a particulard item if someone clicks on it
    const getOrderByID = async (id) => {
        try {
            const {data: {payload}} = await axios.get()
            console.log(payload)
        } catch (error) {
            console.log(`there was an error getting order with id ${id}`)
        }
    }

    return (
        <Switch>
            <PrivateRoute path="/orders" render={() => <h1>This is all orders</h1>} />
            <PrivateRoute path="/orders/:id" render={() => <h1>This is order with id</h1>} />
        </Switch>
    )
}

export default OrderContainer
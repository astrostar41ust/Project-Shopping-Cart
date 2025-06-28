import React from 'react'
import Home from './componets/pages/Home'
import Shop from './componets/pages/Shop'
import Cart from './componets/pages/Cart'
import App from './App'

const routes = [
    {
        path:'/',
        element: <App></App>,
        children: [
            {
                path:'',
                element: <Home></Home>
            },
            {
                path:'shop',
                element: <Shop></Shop>
            },
            {
                path:'cart',
                element: <Cart></Cart>
            }
        ]

    },
    
]

export default routes
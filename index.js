import React from "react"
import ReactDOM from "react-dom"

import Info from "./Info"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"

const page = (
    <div>
        <Info />
        <About />
        <Interest />
        <Footer />
    </div>
)

ReactDOM.render(page, document.getElementById('root'))

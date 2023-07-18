import React from "react"
import ReactDOM from "react-dom"

import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interest"
import Footer from "./components/Footer"

const page = (
    <div>
        <Info />
        <About />
        <Interest />
        <Footer />
    </div>
)

ReactDOM.render(page, document.getElementById('root'))
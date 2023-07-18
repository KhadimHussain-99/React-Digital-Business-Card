import React from "react"

export default function Info(){
    return(
        <main>
            <img src="./pic.jpg" className="profile"/>
            <h1 className="name">Khadim Hussain</h1>
            <h3 className="profession">Frontend Developer</h3>
            <h5>khadimhussain.website</h5>
            <div className="button-container">
                <div className="button">
                    <i className="fa-solid fa-envelope"></i>
                    <p>Email</p>
                </div>
                <div className="button linkedin">
                    <i className="fa-brands fa-linkedin"></i>
                    <p>LinkedIn</p>
                </div>
            </div>
        </main>
    )
}

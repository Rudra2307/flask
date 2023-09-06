import React from 'react'
function signup(){
    console.log("hi");
}
class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <button onClick={signup}>Sign Up</button>
                <p>happy to have you</p>
            </div>
        )
    }   
}

export default About

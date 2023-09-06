import React from 'react'
function signup(){
    console.log("hi");
}
class About extends React.Component {
    render() {
        return (

            <div>
                <button onClick={signup}>Sign Up</button>
               
            </div>
        )
    }   
}

export default About

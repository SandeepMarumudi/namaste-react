import React from "react"
import ReactDOM from "react-dom"
const result=React.createElement("h1",{},"start using react")
const Button=()=>(
    <h2>this is buuton</h2>
)
//this component composition using component in another component
const Heading=()=>(
    <div>
        <Button/>
        <h1>this is heading component</h1>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("container"))
root.render(<Heading/>)
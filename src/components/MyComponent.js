import React from "react";

class MyComponent extends React.Component
{

    handleClick (event)
    {
        console.log("Click me");
        console.log(event);
    }
    render()
    {
        return (
            <button onClick={this.handleClick}>Click me</button>
        )
    }
}

export default MyComponent
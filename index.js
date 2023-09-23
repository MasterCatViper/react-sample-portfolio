import React from "react";
import ReactDOM  from "react-dom/client";

function App (props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.job}</p>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App name={Vishesh_Chandra} job={Software_Engineer} />)
import React from "react";
import Nav from "./Nav";
import Results from "./Results";
export default function AppContainer() {
    return (
        <div>
            <div className="home__section h-screen bg-blend-darken bg-cover overflow-hidden ">
                <Nav />
                <Results />
            </div>
        </div>
    );
}

import React from "react";

function Tile({ title, image, children }) {
    return (
        <>
            <section>
                <img src={image} />
                <h2>{title}</h2>
                {children}
            </section>
        </>
    );
}

export default Tile;
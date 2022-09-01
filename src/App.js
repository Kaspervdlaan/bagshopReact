import React from 'react';
import './App.css';

import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";

import bagOne from "./assets/bag_1.png";
import bagTwo from "./assets/bag_2.png";
import bagThree from "./assets/bag_3.png";
import bagFour from "./assets/bag_4.png"
import brand from "./assets/brand.png";
import story from "./assets/our_story.png"

function App() {

    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    text = "to the collection"
                />

                <Button
                    text = "shop all bags"
                />

                <Button
                    text = "pre-orders"
                    disable = {true}
                />
            </nav>

            <main>
                <Product
                    label ="Best seller"
                    image = {bagOne}
                    name = "The handy bag"
                    price ={400}
                />

                <Product
                    label ="Best seller"
                    image = {bagTwo}
                    name = "The stylish bag"
                    price ={250}
                />

                <Product
                    label ="New collection"
                    image = {bagThree}
                    name = "The simple bag"
                    price ={300}
                />

                <Product
                    label ="New collection"
                    image = {bagFour}
                    name = "The trendy bag"
                    price ={150}
                />
            </main>

            <footer>

                <Tile title ="the brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dignissimos dolor esse hic id impedit incidunt inventore labore, modi nisi provident quam sed, tenetur voluptatum!</p>
                </Tile>

                <Tile image={brand}/>

                <Tile image={story}/>

                <Tile title ="our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, dignissimos dolor esse hic id impedit incidunt inventore labore, modi nisi provident quam sed, tenetur voluptatum!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, beatae distinctio dolore excepturi fugit harum nisi omnis placeat repudiandae voluptas?</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;




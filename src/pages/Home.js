import React, { useState } from 'react'
import { data } from '../data'
import one from '../imgs/1.png'
import two from '../imgs/2.jpg'
import three from '../imgs/3.jpg'
import four from '../imgs/4.jpg'
import five from '../imgs/5.jpg'
import six from '../imgs/6.jpg'

function Home() {

    const [selected, setSelected] = useState(["bicycle", "electronic", "sports", "clothes", "stationary", 'books']);

    const getImg = (img) => {
        switch (img) {
            case "1.png":
                return one
            case "2.png":
                return two
            case "3.png":
                return three
            case "4.png":
                return four
            case "5.png":
                return five
            case "6.png":
                return six
            default:
                return one
        }
    }

    return (
        <div className="home">
            <div className="header">
                <h2>Sagar Website</h2>
            </div>
            <div className="wrapper">
                <div className="catmain">
                    <input
                        checked={selected.includes("bicycle")}
                        onChange={(e) => {
                            if (e.target.checked) {
                                selected.push("bicycle");
                                setSelected([...selected])
                            } else {
                                let s = selected.filter(item => item !== "bicycle")
                                setSelected([...s]);
                            }
                        }} id="bicycle" type="checkbox" name="cat" />
                    <label for="bicycle">bicycle</label><br />

                    <input
                        checked={selected.includes("electronic")}
                        onChange={(e) => {
                            if (e.target.checked) {
                                selected.push("electronic");
                                setSelected([...selected])
                            } else {
                                let s = selected.filter(item => item !== "electronic")
                                setSelected([...s]);
                            }
                        }} id="electronic" type="checkbox" name="cat" />
                    <label for="electronic">electronic</label><br />

                    <input
                        checked={selected.includes("stationary")}
                        onChange={(e) => {
                            if (e.target.checked) {
                                selected.push("stationary");
                                setSelected([...selected])
                            } else {
                                let s = selected.filter(item => item !== "stationary")
                                setSelected([...s]);
                            }
                        }} id="stationary" type="checkbox" name="cat" />
                    <label for="stationary">stationary</label><br />

                    <input
                        checked={selected.includes("sports")}
                        onChange={(e) => {
                            if (e.target.checked) {
                                selected.push("sports");
                                setSelected([...selected])
                            } else {
                                let s = selected.filter(item => item !== "sports")
                                setSelected([...s]);
                            }
                        }} id="sports" type="checkbox" name="cat" />
                    <label for="sports">sports</label><br />

                    <input
                        checked={selected.includes("books")}
                        onChange={(e) => {
                            if (e.target.checked) {
                                selected.push("books");
                                setSelected([...selected])
                            } else {
                                let s = selected.filter(item => item !== "books")
                                setSelected([...s]);
                            }
                        }} id="books" type="checkbox" name="cat" />
                    <label for="books">books</label><br />

                    <input
                        checked={selected.includes("clothes")}
                        onChange={(e) => {
                            if (e.target.checked) {
                                selected.push("clothes");
                                setSelected([...selected])
                            } else {
                                let s = selected.filter(item => item !== "clothes")
                                setSelected([...s]);
                            }
                        }} id="clothes" type="checkbox" name="cat" />
                    <label for="clothes">clothes</label><br />
                </div>
                <div className="catshowmain">
                    {
                        data.filter(item => selected.includes(item.tag)).map(details => (
                            <div className="singleitem">
                                <img src={getImg(details.img)} alt="img" />
                                <h2>{details.name}</h2>
                                <b>Price:<span>{details.price}</span></b>
                                <p>{details.desc}</p>
                                <button>Buy Now</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home

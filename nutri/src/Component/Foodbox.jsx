import React, { useState } from "react";

function Foodbox(props){
    let{ele, index} = props;
    let {img, name, cal} = ele;

    const [input, setInput] = useState(0);
    const [quantity, setQuantity] = useState(0)

    function quantityHandler(){
        setQuantity(input)
    }
    return (
        <>
            <div className="parent">
                <img src={img} alt="itempic" />
                <div id="desc">
                    <span>{name}</span>
                    <span>{cal}</span>
                </div>
                <input type="number" 
                    onChange={(e)=>{setInput(e.target.value)}}
                    value={input}
                />
                <button onClick={quantityHandler}>+</button>
                <div id="div2">
                <p>{quantity} {name} = {cal*quantity} calories</p>
                <button onClick={()=>{
                    setInput(0)
                    setQuantity(0)
                }}>reset</button>
                </div>
            </div>
        
        </>
    )
}

export default Foodbox;
import { useState } from "react";

// let item = [
//     {
//         id: 1,
//         name: "Laptop",
//         price: 50000,
//         quantity: 1,
//     },
//     {
//         id: 2,
//         name: "Mobile",
//         price: 20000,
//         quantity: 1,
//     },
//     {
//         id: 3,
//         name: "Headphone",
//         price: 2000,
//         quantity: 1,
//     },
// ]


function Card() {
    const [item, setItem] = useState([
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        quantity: 1,
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000,
        quantity: 1,
    },
    {
        id: 3,
        name: "Headphone",
        price: 2000,
        quantity: 1,
    },
]

);
    const increaseQuantity =(id) =>{
        setItem(
            item.map((value)=>
                value.id===id 
                ? {
                    ...value,
                    quantity: value.quantity+1,
                  }
                :value  
        )
        )
    }

    const decreaseQuantity=(id)=>{
        setItem(
            item.map((value)=>
                value.id===id
                ?{
                    ...value,
                    quantity: value.quantity>1
                     ?value.quantity-1
                     :value.quantity
                    
                 }
                :value
            
            )
        )

    }

     const removeQuantity = (id) => {
        setItem(
            item.filter((value) => value.id !== id)
        );
    };

    return (

        <>
            {item.map((data) => {
                return (
                    <li key={data.id}>
                        <h2>{data.name}</h2>
                        <p>Price : {data.price}</p>
                        <p>Quantity: {data.quantity} </p>
                        <button onClick={()=>increaseQuantity(data.id)}>Increase</button>
                        <button onClick={()=>decreaseQuantity(data.id)}>Decrease</button>
                        <button onClick={()=>removeQuantity(data.id)}>Remove</button>
                        
                    </li>
                )
            })
            }
        </>


    )

}
export default Card;
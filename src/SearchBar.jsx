import { useEffect, useState } from "react";

function SearchBar(){
    const[search,setsearch]=useState("");
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response)=>{
            if(!Response.ok){
                throw new Error("failed to fetch")
            }
        })
    })
    return(
        <>
        <h1>User Dashboard</h1>
        <input></input>
        
        </>
    )
}
export default SearchBar;
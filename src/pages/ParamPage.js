import React from 'react'
import { useParams } from 'react-router'

const data =[
    {id:1, name: "Mari", age: "29"},
    {id:2, name: "Eliza", age: "17"},
    {id:3, name: "Damiane", age: "1"}
]

const ParamPage = () => {
    const param= useParams()
    const user =data.find(user => user.id == param.id)
    if(!user){
        return <div> User not found</div>
    }
    return (
        <div>
            <h1>
                {user.name}        
            </h1>
            <h1>
                {user.age}  
            </h1>
            <h2>
                Param Rout (Dynamic)
            </h2>
        </div>
    )
}

export default ParamPage
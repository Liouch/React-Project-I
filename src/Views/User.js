import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Component/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

const User = ()=>{
    const {id} = useParams()
    const url = `http://localhost:8000/api/teachers/${id}`
    
    const user = useAxiosGet(url)
    let content = null  

    if(user.error){
        content = <p>
            There was an error
        </p>
    }
    if(user.loading){
        content = <Loader/>
    }
    if(user.data){
        
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">{user.data.title}</h1>
                <div>
                    <img src="https://picsum.photos/200" alt={user.data.profilepic}/>
                </div>
                <div className="font-bold text-xl mb-3">
                    <p>{user.data.description}</p>
                </div>
            </div>
        
    }
    return (
        <div>
            {content}
        </div>
    )
}
export default User
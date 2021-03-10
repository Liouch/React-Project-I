import React, { useState, useEffect } from 'react'

import Loader from '../Component/Loader'
import TeacherCard from '../Component/TeacherCard'
import { useAxiosGet } from '../Hooks/HttpRequests'


const Home = ()=>{
    const url = `http://localhost:8000/api/teachers/`
    
    const users = useAxiosGet(url)
    let content = null

    if(users.error){
        content = <p>
            There was an error
        </p>
    }
    if(users.loading){
        content = <Loader/>
    }
    if(users.data){
        
        content = users.data['hydra:member'].map((user, key) =>
                <div key={key}>
                    <TeacherCard teacher={user}/>
                </div>
        
        )
        
    }
    return(
        <div>
            <h1 className="font-bold text-2xl">Best Teachers</h1>
            {content}
        </div>
    
    )
}
export default Home
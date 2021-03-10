import React from 'react'
import {Link} from 'react-router-dom'

const TeacherCard = (props)=>{
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/user/${props.teacher.id}`}>
                <div style={{
                    'backgroundImage': 'url(https://picsum.photos/200)'
                }}
                className="w-72 h-72 bg-blue bg-cover">
                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`/user/${props.teacher.id}`}>
                        {props.teacher.title}
                    </Link>
                </h3>
                <div className="front-bold mb-3">
                    {props.teacher.description}
                </div>
                <Link to={`/user/${props.teacher.id}`} className="bg-blue-500 text-white p-2 flex justify-center">
                    View
                </Link> 
            </div>
        </div>
    )
}
export default TeacherCard
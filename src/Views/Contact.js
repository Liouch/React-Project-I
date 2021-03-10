import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Contact = ()=>{
    return(
        <div>
            <h1 className="font-bold text-2xl mb-3">Contact</h1>
            <p>
                This is the contact page content.
            </p>
            <p><FontAwesomeIcon icon={faEnvelope} />: <a href="mailto:react@test.com">react@test.com</a></p>
            <p><FontAwesomeIcon icon={faGithub} />: <a href="github.com/Liouch">github.com/Liouch</a></p>
            
            
        </div>
    )
}
export default Contact
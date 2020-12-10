import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons' 

// library.add(faFacebookSquare, faGithub, faInstagram); 
const Footer = () => {
    return (
        <div className="bg-gray-100 pt-8 border-t-2 border-fuchsia-600  flex flex-col justify-center items-center">
            <div className="text-4xl mt-2">TLCN</div>
            <div className="mt-8 w-1/6 flex flex-grow justify-around">
                    <div><a target="_blank" href="https://www.facebook.com/lewis.quang.1/"><FontAwesomeIcon icon={faFacebookSquare} size= '3x' color="" /></a></div>
                    <div><a><FontAwesomeIcon icon={faGithub} size="3x" color=""/></a></div>
                    <div><a><FontAwesomeIcon icon={faInstagram} size="3x"/></a></div>
            </div>
            <div className="my-8 text-xl">
            Copyright © 2020 TLCN. All Rights Reserved.
            </div>
        </div>
    )
}
export default Footer
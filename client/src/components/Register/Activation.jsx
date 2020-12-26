import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import axios from 'axios'

import {showErrMsg, showSuccessMsg} from '../utils/Notification';

function ActivationEmail() {
    const {activation_token} = useParams();
    console.log(useParams());
    return (
        <div className="activate_page">
            <h1>active</h1>
        </div>
    )
}

export default ActivationEmail;
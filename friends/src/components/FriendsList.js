import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth'



const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
                .then(res => {
                    console.log(res.data)
                    setFriends(res.data)
                 })
             .catch(err => {
                    console.log(err)
                 })
    },[])


    return (

        <div>
            <div>
                <form>
                    <label>
                        <input 
                        />
                    </label>
                </form>
            </div>
            {
            friends.map(friend => (
                <div key={friend.id}>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))
            }
        </div>
    )
}

export default FriendsList
/**
 * Используя сайт-песочницу jsonplaceholder самостоятельно написать приложение:
 В левой части список польователей, в правой - список постов (альбомов или дел), соответствующих выбранному пользователю.
 */

// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/todos


import React, {useEffect, useState} from 'react'

import User from "./User"
import Task from "./Task"
import Main from "../product/Main"

const Main = () => {

    const [tasks, setTasks] = useState([])
    const [activeUserId, setActiveUserId] = useState(null)

    useEffect( () =>{
        fetchUsers()
        if (!activeUserId) {
            return
        }
        fetchUsersById()
    },
    [activeUserId])

}

export default Main



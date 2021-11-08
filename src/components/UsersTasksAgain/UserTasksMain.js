/**
 * Используя сайт-песочницу jsonplaceholder самостоятельно написать приложение:
 В левой части список польователей, в правой - список постов (альбомов или дел), соответствующих выбранному пользователю.
 */

// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/todos


import React, {useEffect, useState} from 'react'

import UserList from "./UserList"
import Task from "./Task"

const UserTasksMain = () => {

    const [users, setUsers] = useState([])
    const [activeUserId, setActiveUserId] = useState(null)
    const [taskInfo, setTaskInfo] = useState(null)

    useEffect(() => {
            fetchUsers()
            if (!activeUserId) {
                return
            }
            fetchTaskById()
        },
        [activeUserId])

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            setUsers(await response.json())
        } catch (err) {
            console.log(err.message)
        }
    }

const fetchTaskById = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos' + activeUserId)
        setTaskInfo(await response.json())
    } catch (err) {
        console.log(err.message)
    }
}

    const changeActiveUserId = (userId) => {
        setActiveUserId(userId);
    }

return (
    <div className="row">
        <div className="col">
        <UserList users={users} chooseUser={changeActiveUserId} />
    </div>
<div className="col">
    <Task taskInfo={taskInfo}/>
</div>
</div>
)
}

export default UserTasksMain




/**
 * Используя сайт-песочницу jsonplaceholder самостоятельно написать приложение:
 В левой части список польователей, в правой - список постов (альбомов или дел), соответствующих выбранному пользователю.
 */

// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/todos


import React, {useEffect, useState} from 'react'

import UserList from "./UserList"
import Task from "./Task"

const UsersTasksAgain = () => {

    const [users, setUsers] = useState([])
    const [activeUserId, setActiveUserId] = useState(null)
    const [taskInfo, setTaskInfo] = useState(null)

    useEffect(() => {
            fetchUsers()
            if (!activeUserId) {
                return
            }
            fetchUsersById()
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

const fetchUsersById = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/' + activeUserId)
        setUsers(await response.json())
    } catch (e) {
        console.log(e.message)
    }
}

return (
    <div className="row">
        <div className="col">
        <UserList users={users} chooseUser={changeActiveUserId} />
    </div>
<div ClassName="col">
    <ToDo task={taskInfo}/>
</div>
</div>
)
}

export default UsersTasksAgain




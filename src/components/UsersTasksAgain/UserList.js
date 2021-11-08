import React from 'react'

//   {
//     "id": 1,
//     "name": "Leanne Graham",


const UserList = ({users, chooseUser}) => {

        return (
            <div className="list-group">
                {
                    users.map((user) =>
                        <div
                            key={user.id}
                            className="list-group-item"
                            onClick={ ()=>{ chooseUser(user.id) } }
                        >{user.name}</div>)
                }
            </div>
        )
    }

    export default UserList;
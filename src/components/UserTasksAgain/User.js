import React from 'react'

//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }

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

    export default User;
import React from 'react'

const Users = ({ loading, users }) => {
    return loading ? (
        <div id="load">
            <img src="https://i.gifer.com/origin/ec/ecf46fc2a40f43ad0ef438b04b0d2e8e_w200.gif" alt="Loading.." />
        </div>
    ) : (
            <div id="card">

                {users.map(user =>
                    <div className="column">
                        {
                            console.log(user)
                        }
                        <div className="users">
                            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                            <h1 className="name">{user.first_name} {user.last_name}</h1>
                            <p className="email">{user.email}</p>
                            <p className="id">User ID: {user.id}</p>

                        </div>
                    </div>
                )
                }
            </div>
        )
}

export default Users;
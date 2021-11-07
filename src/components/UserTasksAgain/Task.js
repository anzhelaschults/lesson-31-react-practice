import React from 'react'

const ToDo = ({task}) => {

    return !task
        ? (<div>Select a user first</div>)
        : (
            <div className="card">

                    <h3 className="card-title">{task.title}</h3>
            </div>
        )
}

export default Task;
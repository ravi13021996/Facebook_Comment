import React from 'react'

export default function IndiCompo(props) {
    // console.log(props)
    // const [body, email, id, name, postId] = props.data
    // console.log(body, email, id, name, postId)
    return (
        <div className='rounded border w-75 mx-auto my-2'>
            <h2 className=' text-light rounded py-2' style={{ backgroundColor: "#7952B3" }}>{props.data.email}</h2>
            <h4>{props.data.name}</h4>
            <div>{props.data.body}</div>
        </div>
    )
}

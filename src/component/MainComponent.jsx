import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function MainComponent() {
    const [editCmt, setEditComment] = useState({ state: false, data: {} })
    const [replyCmtData, setReplyCmtData] = useState({})
    const [counter, setCounter] = useState(0)
    const [tempText, setTempText] = useState("")
    const inputEl = useRef("")
    const [commentData, setCommentData] = useState([
        {
            id: "111",
            name: "ravi",
            msg: "This is worng",
            pid: "000",
            reply: []
        },
        {
            id: "112",
            name: "shashi",
            msg: "This is Normal",
            pid: "000",
            reply: []
        },
        {
            id: "113",
            name: "atul",
            msg: "This is Right",
            pid: "000",
            reply: []
        }
    ]
    )

    // const changeHandle = (e) => {
    //     console.log(e)
    //     document.getElementById("inputval").value
    //     // setTempText(document.getElementById("inputval").value)
    // }

    const SearchNest = (data, idToSearch) => {
        // console.log(data)
        data.map((e) => {
            if (e.id === idToSearch) {
                e.reply.push({ id: uuidv4(), pid: idToSearch, msg: document.getElementById("inputval").value, name: "ravi", reply: [] })


                // setCommentData(commentData)

                // setTimeout(() => {
                //     setCommentData(commentData)
                // }, 1000);
            }
            else {
                e.reply.length > 0 & SearchNest(e.reply, idToSearch)
            }
        })

        return commentData
    }




    const addComment = (data) => {
        // console.log(data.data)
        let idToSearch = data.data.id
        // console.log(idToSearch)

        let tempo = commentData.map((e) => {

            if (e.id === idToSearch) {
                // console.log(e, "aaja")
                e.reply.push({ id: uuidv4(), pid: idToSearch, msg: document.getElementById("inputval").value, name: "ravi", reply: [] })
                return commentData
                // console.log(commentData, "commentData not in khulla")

                // setCommentData(commentData)

            }
            else {

                return SearchNest(e.reply, idToSearch)
            }
        })
        console.log(tempo)
        console.log(setCommentData(tempo[tempo.length - 1]))
        setEditComment(false)

    }
    console.log(commentData, "cmtData")

    const Editable = (props) => {
        return (
            <div>
                <form>
                    <input type="text" id="inputval" onChange={(e) => " changeHandle(e)"} />
                    <i className='fas fa-plus' onClick={() => addComment(props)}></i>
                    <i className='fas fa-trash' onClick={() => setEditComment(false)}></i>
                </form>
            </div>
        )
    }

    console.log(commentData, "commentData")


    const ShowCOmment = (props) => {

        return props.data.map((elem) => {
            return <div>
                {<CommentLi data={elem} />}

                {elem.reply.length > 0 && (<ShowCOmment data={elem.reply} />, console.log(""))}
            </div>

        })


    }
    let adsf

    const CommentLi = (props) => {
        console.log(props.data)
        return (<div className='border my-2 mx-2'>
            <div className='border w-75 d-flex rounded my-2 ms-2'>
                <div>{props.data.msg}</div>
                <span className='ms-2' onClick={() => setEditComment({ state: true, data: props.data })}>Reply</span>

            </div>

            <div className='ms-4'>
                {props.data.reply.length > 0 && <ShowCOmment data={props.data.reply} />}
            </div>

        </div>
        )
    }

    return (
        <div>
            <div> MainComponent</div>
            {editCmt.state ? <Editable data={editCmt.data} /> : ""}
            {
                commentData.map((e) => {

                    return (<div>
                        <CommentLi data={e} />
                    </div>)
                })

            }
        </div>

    )
}

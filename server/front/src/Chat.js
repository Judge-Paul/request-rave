import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'



function Chat({socket, username, room}){
    const [currentMessage, setCurrentMessage]= useState()
    const [msgList, setMsgList]= useState([])
    const sendMsg = async ()=>{
        if(currentMessage !== ""){
            const msgData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_message", msgData)
            setMsgList((list)=>[...list, msgData])
            setCurrentMessage("")
        }
    }
    useEffect(()=>{
        socket.on("receive_msg", (data)=>{
            setMsgList((list)=>[...list, data])
        })
    }, [socket])
  return(
    <div className='chat-window'>
     <div className='chat-header'>
        <p>Live chat</p> 
     </div>
     <div className="chat-body">
        <ScrollToBottom className="message-container">
        {msgList.map((msgContent)=>{
return (
    <div className='message' id={username === msgContent.author ? "you": "other"}> 
        <div> 
            <div className='message-content'><p>{msgContent.message}</p></div>
            <div className='message-meta'>
                <p id='time'>{msgContent.time}</p>
                <p id='author'>{msgContent.author}</p>
            </div>
        </div>
    </div>)
        })}
        </ScrollToBottom>
     </div>
     <div className="chat-footer">
        <input value={currentMessage} type="text" placeholder="Hey..."onChange={(event)=>{setCurrentMessage(event.target.value)}}  onKeyPress={(event)=>{
            event.key ==="Enter" && sendMsg()
        }} />
        <button onClick={sendMsg}>&#9658;</button>
     </div>
    </div>
    )
}














export default Chat;
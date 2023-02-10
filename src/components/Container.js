import React from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { useEffect } from 'react'
import { init, subscribeChat, subscribeInitialMessages } from '../socketApi'
import { useChat } from "../context/ChatContext"


function Container() {

  const {setMessages} = useChat();

  useEffect(()=>{
    init();

    subscribeInitialMessages((messages) => {
      console.log(messages)
      setMessages(messages);
    })

    subscribeChat((message) => {
      setMessages(prevState => [...prevState, {message, formMe: true}]);
    });

  }, [])

  return (
    <div className={"App"}>
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Container
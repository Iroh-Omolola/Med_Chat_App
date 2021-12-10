import React from 'react'
import {StreamChat} from 'stream-chat'
import {Chat, Channel} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import {ChannelContainer,ChannelListContainer } from './components'

const apikey= 'ykew4bjdxh3a'
const client = StreamChat.getInstance(apikey)

const App = () => {
    return (
        <div className="app_wrapper">
            <Chat client={client} theme='team light'>
              <ChannelListContainer

              />
              <ChannelContainer
              />
            </Chat>
        </div>
    )
}

export default App

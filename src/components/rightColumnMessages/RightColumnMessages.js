import { useContactData, useChatContext } from "../chatContext/hooks";
import MessageComponents from "../messageComponents/MessageComponents.js";
import OwnMessageComponents from "../messageComponents/OwnMessageComponents.js";

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const newOwnMessage = (id, receivedMessage, time) => {
    return {
        id,
        receivedMessage,
        time,
    }
}

const newReplyMessage = (id, replyJok, time) => {
    return {
        id,
        replyJok,
        time,
    }
}

const saveInDataBase = (id, pushItem) => {
    let arrMessagesDatabase = JSON.parse(localStorage.getItem(id));
    arrMessagesDatabase.push(pushItem);
    localStorage.setItem(id, JSON.stringify(arrMessagesDatabase));
}

function RightColumnMessages() {
    const { fetchReplyJok, replyJok } = useChatContext();
    const contsctObj = useContactData();

    const {
        id,
        contactName,
        avatarImg,
        messages
    } = contsctObj;

    const [allMessages, setAllMessages] = useState([]);
    const [sendMessage, setSendMessage] = useState("");

    useEffect(() => {
        const messagesHistory = localStorage.getItem(id) ? JSON.parse(localStorage.getItem(id)) : localStorage.setItem(id, JSON.stringify(messages));

        if (messagesHistory) {
            setAllMessages(messagesHistory)
        } else {
            console.log('sijdoisahdoisiosd');
            setAllMessages(messages)
        };
    }, [messages]);

    const handleTypingMessage = (event) => {
        setSendMessage(event.target.value);
    }

    const handleSubmitMessage = (event) => {
        event.preventDefault();

        if (sendMessage.length > 0) {
            fetchReplyJok();
            saveInDataBase(id, newReplyMessage(uuidv4(), replyJok, "4/22/17, 4:05 AM"));

            saveInDataBase(id, newOwnMessage(uuidv4(), sendMessage, "4/22/17, 4:05 AM"));

            setAllMessages(allMessages => [
                ...allMessages,
                newOwnMessage(uuidv4(), sendMessage, "4/22/17, 4:05 AM")
            ])
        }
        setSendMessage("");
    };


    console.log(replyJok);

    const renderMessageList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    classNames="messages">
                    <h5>There are no messages</h5>
                </CSSTransition>
            )
        }

        return arr.map(({ id, ...props }) => {
            return (
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="messages">
                    {props.sentMessage ? <MessageComponents {...props} avatarImg={avatarImg} /> : <OwnMessageComponents {...props} />}
                </CSSTransition>
            )
        })
    }

    const messageList = renderMessageList(allMessages);

    return (
        <div className="right-column">
            <div className="messages-layout">
                <div className="messages-layout__header layout-header">
                    {/* head */}
                    <div className="layout-header__info">
                        <div className="layout-header__menu menu">
                            <button type="button" className="menu__icon icon-menu"><span></span></button>
                        </div>
                        <div className='avatar'>
                            <img src={avatarImg} alt="User's avatar" className='avatar__img' />
                            <i className="icon-check"></i>
                        </div>
                        <div className='layout-header__title'>
                            <h3>{contactName}</h3>
                        </div>
                    </div>
                </div>
                {/* message list */}
                <div className="messages-list">
                    <div className="messages-container">
                        <div className="messages-list__group">
                            <TransitionGroup component="div">
                                {messageList}
                            </TransitionGroup>

                        </div>
                    </div>
                </div>
                {/* send message */}
                <div className="message-input">
                    <div className="message-input-wrapper">
                        <div className="messages-container">
                            <form onSubmit={handleSubmitMessage}>
                                <input
                                    type="text"
                                    placeholder='Type your message'
                                    dir='auto'
                                    autoComplete='off'
                                    className='message-input-text'
                                    value={sendMessage}
                                    onChange={handleTypingMessage}
                                    onSubmit={handleSubmitMessage}
                                />
                                <button
                                    type="submit"
                                    className='icon-send'>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightColumnMessages;
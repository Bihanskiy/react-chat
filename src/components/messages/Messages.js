import { useEffect, useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useContactId, useGetAllMessages, useGetValueFromKey, useContacts } from "../chatContext/hooks";

import MessageComponents from "./ReceivedMessage.js";
import OwnMessageComponents from "./SentMessage.js";

const Messages = () => {

    const contacts = useContacts();
    const contactId = useContactId();

    const allMessages = useGetAllMessages();

    const [contactMessages, setContactMessages] = useState([]);

    const getValueFromKey = useGetValueFromKey();
    const avatarImg = getValueFromKey(contacts, contactId, "avatarImg");

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        setContactMessages(allMessages[contactId]);;
        localStorage.setItem("messages", JSON.stringify(allMessages));
        setTimeout(scrollToBottom, 0);
    }, [contactId, allMessages]);

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

        return arr.map(({ text, time, type, id }) => {
            return (
                <CSSTransition
                    key={id}
                    timeout={200}
                    classNames="messages">
                    {type === "sent" ? <OwnMessageComponents text={text} time={time} /> : <MessageComponents text={text} time={time} avatarImg={avatarImg} />}
                </CSSTransition>
            )
        })
    }

    const messageList = renderMessageList(contactMessages);

    return (
        <div className="messages-list__group">
            <TransitionGroup component="div">
                {messageList}
            </TransitionGroup>
            <div className="messages-list__end" ref={messagesEndRef} />
        </div>
    )
}

export default Messages;
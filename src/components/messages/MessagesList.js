import { useEffect, useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useActiveContactId, useGetAllMessages, useAllContacts } from "../chatContext/hooks";

import { getValueFromKey } from "../../utils/getValueFromKey";

import MessageComponents from "./ReceivedMessage.js";
import OwnMessageComponents from "./SentMessage.js";

const MessagesList = () => {

    const allContacts = useAllContacts();
    const activeContactId = useActiveContactId();

    const allMessages = useGetAllMessages();

    const [contactMessages, setContactMessages] = useState([]);

    const avatarImg = getValueFromKey(allContacts, activeContactId, "avatarImg");

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        setContactMessages(allMessages[activeContactId]);;
        localStorage.setItem("messages", JSON.stringify(allMessages));
        setTimeout(scrollToBottom, 0);
    }, [activeContactId, allMessages]);

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

    const messageListHistory = renderMessageList(contactMessages);

    return (
        <div className="messages-list__group">
            <TransitionGroup component="div">
                {messageListHistory}
            </TransitionGroup>
            <div className="messages-list__end" ref={messagesEndRef} />
        </div>
    )
}

export default MessagesList;
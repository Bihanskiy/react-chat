import { useChatContext, useContactId, useContacts, useAddMessage, useGetValueFromKey, useSetOpenBurger, useGetOpenBurger } from "../chatContext/hooks";

import Messages from "../messages/Messages";
import { useState } from "react";

function RightColumnMessages() {
    const { fetchReply } = useChatContext();

    const contacts = useContacts();
    const contactId = useContactId();

    const addMessage = useAddMessage();

    const openBurger = useGetOpenBurger();
    const setOpenBurger = useSetOpenBurger();


    const getValueFromKey = useGetValueFromKey();
    const avatarImg = getValueFromKey(contacts, contactId, "avatarImg");
    const contactName = getValueFromKey(contacts, contactId, "name");

    const [sendMessage, setSendMessage] = useState("");

    const handleTypingMessage = (event) => {
        setSendMessage(event.target.value);
    }

    const handleSubmitMessage = (event) => {
        event.preventDefault();

        if (!sendMessage.length) return;

        addMessage(sendMessage, 'sent', contactId);

        const getFakeMessage = () => new Promise((resolve) => {
            setTimeout(async () => {
                const joke = await fetchReply();
                resolve(joke.value);
            }, 3000);
        })

        getFakeMessage().then((jokeValue) => addMessage(jokeValue, "received", contactId));

        setSendMessage("");
    };

    const onToggleBurger = (e) => {
        e.preventDefault();
        setOpenBurger(!openBurger)
    }

    return (
        <div className="right-column">
            <div className="messages-layout">
                <div className="messages-layout__header layout-header">
                    {/* head */}
                    <div className="layout-header__info">
                        <div className="layout-header__menu menu">
                            <button
                                type="button"
                                className="menu__icon icon-menu"
                                onClick={onToggleBurger}
                            >
                                <span className="icon-menu__line"></span>
                            </button>
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
                        <Messages />
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
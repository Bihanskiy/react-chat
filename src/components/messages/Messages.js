import { useActiveContactId, useAllContacts, useAddMessage, useSetOpenBurger, useGetOpenBurger } from "../chatContext/hooks";
import { useHttp } from "../../httpHooks/http.hook";
import { URL_REQUEST } from "../../httpHooks/requestKeys";

import { getValueFromKey } from "../../utils/getValueFromKey";

import MessagesList from "./MessagesList";
import { useState } from "react";

function Messages() {
    const { request } = useHttp();

    const allContacts = useAllContacts();
    const activeContactId = useActiveContactId();

    const addMessage = useAddMessage(activeContactId);

    const openBurger = useGetOpenBurger();
    const setOpenBurger = useSetOpenBurger();


    const avatarImg = getValueFromKey(allContacts, activeContactId, "avatarImg");
    const contactName = getValueFromKey(allContacts, activeContactId, "name");

    const [sendMessage, setSendMessage] = useState("");

    const handleTypingMessage = (event) => {
        setSendMessage(event.target.value);
    }

    const handleSubmitMessage = (event) => {
        event.preventDefault();

        if (!sendMessage.length) return;

        addMessage(sendMessage, 'sent', activeContactId);

        const getFakeMessage = () => new Promise((resolve) => {
            setTimeout(async () => {
                const joke = await request(URL_REQUEST);
                resolve(joke.value);
            }, 3000);
        })

        getFakeMessage().then((jokeValue) => addMessage(jokeValue, "received", activeContactId));

        setSendMessage("");
    };

    const onToggleBurger = (e) => {
        e.preventDefault();
        setOpenBurger(!openBurger)
    }

    return (
        <div className="right-column">
        <div>jsdoijsdijsdofjdsio</div>
            <div className="messages-layout">
            a
            a
            a
            fff
                <div className="messages-layout__header layout-header">
                ggg
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
                        <MessagesList />
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

export default Messages;
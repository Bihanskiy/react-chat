import { useEffect, useState } from "react";
import { useContactId, useGetContactId, useGetConvertedTimeContact, useSetOpenBurger, useGetOpenBurger, useGetMatches, useNameSearch, useSetSearchName, useCountNewMessageData, useSetCountNewMessageData, useUpdateStateCountMessageData } from "../chatContext/hooks";



function ContactItem(props) {
    const {
        name,
        time,
        text,
        avatarImg,
        id
    } = props;

    const contactId = useContactId();
    const getContactId = useGetContactId();

    const countNewMessageData = useCountNewMessageData();
    const updateStateCountMessageData = useUpdateStateCountMessageData();

    const convertedTime = useGetConvertedTimeContact(time);

    const openBurger = useGetOpenBurger();
    const setOpenBurger = useSetOpenBurger();

    const matches = useGetMatches();

    const nameSearch = useNameSearch();
    const setSearchName = useSetSearchName();

    useEffect(() => {
        if (id !== contactId) return;
        updateStateCountMessageData(id);
    }, [text])

    const onHandlerId = (itemId) => {
        getContactId(itemId);

        matches && setOpenBurger(!openBurger);

        if (nameSearch) setSearchName("");

        if (countNewMessageData[itemId]) {
            updateStateCountMessageData(id);
        }
    }


    return (
        <div className="chat-list__item list-item">
            <div className="list-item__button" role="button" tabIndex="0" onClick={() => onHandlerId(id)} >
                <div className='avatar'>
                    <img src={avatarImg} alt="Avatar of chat item" className='avatar__img' />
                    <i className="icon-check"></i>
                </div>
                <div className='chat-list__info info'>
                    <div className="info-title">
                        <h3>{name}</h3>
                        <div className='last-message-time'>
                            <span className='time'>{convertedTime}</span>
                        </div>
                    </div>
                    <div className='info-subtitle'>
                        <p className="last-message">{text}</p>
                        <span className="info-subtitle__messages-counter" style={{ "display": countNewMessageData[id] ? "block" : "none" }}>{countNewMessageData[id]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactItem;

// 
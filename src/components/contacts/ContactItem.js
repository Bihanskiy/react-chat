import { memo, useEffect, useState } from "react";
import { useActiveContactId, useSetActiveContactId, useGetCountUnreadMessages, useSetOpenBurger, useGetOpenBurger, useGetMatches, useNameSearch, useSetNameSearch, useSetAllMessagesActive, } from "../chatContext/hooks";
import { getConvertedTimeContact } from "../../utils/getConvertedTime";

function ContactItem(props) {
    const {
        name,
        time,
        text,
        avatarImg,
        contactId,
    } = props;

    // const allMessages = useGetAllMessages();

    const activeContactId = useActiveContactId();
    const setActiveContactId = useSetActiveContactId();

    const setAllMessagesActive = useSetAllMessagesActive();

    const countUnreadMessages = useGetCountUnreadMessages();

    const openBurger = useGetOpenBurger();
    const setOpenBurger = useSetOpenBurger();

    const matches = useGetMatches();

    const nameSearch = useNameSearch();
    const setNameSearch = useSetNameSearch();

    const [count, setCount] = useState(countUnreadMessages(contactId));
    useEffect(() => {
        if (!activeContactId) return;

        setCount(countUnreadMessages(contactId))
    }, [text]);

    const handlerClick = () => {
        setActiveContactId(contactId);

        matches && setOpenBurger(!openBurger);

        if (nameSearch) setNameSearch("");

        setAllMessagesActive(contactId);
        setCount(0);
    }

    return (
        <div className="chat-list__item list-item">
            master master master master master
            asd asd asd asd asd
            <div className="list-item__button" role="button" tabIndex="0" onClick={handlerClick} >
                <div className='avatar'>
                    <img src={avatarImg} alt="Avatar of chat item" className='avatar__img' />
                    <i className="icon-check"></i>
                </div>
                <div className='chat-list__info info'>
                    <div className="info-title">
                        <h3>{name}</h3>
                        <div className='last-message-time'>
                            <span className='time'>{getConvertedTimeContact(time)}</span>
                        </div>
                    </div>
                    <div className='info-subtitle'>
                        <p className="last-message">{text}</p>
                        <span className="info-subtitle__messages-counter" style={{ "display": count ? "block" : "none" }}>{count}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ContactItem);
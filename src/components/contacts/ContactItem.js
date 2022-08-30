import { useEffect, useState } from "react";
import { useActiveContactId, useSetActiveContactId, useGetCountUnreadMessages, useSetOpenBurger, useGetOpenBurger, useGetMatches, useNameSearch, useSetNameSearch, useViewUnreadMessages } from "../chatContext/hooks";
import { getConvertedTimeContact } from "../../utils/getConvertedTime";

function ContactItem(props) {
    const {
        name,
        time,
        text,
        avatarImg,
        id,
    } = props;

    const activeContactId = useActiveContactId();
    const setActiveContactId = useSetActiveContactId();

    const countUnreadMessages = useGetCountUnreadMessages();
    const viewUnreadMessages = useViewUnreadMessages();

    const openBurger = useGetOpenBurger();
    const setOpenBurger = useSetOpenBurger();

    const matches = useGetMatches();

    const nameSearch = useNameSearch();
    const setNameSearch = useSetNameSearch();

    const [count, setCount] = useState(countUnreadMessages(id));

    useEffect(() => {
        if (id === activeContactId) {
            viewUnreadMessages(id);
            setCount(countUnreadMessages(id));

        } else if (id !== activeContactId) {
            setCount(countUnreadMessages(id));
        }
    }, [text])

    const handlerClick = (itemId) => {
        setActiveContactId(itemId);

        matches && setOpenBurger(!openBurger);

        if (nameSearch) setNameSearch("");

        viewUnreadMessages(itemId);
        setCount(countUnreadMessages(itemId));
    }

    return (
        <div className="chat-list__item list-item">
            <div className="list-item__button" role="button" tabIndex="0" onClick={() => handlerClick(id)} >
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

export default ContactItem;
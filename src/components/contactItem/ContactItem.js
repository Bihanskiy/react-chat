import { useCallback } from "react";
import { useContactCorrespond } from "../chatContext/hooks";

function ContactItem(props) {
    const {
        contactName,
        lastMessageTime,
        lastMessage,
        avatarImg,
        id
    } = props;

    const contactCorrespond = useContactCorrespond();
    return (
        <div className="chat-list__item list-item">
            <div className="list-item__button" role="button" tabIndex="0" onClick={() => contactCorrespond(id)} >
                <div className='avatar'>
                    <img src={avatarImg} alt="Avatar of chat item" className='avatar__img' />
                    <i className="icon-check"></i>
                </div>
                <div className='chat-list__info info'>
                    <div className="info-title">
                        <h3>{contactName}</h3>
                        <div className='last-message-time'>
                            <span className='time'>{lastMessageTime}</span>
                        </div>
                    </div>
                    <div className='info-subtitle'>
                        <p className="last-message">{lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactItem;
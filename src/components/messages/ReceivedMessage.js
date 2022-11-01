import { getConvertedTimeMessage } from "../../utils/getConvertedTime";

function MessageComponents({ text, time, avatarImg }) {

    return (
        <div className="messages-list__item message">
            <div className="message__content-wrapper">
                <div className='message__avatar avatar'>
                    <img src={avatarImg} alt="User's avatar" className='avatar__img' />
                </div>
                <p className="message__content">{text}</p>
                jjj
            </div>
            <div className="message__time">{getConvertedTimeMessage(time)}</div>
        </div>
    )
}

export default MessageComponents;
import { useGetConvertedTimeMessage } from "../chatContext/hooks";

function MessageComponents({ text, time, avatarImg }) {

    const getConvertedTimeMessage = useGetConvertedTimeMessage(time);

    return (
        <div className="messages-list__item message">
            <div className="message__content-wrapper">
                <div className='message__avatar avatar'>
                    <img src={avatarImg} alt="User's avatar" className='avatar__img' />
                </div>
                <p className="message__content">{text}</p>
            </div>
            <div className="message__time">{getConvertedTimeMessage}</div>
        </div>
    )
}

export default MessageComponents;
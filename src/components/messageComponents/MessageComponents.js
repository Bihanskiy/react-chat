
function MessageComponents({ sentMessage, time, avatarImg }) {

    return (
        <div className="messages-list__item message">
            <div className="message__content-wrapper">
                <div className='message__avatar avatar'>
                    <img src={avatarImg} alt="User's avatar" className='avatar__img' />
                </div>
                <p className="message__content">{sentMessage}</p>
            </div>
            <div className="message__time">{time}</div>
        </div>
    )
}

export default MessageComponents;
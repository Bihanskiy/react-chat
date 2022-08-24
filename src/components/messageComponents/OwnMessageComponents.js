
function OwnMessageComponents({ receivedMessage, time }) {
    return (
        <div className="messages-list__item message own">
            <div className="message__content-wrapper">
                <p className="message__content">{receivedMessage}</p>
            </div>
            <div className="message__time">{time}</div>
        </div>
    )
}

export default OwnMessageComponents;
import { getConvertedTimeMessage } from "../../utils/getConvertedTime";

function OwnMessageComponents({ text, time }) {

// const getConvertedTimeMessage = getConvertedTimeMessage();
// const time = getConvertedTimeMessage()

    return (
        <div className="messages-list__item message own">
            <div className="message__content-wrapper">
                <p className="message__content">{text}</p>
                llllllll
                sssssssssssssss
            </div>
            <div className="message__time">{getConvertedTimeMessage(time)}</div>
        </div>
    )
}

export default OwnMessageComponents;
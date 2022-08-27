import { useGetConvertedTimeMessage } from "../chatContext/hooks";


function OwnMessageComponents({ text, time }) {

const getConvertedTimeMessage = useGetConvertedTimeMessage(time);

    return (
        <div className="messages-list__item message own">
            <div className="message__content-wrapper">
                <p className="message__content">{text}</p>
            </div>
            <div className="message__time">{getConvertedTimeMessage}</div>
        </div>
    )
}

export default OwnMessageComponents;
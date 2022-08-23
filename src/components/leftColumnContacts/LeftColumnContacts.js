import userAvatar from "../../assets/images/users-picture/man-svgrepo-com.svg";
import contactAvatar from "../../assets/images/users-picture/photo-1.jpg";

function LeftColumnContacts() {
    return (
        <div className='left-column'>
            <div className='left-column__main left-main'>
                <div className="left-main__header left-header">
                    <div className="left-header__container">
                        <div className='avatar'>
                            <img src={userAvatar} alt="User's avatar" className='avatar__img' />
                            <i className="icon-check"></i>
                        </div>
                        <div className='left-header__search'>
                            <input type="text" placeholder='Search or start new chat' dir='auto' autoComplete='off' className='left-header__search-input' />
                            <i className='left-header__icon icon-search'></i>
                        </div>
                    </div>
                </div>
                <div className="left-main__title">
                    <h2 className='left-main__title-text'>Chats</h2>
                </div>
                <div className='chat-list'>
                    <div className="chat-list__container">
                        <div className="chat-list__item list-item">
                            <div className="list-item__button" role="button" tabIndex="0">
                                <div className='avatar'>
                                    <img src={contactAvatar} alt="Avatar of chat item" className='avatar__img' />
                                    <i className="icon-check"></i>
                                </div>
                                <div className='chat-list__info info'>
                                    <div className="info-title">
                                        <h3>Alice Freeman</h3>
                                        <div className='last-message-time'>
                                            <span className='time'>jun 12, 2021</span>
                                        </div>
                                    </div>
                                    <div className='info-subtitle'>
                                        <p className="last-message">You are the worst!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftColumnContacts;
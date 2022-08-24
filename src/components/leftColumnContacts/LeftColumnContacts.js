import { useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import userAvatar from "../../assets/images/users-picture/man-svgrepo-com.svg";
import chatContacts from "../../assets/data/chatContacts";
import ContactItem from "../contactItem/ContactItem";

function LeftColumnContacts() {
    const navigate = useNavigate();
    

    const logout = () => {
        localStorage.clear();

        navigate('/login');
    };

    const renderContactsList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    classNames="contacts">
                    <h5>There are no contacts</h5>
                </CSSTransition>
            )
        }

        return arr.map(({ id, ...props }) => {
            return (
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="contacts">
                    <ContactItem {...props} id = {id} />
                </CSSTransition>
            )
        })
    }

    const contacts = renderContactsList(chatContacts);

    return (
        <div className='left-column'>
            <div className='left-column__main left-main'>
                <div className="left-main__header left-header">
                    <div className="left-header__container">
                        <div className="left-header__tent">
                            <div className='avatar'>
                                <img src={userAvatar} alt="User's avatar" className='avatar__img' />
                                <i className="icon-check"></i>
                            </div>
                            <div className="left-header__exit">
                                <button
                                    type="button"
                                    className="left-header__exit-button"
                                    onClick={(e) => logout(e)}
                                >Sign Out</button>
                            </div>
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
                        <TransitionGroup component="div">
                            {contacts}
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftColumnContacts;
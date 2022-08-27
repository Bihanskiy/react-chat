import { useNavigate } from "react-router-dom";

import { uselogout, useNameSearch, useSetSearchName, useGetUser } from "../chatContext/hooks";

import userAvatar from "../../assets/images/users-picture/man-svgrepo-com.svg";
import ContactsList from '../contacts/Contacts.js';

function LeftColumnContacts() {
    const navigate = useNavigate();

    const user = useGetUser();
    const logout = uselogout();


    const nameSearch = useNameSearch();
    const setSearchName = useSetSearchName();

    const onNameSearch = (e) => {
        setSearchName(e.target.value)
    }

    const onDeleteNameSearch = (e) => {
        e.preventDefault();
        console.log('sdf');
        setSearchName('');
    }

    return (
        <div className='left-column'>
            <div className='left-column__main left-main'>
                <div className="left-main__header left-header">
                    <div className="left-header__container">
                        <div className="left-header__tent">
                            <div className="left-header__wrapper">
                                <div className='avatar'>
                                    <img src={user.picture} alt="User's avatar" className='avatar__img' />
                                    <i className="icon-check"></i>
                                </div>
                                <div className="left-header__name">
                                    <h2>{`${user.given_name} ${user.family_name}`}</h2>
                                </div>
                            </div>
                            <div className="left-header__exit">
                                <button
                                    type="button"
                                    className="left-header__exit-button"
                                    onClick={() => logout(navigate)}
                                >Sign Out</button>
                            </div>
                        </div>
                        <div className='left-header__search'>
                            <input
                                type="text"
                                placeholder='Search or start new chat'
                                dir='auto'
                                autoComplete='off'
                                className='left-header__search-input'
                                value={nameSearch}
                                onChange={onNameSearch}
                            />
                            <i className='left-header__icon icon-search'></i>
                            <button
                                style={nameSearch ? { "opacity": "1" } : { "opacity": "0" }}
                                onClick={onDeleteNameSearch}
                            >
                                <span>X</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="left-main__title">
                    <h2 className='left-main__title-text'>Chats</h2>
                </div>
                <div className='chat-list'>
                    <ContactsList />
                </div>
            </div>
        </div>
    )
}

export default LeftColumnContacts;
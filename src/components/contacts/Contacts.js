import { useNavigate } from "react-router-dom";

import { useLogout, useNameSearch, useSetNameSearch } from "../chatContext/hooks";
import { getDataFromStorage } from '../../utils/getDataFromStorage.js';

import ContactsList from './ContactsList.js';

function Contacts() {
    const navigate = useNavigate();

    const {userData} = getDataFromStorage();
    const logout = useLogout();

    const nameSearch = useNameSearch();
    const setNameSearch = useSetNameSearch();

    const onNameSearch = (e) => {
        setNameSearch(e.target.value)
    }

    const onDeleteNameSearch = (e) => {
        e.preventDefault();
        setNameSearch('');
    }

    return (
        <div className='left-column'>
            <div className='left-column__main left-main'>
                <div className="left-main__header left-header">
                    <div className="left-header__container">
                        <div className="left-header__tent">
                            <div className="left-header__wrapper">
                                <div className='avatar'>
                                    <img src={userData.picture} alt="User's avatar" className='avatar__img' />
                                    <i className="icon-check"></i>
                                </div>
                                <div className="left-header__name">
                                    <h2>{`${userData.given_name} ${userData.family_name}`}</h2>
                                </div>
                            </div>
                            <div className="left-header__exit">
                                <button
                                    type="button"
                                    className="left-header__exit-button"
                                    onClick={() => logout(navigate)}
                                >Log out</button>
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

export default Contacts;
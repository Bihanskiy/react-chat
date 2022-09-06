import { createContext, useEffect, useState } from 'react';
import { getDataFromStorage } from '../../utils/getDataFromStorage';

export const ChatContext = createContext({
    activeContactId: "",
    setActiveContactId: () => { },
    setAllContacts: () => { },
    allContacts: [],
    allMessages: [],
    setAllMessages: () => { },
    nameSearch: "",
    setNameSearch: () => { },
    openBurger: true,
    setOpenBurger: () => { },
    matches: window.matchMedia("(max-width: 600px)").matches,
    countNewMessages: {},
    setCountNewMessages: () => { },
});

const ChatProvider = ({ children }) => {

    const [activeContactId, setActiveContactId] = useState();
    const [allContacts, setAllContacts] = useState([]);

    const [nameSearch, setNameSearch] = useState('');

    const [allMessages, setAllMessages] = useState([]);

    const [openBurger, setOpenBurger] = useState(true);

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 600px)").matches
    )

    useEffect(() => {
        const { messagesData, contactsData } = getDataFromStorage();
        setAllMessages(messagesData);
        setAllContacts(contactsData);

        window
            .matchMedia("(max-width: 600px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, [])

    return (
        <ChatContext.Provider
            value={
                { activeContactId, setActiveContactId, setAllContacts, allContacts, allMessages, setAllMessages, nameSearch, setNameSearch, openBurger, setOpenBurger, matches }
            }
        >{children}</ChatContext.Provider>
    )
};

export default ChatProvider;

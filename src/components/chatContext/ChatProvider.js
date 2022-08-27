import { createContext, useEffect, useState } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { contacts, messages } from '../../assets/data/chatContacts.js';

export const ChatContext = createContext({
    loading: false,
    error: '',
    clearError: () => { },
    fetchReplyJok: () => { },
    replyJok: '',
    getContactCorrespond: () => { },
    getContacs: () => { },
    getMessages: () => { },
    setBurger: () => { },
    setNumNewMessage: () => { },
});

const getNewMessageCountData = (arr) => {
    let messageCountData = {}
    arr.forEach(element => {
        messageCountData[element.id] = 0
    });
    return messageCountData;
}

const ChatProvider = ({ children }) => {
    const { request, error, clearError } = useHttp();

    const [user, setUser] = useState({});

    const [contactId, setContactId] = useState();
    const [allContacts, setAllContacts] = useState([]);

    const [nameSearch, setNameSearch] = useState('');

    const [allMessages, setAllMessages] = useState([]);
    const [countNewMessageData, setCountNewMessageData] = useState({});

    const [openBurger, setOpenBurger] = useState(true);

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 600px)").matches
    )

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        setUser(userData);

        const messagesData = localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : localStorage.setItem("messages", JSON.stringify(messages));
        messagesData ? setAllMessages(messagesData) : setAllMessages(messages);

        const contactsData = localStorage.getItem("contacts") ? JSON.parse(localStorage.getItem("contacts")) : localStorage.setItem("contacts", JSON.stringify(contacts));
        contactsData ? setAllContacts(contactsData) : setAllContacts(contacts);
        
        const newMessagesCountData = localStorage.getItem("newMessagesCountData") ? JSON.parse(localStorage.getItem("newMessagesCountData")) : localStorage.setItem("newMessagesCountData", JSON.stringify(getNewMessageCountData(contacts)));
        newMessagesCountData ? setCountNewMessageData(newMessagesCountData) : setCountNewMessageData(getNewMessageCountData(contacts));

        window
            .matchMedia("(max-width: 600px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, [])

    const fetchReply = () => request(`https://api.chucknorris.io/jokes/random`)

    const getContactId = (id) => {
        setContactId(id);
    }

    const setContacs = (updatedСontacts) => {
        setAllContacts(updatedСontacts);
    }

    const setSearchName = (name) => {
        setNameSearch(name);
    }
console.log(countNewMessageData);
    const setMessages = (updateMessages) => {
        setAllMessages(updateMessages);
    }

    const setBurger = (boolean) => {
        setOpenBurger(boolean);
    }

    const setNumNewMessageData = (newMessageCounter) => {
        setCountNewMessageData(newMessageCounter);
    }

    return (
        <ChatContext.Provider
            value={
                { error, clearError, fetchReply, user, contactId, getContactId, setContacs, allContacts, allMessages, setMessages, nameSearch, setSearchName, openBurger, setBurger, matches, countNewMessageData, setNumNewMessageData }
            }
        >{children}</ChatContext.Provider>
    )
};

export default ChatProvider;

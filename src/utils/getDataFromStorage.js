import { contacts, messages } from '../assets/data/chatContacts.js';

export const getDataFromStorage = () => {
    const userData = JSON.parse(localStorage.getItem("user"));

    localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : localStorage.setItem("messages", JSON.stringify(messages));
    const messagesData = JSON.parse(localStorage.getItem("messages"));

    localStorage.getItem("contacts") ? JSON.parse(localStorage.getItem("contacts")) : localStorage.setItem("contacts", JSON.stringify(contacts));
    const contactsData = JSON.parse(localStorage.getItem("contacts"));

    return { userData, messagesData, contactsData };
}
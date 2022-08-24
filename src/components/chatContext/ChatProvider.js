import { createContext, useEffect, useState } from 'react';
import { useHttp } from '../../hooks/http.hook';

import Spinner from '../spinner/spinner.js';

export const ChatContext = createContext({
    loading: false,
    error: '',
    clearError: () => { },
    fetchReplyJok: () => { },
    replyJok: '',
    getContactCorrespond: () => { },
});

const ChatProvider = ({ children }) => {
    const { request, error, clearError } = useHttp();

    const [replyJok, setReplyJok] = useState('');
    const [contactCorrespond, setContactCorrespond] = useState();

    const fetchReplyJok = () => request(`https://api.chucknorris.io/jokes/random`)
        .then(({ value }) => setReplyJok(value))

    const getContactCorrespond = (id) => {
        setContactCorrespond(id);
    }

    return (
        <ChatContext.Provider value={{ error, clearError, fetchReplyJok, replyJok, contactCorrespond, getContactCorrespond }}>{children}</ChatContext.Provider>
    )
};

export default ChatProvider;

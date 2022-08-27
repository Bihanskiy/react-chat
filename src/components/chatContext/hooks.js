import { useContext } from 'react';

import { ChatContext } from './ChatProvider.js';

import { v4 as uuidv4 } from 'uuid';
//========================================================================================================================================================

export const useChatContext = () => {
    return useContext(ChatContext);
}

//=======User=================================================================================================================================================

export const useGetUser = () => {
    const { user } = useChatContext();

    return user;
};

//========Contacts================================================================================================================================================

export const useContacts = () => {
    const { allContacts } = useChatContext();

    return allContacts;
};

export const useSetContacts = () => {
    const { setContacs } = useChatContext();

    return setContacs;
};

export const useContactId = () => {
    const { contactId } = useChatContext();
    return contactId;
}

export const useGetContactId = () => {
    const { getContactId } = useChatContext();

    return getContactId;
}

export const useContactsList = () => {
    const contacts = useContacts();
    const getLastMessage = useGetLastMessage();

    return contacts
        // concat contact object with message object
        .map(contact => {
            let lastTimeMessage = getLastMessage(contact.id);
            return { ...contact, ...lastTimeMessage };
        })
        .sort((a, b) => {
            const aContactTime = getLastMessage(a.id).time;
            const bContactTime = getLastMessage(b.id).time;

            return bContactTime - aContactTime;
        })
}

export const useNameSearch = () => {
    const { nameSearch } = useChatContext();

    return nameSearch;
};

export const useSetSearchName = () => {
    const { setSearchName } = useChatContext();

    return setSearchName;
};

//========Messages===============================================================================================================================================

export const useGetAllMessages = () => {
    const { allMessages } = useChatContext();

    return allMessages;
};

export const useSetMessages = () => {
    const { setMessages } = useChatContext();

    return setMessages;
};

export const useCountNewMessageData = () => {
    const { countNewMessageData } = useChatContext();

    return countNewMessageData;
}

export const useSetCountNewMessageData = () => {
    const { setNumNewMessageData } = useChatContext();

    return setNumNewMessageData;
}

export const useUpdateStateCountMessageData = () => {
    const countNewMessageData = useCountNewMessageData();
    const setCountNewMessageData = useSetCountNewMessageData();
    return (id) => {
        setCountNewMessageData((countNewMessageData) => ({ ...countNewMessageData, [id]: 0 }));
        localStorage.setItem("newMessagesCountData", JSON.stringify(countNewMessageData));
    }
}

export const useGetLastMessage = () => {
    const messagesData = useGetAllMessages();
    return (id) => {
        const idMessages = Object.keys(messagesData).find(itemId => itemId === id);

        if (idMessages) {
            const arrMessages = messagesData[idMessages].map(item => ({
                text: item.text,
                time: item.time,
                type: item.type,
            }));
            let lastMessage = arrMessages[0];
            for (let i = 1; i < arrMessages.length; ++i) {
                if (arrMessages[i].time > lastMessage.time) {
                    lastMessage = arrMessages[i];
                }
            }
            return lastMessage;
        }
    }
}

export const useAddMessage = () => {
    const setMessages = useSetMessages();
    const setCountNewMessage = useSetCountNewMessageData();

    function newMessage(oldAllMessages, id, newMessage) {
        return { ...oldAllMessages, [id]: [...oldAllMessages[id], newMessage] }
    }

    return (text, type, id) => {
        const message = {
            text,
            id: uuidv4(),
            type,
            time: Date.now(),
        }
        if (type === "received") setCountNewMessage((countNewMessageData) => ({ ...countNewMessageData, [id]: countNewMessageData[id] + 1 }));

        setMessages((allMessages) => newMessage(allMessages, id, message));

    }
}

//========Reply================================================================================================================================================

export const useReplyJok = () => {
    const { replyJok } = useChatContext();

    return replyJok;
}

export const useFetchReplyJok = () => {
    const { fetchReplyJok } = useChatContext();

    return fetchReplyJok;
}

//========Navigation================================================================================================================================================

export const uselogout = () => {
    return (navigate) => {
        localStorage.clear();

        navigate('/login');
    }
};

//=========Tools===============================================================================================================================================

export const useGetConvertedTimeContact = (timestamp) => {
    let a = new Date(timestamp);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = month + ' ' + date + ', ' + year;
    return time;
}

export const useGetConvertedTimeMessage = (timestamp) => {
    var options = { hour: "2-digit", minute: "2-digit" };
    var time = new Date(timestamp).toLocaleDateString("en-US", options)
    return time;
}

export const useGetValueFromKey = () => {
    return (arr, id, key) => {
        for (const item of arr) {
            if (item.id === id) {
                return item[key];
            }
        }
    }
}

//=======Burger=================================================================================================================================================

export const useGetOpenBurger = () => {
    const { openBurger } = useChatContext();

    return openBurger;
}

export const useSetOpenBurger = () => {
    const { setBurger } = useChatContext();

    return setBurger;
}

//======Media-query-==================================================================================================================================================

export const useGetMatches = () => {
    const { matches } = useChatContext();

    return matches;
}


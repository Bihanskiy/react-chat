import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChatContext } from './ChatProvider.js';

import { v4 as uuidv4 } from 'uuid';
//========================================================================================================================================================

export const useChatContext = () => {
    return useContext(ChatContext);
}

//========Contacts================================================================================================================================================

export const useAllContacts = () => {
    const { allContacts } = useChatContext();

    return allContacts;
};

export const useSetAllContacts = () => {
    const { setAllContacts } = useChatContext();

    return setAllContacts;
};

export const useActiveContactId = () => {
    const { activeContactId } = useChatContext();
    return activeContactId;
}

export const useSetActiveContactId = () => {
    const { setActiveContactId } = useChatContext();

    return setActiveContactId;
}

export const useContactsList = () => {
    const contacts = useAllContacts();
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

export const useSetNameSearch = () => {
    const { setNameSearch } = useChatContext();

    return setNameSearch;
};

//========Messages===============================================================================================================================================

export const useGetAllMessages = () => {
    const { allMessages } = useChatContext();

    return allMessages;
};

export const useSetAllMessages = () => {
    const { setAllMessages } = useChatContext();

    return setAllMessages;
};

export const useCountNewMessage = () => {
    const { countNewMessages } = useChatContext();

    return countNewMessages;
}

export const useSetCountNewMessages = () => {
    const { setCountNewMessages } = useChatContext();

    return setCountNewMessages;
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
    const setMessages = useSetAllMessages();

    function newMessage(oldAllMessages, id, newMessage) {
        return { ...oldAllMessages, [id]: [...oldAllMessages[id], newMessage] }
    }

    return (text, type, id) => {
        const message = {
            text,
            id: uuidv4(),
            type,
            time: Date.now(),
            read: true,
        }
        if (type === "received") message.read = false;

        setMessages((allMessages) => newMessage(allMessages, id, message));

    }
}

export const useViewUnreadMessages = () => {
    const allMessages = useGetAllMessages();
    const setMessages = useSetAllMessages();

    return (id) => {
        const viewMessages = allMessages[id].map(message => {
            if (message.read = true) return message;
            return {
                ...message,
                ["read"]: true
            }
        });

        setMessages((allMessages) => ({ ...allMessages, [id]: [...viewMessages] }))
    }
}

export const useGetCountUnreadMessages = () => {
    const allMessages = useGetAllMessages();

    return (id) => {
        let count = 0;
        const arrMessages = allMessages[id];

        for (let i = 0; i < arrMessages.length; i++) {
            const element = arrMessages[i];
            if (!element.read) {
                count++;
            }
        }
        return count;
    }
}

//========Navigation================================================================================================================================================

export const useLogout = () => {
    const navigate = useNavigate()
    return () => {
        localStorage.removeItem("user");

        navigate('/login');
    }
};


//=======Burger=================================================================================================================================================

export const useGetOpenBurger = () => {
    const { openBurger } = useChatContext();

    return openBurger;
}

export const useSetOpenBurger = () => {
    const { setOpenBurger } = useChatContext();

    return setOpenBurger;
}

//======Media-query-==================================================================================================================================================

export const useGetMatches = () => {
    const { matches } = useChatContext();

    return matches;
}


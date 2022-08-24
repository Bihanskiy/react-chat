import { useContext } from 'react';
import { ChatContext } from './ChatProvider.js';
import chatContacts from "../../assets/data/chatContacts";

export const useChatContext = () => {
    return useContext(ChatContext);
}

export const useReplyJok = () => {
    const { replyJok } = useChatContext();

    return replyJok;
}

export const useFetchReplyJok = () => {
    const { fetchReplyJok } = useChatContext();

    return fetchReplyJok;
}

export const useContactCorrespond = () => {
    const { getContactCorrespond } = useChatContext();

    return getContactCorrespond;
}

export const useContactData = () => {
    const { contactCorrespond } = useChatContext();

    return chatContacts.find((contactDataItem) => contactDataItem.id === contactCorrespond);
}
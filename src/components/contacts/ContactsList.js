import { useMemo, useDeferredValue } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { useContactsList, useNameSearch } from "../chatContext/hooks";
import ContactItem from "./ContactItem";

const ContactsList = () => {

    const contactsList = useContactsList();

    const nameSearch = useNameSearch();

    const deferredValue = useDeferredValue(nameSearch);

    const filteredContacts = useMemo(() => {
        return contactsList.filter(item => item.name.toLowerCase().includes(deferredValue.toLowerCase()));
    }, [deferredValue, contactsList])

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

        return arr.map(({ id, ...ContactInformation }) => {
            return (
                <CSSTransition
                    key={id}
                    timeout={100}
                    classNames="contacts">
                    <ContactItem {...ContactInformation} contactId={id} />
                </CSSTransition>
            )
        })
    };

    const contacts = renderContactsList(filteredContacts);
    return (
        <div className="chat-list__container">
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <TransitionGroup component="div">
                {contacts}
            </TransitionGroup>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>
            <div>dfkdofspfdpofdsopfdsposfd</div>

        </div>
    )
}



export default ContactsList;
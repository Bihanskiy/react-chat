import LeftColumnContacts from '../сontactsColumn/ContactsColumn';
import RightColumnMessages from '../messagesColumn/MessagesColumn';
import { useContactId, useGetOpenBurger } from "../chatContext/hooks";

function MainPage() {
    const contactId = useContactId();
    const openBurger = useGetOpenBurger();

    return (
        <div className="app">
            <div className={"wrapper " + (openBurger ? 'left-column-open' : "")}>
                <LeftColumnContacts />
                {contactId ? <RightColumnMessages /> : null}
            </div>
        </div>
    )
}

export default MainPage;
import Contacts from '../contacts/Contacts.js';
import Messages from '../messages/Messages.js';
import { useActiveContactId, useGetOpenBurger } from "../chatContext/hooks.js";

function MainPage() {
    const activeContactId = useActiveContactId();
    const openBurger = useGetOpenBurger();

    return (
        <div className="app">
            wer
            <div className={"wrapper " + (openBurger ? 'left-column-open' : "")}>
                <Contacts />
                {activeContactId ? <Messages /> : null}
            </div>
        </div>
    )
}

export default MainPage;
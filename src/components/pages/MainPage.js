import LeftColumnContacts from '../leftColumnContacts/LeftColumnContacts';
import RightColumnMessages from '../rightColumnMessages/RightColumnMessages';
import { useChatContext } from "../chatContext/hooks";

function MainPage() {
    const { contactCorrespond } = useChatContext();

    return (
        <div className="app">
            <div className="wrapper left-column-open">
                <LeftColumnContacts />
                { contactCorrespond ? <RightColumnMessages /> : null}
            </div>
        </div>
    )
}

export default MainPage;
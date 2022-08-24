import contactAvatarAlice from "../../assets/images/users-picture/photo-4.jpg";
import contactAvatarBob from "../../assets/images/users-picture/photo-2.jpg";
import contactAvatarThomas from "../../assets/images/users-picture/photo-1.jpg";
import contactAvatarJim from "../../assets/images/users-picture/photo-3.jpg";

const chatContacts = [
    {
        id: "1a",
        contactName: "Alice Freeman",
        messages: [
            {
                id: "1a1",
                sentMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                time: "4/22/17, 4:00 AM",
            },
            {
                id: "1a2",
                receivedMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                time: "4/22/17, 4:05 AM",
            },
            {
                id: "1a3",
                receivedMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                time: "4/22/17, 4:05 AM",
            },
            {
                id: "1a4",
                sentMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                time: "4/22/17, 4:00 AM",
            },
        ],
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        lastMessageTime: "Apr 22, 2017",
        avatarImg: contactAvatarAlice,
    },
    {
        id: "2a",
        contactName: "Bob Shelby",
        messages: [
            {
                id: "2a1",
                sentMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                time: "4/22/17, 4:00 AM",
            },
            {
                id: "2a2",
                receivedMessage: "Lorem ipsum dolor sit amet, consectetur elit",
                time: "4/22/17, 4:05 AM",
            }
        ],
        lastMessage: "Lorem ipsum dolor sit amet, consectetur elit",
        lastMessageTime: "Apr 22, 2017",
        avatarImg: contactAvatarBob,
    },
    {
        id: "3a",
        contactName: "Thomas Freeman",
        messages: [
            {
                id: "3a1",
                sentMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                time: "4/22/17, 4:00 AM",
            },
            {
                id: "3a2",
                receivedMessage: "Lorem ipsum dolor sit amet, consectetur",
                time: "4/22/17, 4:05 AM",
            }
        ],
        lastMessage: "Lorem ipsum dolor sit amet, consectetur",
        lastMessageTime: "Apr 22, 2017",
        avatarImg: contactAvatarThomas,
    },
    {
        id: "4a",
        contactName: "Jim Brud",
        messages: [
            {
                id: "4a1",
                sentMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                time: "4/22/17, 4:00 AM",
            },
            {
                id: "4a2",
                receivedMessage: "Lorem ipsum amet, consectetur adipiscing elit",
                time: "4/22/17, 4:05 AM",
            }
        ],
        lastMessage: "Lorem ipsum amet, consectetur adipiscing elit",
        lastMessageTime: "Apr 22, 2017",
        avatarImg: contactAvatarJim,
    },
]

export default chatContacts;
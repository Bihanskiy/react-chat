import contactAvatarAlice from "../../assets/images/users-picture/photo-4.jpg";
import contactAvatarBob from "../../assets/images/users-picture/photo-2.jpg";
import contactAvatarThomas from "../../assets/images/users-picture/photo-1.jpg";
import contactAvatarJim from "../../assets/images/users-picture/photo-3.jpg";

export const contacts = [
    { name: 'Alice Freeman', id: '1a', avatarImg: contactAvatarAlice },
    { name: 'Bob Shelby', id: '2a', avatarImg: contactAvatarBob },
    { name: 'Thomas Freeman', id: '3a', avatarImg: contactAvatarThomas },
    { name: 'Jim Brud', id: '4a', avatarImg: contactAvatarJim },
];

export const messages = {
    '1a': [
        { text: 'Alice Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: 1661498406891, type: 'received', id: "1a1" },
        { text: 'Lorem sit amet', time: 1661498416891, type: 'sent', id: "1a2" },
        { text: 'Lorem ipsum dolor amet', time: 1661498426891, type: 'received', id: "1a3" },
        { text: 'Lorem ipsum amet', time: 1661498436891, type: 'sent', id: "1a4" },
        { text: 'Lorem ipsum', time: 1661498446891, type: 'received', id: "1a5" },
    ],
    '2a': [
        { text: 'Bob Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: 1661384050221, type: 'received', id: "2a1" },
        { text: 'Lorem sit amet', time: 1661384070221, type: 'sent', id: "2a2" },
        { text: 'Lorem ipsum dolor amet', time: 1661385070221, type: 'received', id: "2a3" },
        { text: 'Lorem ipsum amet', time: 1661385080221, type: 'sent', id: "2a4" },
    ],
    '3a': [
        { text: 'Thomas Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: 1661387080221, type: 'received', id: "3a1" },
        { text: 'Lorem sit amet', time: 1661487080221, type: 'sent', id: "3a2" },
    ],
    '4a': [
        { text: 'Jim Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: 1661497080221, type: 'received', id: "4a1" },
        { text: 'Lorem sit amet', time: 1661497180221, type: 'sent', id: "4a2" },
        { text: 'Lorem ipsum dolor amet', time: 1661498180221, type: 'received', id: "4a3" },
    ],
}

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
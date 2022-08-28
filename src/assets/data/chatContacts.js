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
        { text: 'Alice Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: 1661498406891, type: 'received', id: "1a1", read: true },
        { text: 'Lorem sit amet', time: 1661498416891, type: 'sent', id: "1a2", read: true },
        { text: 'Lorem ipsum dolor amet', time: 1661498426891, type: 'received', id: "1a3", read: true },
        { text: 'Lorem ipsum amet', time: 1661498436891, type: 'sent', id: "1a4", read: true },
        { text: 'Lorem ipsum', time: 1661498446891, type: 'received', id: "1a5", read: true },
    ],
    '2a': [
        { text: 'Bob Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: 1661384050221, type: 'received', id: "2a1", read: true },
        { text: 'Lorem sit amet', time: 1661384070221, type: 'sent', id: "2a2", read: true },
        { text: 'Lorem ipsum dolor amet', time: 1661385070221, type: 'received', id: "2a3", read: true },
        { text: 'Lorem ipsum amet', time: 1661385080221, type: 'sent', id: "2a4", read: true },
    ],
    '3a': [
        { text: 'Thomas Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: 1661387080221, type: 'received', id: "3a1", read: true },
        { text: 'Lorem sit amet', time: 1661487080221, type: 'sent', id: "3a2", read: true },
    ],
    '4a': [
        { text: 'Jim Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: 1661497080221, type: 'received', id: "4a1", read: true },
        { text: 'Lorem sit amet', time: 1661497180221, type: 'sent', id: "4a2", read: true },
        { text: 'Lorem ipsum dolor amet', time: 1661498180221, type: 'received', id: "4a3", read: true },
    ],
}
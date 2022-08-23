import contactAvatar from "../../assets/images/users-picture/photo-1.jpg";

function RightColumnMessages() {
    return (
        <div className="right-column">
            <div className="messages-layout">
                <div className="messages-layout__header layout-header">
                    {/* head */}
                    <div className="layout-header__info">
                        <div className="layout-header__menu menu">
                            <button type="button" className="menu__icon icon-menu"><span></span></button>
                        </div>
                        <div className='avatar'>
                            <img src={contactAvatar} alt="User's avatar" className='avatar__img' />
                            <i className="icon-check"></i>
                        </div>
                        <div className='layout-header__title'>
                            <h3>Alice Freeman</h3>
                        </div>
                    </div>
                </div>
                {/* message list */}
                <div className="messages-list">
                    <div className="messages-container">
                        <div className="messages-list__group">
                            <div className="messages-list__item message">
                                <div className="message__content-wrapper">
                                    <div className='message__avatar avatar'>
                                        <img src={contactAvatar} alt="User's avatar" className='avatar__img' />
                                    </div>
                                    <p className="message__content"> sada sa ddsa sa das dsa asd asd sad sad asdsa sad ad s dp</p>
                                </div>
                                <div className="message__time">4/22/17, 4:00 AM</div>
                            </div>
                            <div className="messages-list__item message own">
                                <div className="message__content-wrapper">
                                    <p className="message__content">Aliquid vel maxime eum eaque rerum amet voluptatum voluptate quae expedita optio dolore totam repellat, pariatur voluptates itaque impedit a quaerat placeat? WWWejfijewf ew opjfiewop weok dp</p>
                                </div>
                                <div className="message__time">4/22/17, 4:00 AM</div>
                            </div>

                            <div className="messages-list__item message">
                                <div className="message__content-wrapper">
                                    <div className='message__avatar avatar'>
                                        <img src={contactAvatar} alt="User's avatar" className='avatar__img' />
                                    </div>
                                    <p className="message__content"> sada sa ddsa sa das dsa asd asd sad sad asdsa sad ad s dp</p>
                                </div>
                                <div className="message__time">4/22/17, 4:00 AM</div>
                            </div>

                            <div className="messages-list__item message">
                                <div className="message__content-wrapper">
                                    <div className='message__avatar avatar'>
                                        <img src={contactAvatar} alt="User's avatar" className='avatar__img' />
                                    </div>
                                    <p className="message__content"> sada sa ddsa sa das dsa asd asd sad sad asdsa sad ad s dp</p>
                                </div>
                                <div className="message__time">4/22/17, 4:00 AM</div>
                            </div>

                            <div className="messages-list__item message own">
                                <div className="message__content-wrapper">
                                    <p className="message__content">Aliquid vel maxime eum eaque rerum amet voluptatum voluptate quae expedita optio dolore totam repellat, pariatur voluptates itaque impedit a quaerat placeat? WWWejfijewf ew opjfiewop weok dp</p>
                                </div>
                                <div className="message__time">4/22/17, 4:00 AM</div>
                            </div>

                            <div className="messages-list__item message own">
                                <div className="message__content-wrapper">
                                    <p className="message__content">Aliquid vel maxime eum eaque rerum amet voluptatum voluptate quae expedita optio dolore totam repellat, pariatur voluptates itaque impedit a quaerat placeat? WWWejfijewf ew opjfiewop weok dp</p>
                                </div>
                                <div className="message__time">4/22/17, 4:00 AM</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* send message */}
                <div className="message-input">
                    <div className="message-input-wrapper">
                        <div className="messages-container">
                            <input type="text" placeholder='Type your message' dir='auto' autoComplete='off' className='message-input-text' />
                            <i className='icon-send'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightColumnMessages;
import React from 'react';
import moment from 'moment'

const header = {
    textAlign: 'center'
}


const notificationItem ={
    margin:"0px",
    display: "flex",
    justifyContent: 'space-around',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center'
}


const Notification = (props) => {
    const {notifications} = props;
    return (
        <div>
            <div className="section">
            <h3 style={header}>Notification</h3>
            </div>
            <ul>
                {notifications && notifications.map(item => {
                    return (
                        <div className="card"> 
                        <div className="card-body" key={item.id} style={notificationItem}>
                            <p className="card-text" style={notificationItem}>{item.user} {item.content}</p>
                            <p className="card-text" style={notificationItem}>{moment(item.time.toDate()).fromNow()}</p>
                        </div>
                        </div>

                    )
                })}
            </ul>
        </div>
    );
};

export default Notification;
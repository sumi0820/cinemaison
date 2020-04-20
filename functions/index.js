const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello!");
});

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('Notification added', doc));
} 

exports.reviewCreated = functions.firestore
    .document('reviews/{reviewId}')
    .onCreate(doc => {
        
        const review = doc.data();
        const notification = {
            content: 'added a new review',
            user: `${review.authorName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
    return createNotification(notification)
})

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
            .doc(user.uid)
            .get()
            .then(doc => {
                const notification = {
                    content: 'New resident joined the maison',
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
    return createNotification(notification)

            })
    }
)


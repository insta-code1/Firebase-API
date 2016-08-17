var firebase = require('firebase');

firebase.initializeApp({
    serviceAccount: "./quiver-two-service-account.json",
    databaseURL: ""
});

var ref = firebase.database().ref('node-client');
var messagesRef = ref.child('some/path/messages');

//listing for changes to the child of messages key{ key: value } firebase and logging the snapshot value
messagesRef.on('child_changed', function(snap) {
    console.log(snap.key, snap.val());
       });

//listing for child added to messagesRef
messagesRef.on('child_added', function(snap) {
    console.log(snap.key, snap.val());
});

//listing for child removed on messagesRef
messagesRef.on('child_removed', function(snap) {
    console.log(snap.key, snap.val());
});


// messagesRef.once('value')
//     .then(function(snap) {
//         snap.forEach(function(childSnap) {
//             console.log(childSnap.key, childSnap.val());
//         });
//     });



// var promises = [];

// pushing 10 messages to messagesRef
// for (var i = 0; i < 10; i++) {
//     promises.push(messagesRef.push({
//         text: 'Some Text',
//         count: i
//     }));
// }

// Promise.all(promises)
//     .then(function() {
//         ref.once('value')
//             .then(function(snap) {
//                 console.log(snap.val());
//             });
//     });
var firebase = require('firebase')

firebase.initializeApp({
    serviceAccount: '',
    databaseURL: ''
});

var ref = firebase.database().ref('query-data');
var usersRef = ref.child('users');


// child_added
usersRef.orderByKey().limitToLast(1).on('child_added', function (snap) {
    console.log(snap.key, snap.val());
    });

// child_removed

usersRef.orderByKey().on('child_removed', function (snap) {
    console.log(snap.key, snap.val());
    });

// child_changed

usersRef.orderByKey().on('child_changed', function (snap) {
    console.log(snap.key, snap.val());
    });
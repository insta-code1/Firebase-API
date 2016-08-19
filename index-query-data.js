var firebase = require('firebase');
var axios = require('axios');

firebase.initializeApp({
    serviceAccount: ',
    databaseURL: ''
});

var ref = firebase.database().ref('query-data');
var usersRef = ref.child('users');

// List of all Augments avaible to pass to on the .on() method 
// "value", "child_added", "child_changed", "child_removed", or "child_moved."

usersRef.orderByChild('order').limitToLast(8).on('child_added', function(snapshot) {
    console.log(snapshot.key,snapshot.val());
})


// calling the usersRef.once() method on 'value' will return entire list in users
// usersRef.once('value')
//     .then(function(snap) {
//         var users = snap.val();
//         console.log('users',users);
//     });



// // Getting users from api and pushing them to DB 
// var getUser = function (i) {
//     var userRef = usersRef.push();
        
//     return axios.get('http://swapi.co/api/people/' + i + '/?format=json')
//         .then(function(res) {
//             var user =res.data; 
//             return userRef.set({
//                 order: i,
//                 name: user.name,
//                 height: user.height,
//                 mass: user.mass,
//                 birth_year: user.birth_year,
//                 gender: user.gender,
//                 homeworld: user.homeworld,
//                 films: user.films                
//             });
//         });
// };

// var promises = [];

// for (var i = 1; i < 21; i++) {
//     promises.push(getUser(i))
// }

// Promise.all(promises)
//     .then(function() {
//         console.log('success');
//         process.exit();
//     })
//     .catch(function(err) {
//     console.log('error', err);
//     process.exit();
// });


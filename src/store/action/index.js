import firebase from './../../Config/firebase'

const facebook_login = (history) => {
    return(dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;

            var create_user = {
                name : user.displayName,
                email : user.email,
                profile : user.photoURL,
                uid : user.uid
            }
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({type : 'SETUSER',payload : create_user})
                history.push('/home')
            })

          })

        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Error ==> : ' ,errorMessage)
          });
    }
}

const get_users = (data) => {
    return (dispatch) =>{
        let users =[]

        firebase.database().ref('/').child('users').on('child_added',(data)=>{
            users.push(data.val())
        })
        console.log(users)
        dispatch({type : 'GETUSERS' ,    payload:    users})

    }
}

export {
    facebook_login,
    get_users
}
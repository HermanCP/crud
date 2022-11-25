import moment from "moment";
import Realm from "realm";


class UserSchema extends Realm.Object { }
UserSchema.schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
        id: 'int',
        userName: 'string',
        password: 'string',
        tanggal: 'string',

    }
};



let realm = new Realm({ schema: [UserSchema], schemaVersion: 4 });


let registerUser = (_user, _pass) => {
    realm.write(() => {
        let _id = 0;
        if (getAllUser().length > 0) _id = realm.objects('User').max('id') + 1;

        const regis = realm.create('User', {
            id: _id,
            userName: _user,
            password: _pass,
            tanggal: moment().format('DD/MM/YYYY')
        });
        console.log('regis', regis)
    });
}
let getAuth = async (_user, _pass) => {
    let tes = realm.objects('User').filtered(`userName == '${_user}' AND password == '${_pass}'`);
    let val = false
    for (const value of tes) {
        console.log('val', value)
        if (value.userName) {
            val = true
        }
    }
    return val
}

let getAllUser = () => {
    return realm.objects('User');
};

let deleteUser = (id) => {
    realm.write(() =>
        realm.delete(
            realm.objects('User').filter(userObj => userObj.id == id),
        ),
    );
}

let updateUser = (id, user, pass) => {
    const users = realm.objects('User');
    realm.write(() => {
        users.forEach(u => {
            if (u.id === id) {
                u.userName = user;
                u.password = pass
            }
        });
    });

}

export default realm;


export {
    getAuth,
    registerUser,
    getAllUser,
    updateUser,
    deleteUser
}
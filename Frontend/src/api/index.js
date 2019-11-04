const data = [
        {user: 'admin12', senha: '1212'},
        {user: 'teste123', senha:'123456'},
        {user: 'dog', senha: 'cat'},
    ];

export const login = (username, password) => {
        var x = data.find(x => x.user === username);
        if( x !== undefined){
            if(password === x.senha){
                return true;
            }
        } else {
            return false;
        }


}
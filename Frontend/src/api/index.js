import api from "../services/api";
import { login } from "../services/auth";

/*const data = [
        {user: 'admin12', senha: '1212'},
        {user: 'teste123', senha:'123456'},
        {user: 'dog', senha: 'cat'},
];
*/

export const loginAux = async (username, password) => {
    try{
        const response = await api.post("/login", {username, password});
        console.log(response.data.token);
        login(response.data.token);
        return true;
    } catch (err) {
        return false;
    }
}
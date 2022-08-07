import axios from 'axios'

const USER_API_BASE_URL = 'http://localhost:8081/api/users'

class UserService{

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }


    deleteUser(id){
        return axios.delete(USER_API_BASE_URL+"/"+id);
    }

    addUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

}

export default new UserService()
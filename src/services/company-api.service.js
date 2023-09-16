import axios from "axios";

class Company_API{
    get_all(){
        return axios.get('https://remotive.com/api/remote-jobs?category=software-dev&limit=1');
    }
}

export default Company_API;
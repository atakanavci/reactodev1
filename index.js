import axios from "axios";

async function getData(userId) {
const {data : userData} = await axios(`https://jsonplaceholder.typicode.com/users/`+userId);
const {data: postData} = await axios (`https://jsonplaceholder.typicode.com/posts/`+userId);

return {user:userData , post:postData}
}

export default getData
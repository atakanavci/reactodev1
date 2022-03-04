import getData from "./index.js";

const userAndPostData = await getData(1);
console.log(userAndPostData.user, userAndPostData.post)



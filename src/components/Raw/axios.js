import axios from 'axios';
/**base url to make requests to the movie database  */
const instance=axios.create({
    baseURL:"https://agile-wildwood-89087.herokuapp.com/https://netflix-clone-iti.herokuapp.com/getCat/",
    headers: {"Authorization" : `token ${localStorage.token}`}
});
export default instance;
// var myHeaders = new Headers();
// myHeaders.append("Authorization", "token ab26a06aea046e37637cb4f5f512229421f2029b");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://netflix-clone-iti.herokuapp.com/getCat/{{categorie}}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
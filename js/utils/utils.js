import { setRouter } from "../router/router.js";
setRouter();

// Backend URL
const backendURL = "http://pace-backend.test";

// async function userLogged(){
//     if(localStorage.getItem("token")) {
//         document.querySelector("#user_logged").innerHTML = `<div class="spinner-border" role="status" width="10px" height="10px">
//         </div>`;
    
//         const response = await fetch(backendURL + "/api/profile/show", { 
//             headers: {
//                 Accept: "application/json",
//                 Authorization: "Bearer " + localStorage.getItem("token"),
//             },
//         }); 
//         if(response.ok){
//         const json = await response.json();
//         // document.getElementById("user_logged").innerHTML = json.name;
//         }
//     } else {
//     }
// }

async function logout(){
    const btn_logout = document.getElementById("btn_logout");

    btn_logout.onclick = async () => {

    document.querySelector(".logout").innerHTML = `<div class="spinner-border" role="status" width="10px" height="10px">
    </div><span class="ms-2">logging out...</span>`;
    
    const response = await fetch(backendURL + "/api/logout", { 
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    }); 
    
    
    if(response.ok){
        localStorage.clear();
        window.location.pathname = "/login.html";
    }else{
        const json = await response.json();
        document.querySelector(".wrongbutton").click();
        document.querySelector("#wrongModal .wrong").innerHTML = json.message;
    }

}
}

export {backendURL, logout}
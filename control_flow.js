let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if(userRole === "manager"){
    accessLevel = "Limited access granted"
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole == "admin"){
        userMessage = "Welcome, Admin!"
    } else{
        userMessage = "Welcome, User!"
    }
} else{
    userMessage = "Please login to access the system";
}

console.log("User Message:" , userMessage);

let userType = "subscriber";
let userCatagory;

switch (userType){
    case "admin":
        userCatagory = "Administrator";
        break;
    case "manager":
        userCatagory = "Manager";
        break;
    case "subscriber":
        userCatagory = "Subscriber";
        break;
    default:
        userCatagory = "Unknown";
}

console.log("User Catagory:", userCatagory)

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);
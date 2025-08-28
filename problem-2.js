function sendNotification(email) {
    let part = email.split("@");

    if (part.length === 2) {
        let username = part[0];
        let domain = part[1];

        return `${username} sent you an email from ${domain}`;
    }

    else{
        return "Invalid Email";
    }
}



const email1 = sendNotification('omarfarhatul@gmail.com');
console.log(email1);
console.log(sendNotification("zihad@gmail.com")); 

console.log(sendNotification("farhan34@yahoo.com")); 


console.log(sendNotification("nadim.naem5@outlook.com")); 

console.log(sendNotification("fahim234.hotmail.com")); 

console.log(sendNotification("sadia8icloud.com")); 


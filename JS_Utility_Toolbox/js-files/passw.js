export function Passwstren(password) {

    if (!password) return "NULL(enter password):/";
    let score = 0;
    if (password.length >= 8) {
        score++;
    }
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let ch of password) {
        if (ch >= 'A' && ch <= 'Z') {
            hasUpper = true;
        } 
        else if (ch >= 'a' && ch <= 'z') {
            hasLower = true;
        } 
        else if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        } 
        else {
            hasSpecial = true;
        }
    }
     
    if(hasLower){score++;}
    if(hasUpper){score++;}
    if(hasNumber){score++;}
    if(hasSpecial){score++;}

    if(score===5||score===4){
        return "Strong";
    }

    if(score===3||score===2){
        return "Medium";
    }
    
    if(score===1||score===0){
        return "Weak";
    }

}

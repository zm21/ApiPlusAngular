export class LoginModel{
    public Email: string = "";
    public Password: string = "";

    isValid():boolean{
        if(this.Email!= "" && this.Password !=""){
            return true;
        }
        else{
            return false
        }
    }
}
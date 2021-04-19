export class RegisterModel{
    public Email: string = "";
    public Password: string = "";
    public ConfirmPassword: string = "";
    public Phone: string = "";
    public FullName: string = "";
    public Address: string = "";
    public Age: number = 0;

    isValid():boolean{
        if(this.Email!= "" && 
            this.Password !="" &&
            this.Phone != "" && 
            this.FullName != "" && 
            this.Address != "" && 
            this.ConfirmPassword != "" &&
            this.Age!= NaN &&
            this.Age>=15 && this.Age<=100){
            return true;
        }
        else{
            return false
        }
    }

    isEmail():boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.Email).toLowerCase());
    }
}
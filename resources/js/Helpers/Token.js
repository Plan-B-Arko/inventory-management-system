class Token{
     isValid(token){
        const payload = this.payload(token)
        if(payload){
            return payload.iss = "http://127.0.0.1:8000/api/auth/login" || "http://127.0.0.1:8000/api/auth/register" ? true : false
        }
        return false
    }

        payload(token){
            const payload = token.split('.')[1] ;/*=========here i use this code for taken first part of token for sequirity purpose i will make it decode just one part from three part of token coz every token have three part===========*/
            console.log(token.split('.'),'token array[1]');
            return this.decode(payload)
        }

        decode(payload){
            return JSON.parse(atob(payload))

        }

}

export default Token = new Token()


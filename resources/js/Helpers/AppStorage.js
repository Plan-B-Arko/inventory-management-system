class AppStorage{
storeToken(token){
    localStorage.setItem('token',token);
}
storeUser(user){
    localStorage.setItem('user',user); /*<=====here (first 'user' is name and another user is value)====>*/
}

store(token,user){
this.storeToken(token)
this.storeUser(user)
}

clear(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');

}
getToken(){
    localStorage.getItem(token);/*=========here token is value=========*/
}
getUser(){
    localStorage.getItem(user);/*=========here user is value=========*/
}

}

export default AppStorage = new AppStorage();

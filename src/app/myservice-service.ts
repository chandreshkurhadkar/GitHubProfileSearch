import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MyserviceService {
    private username: string;
    private client_id = 'dfbd8dbebec7b81b9b2f';
    private client_secret = 'acedcfe56d9e2a744fc972e70df4761e58fc9194';
    constructor(private http:HttpClient){
        console.log('Github Service Ready...');
        this.username = 'bradtraversy';
    }
    getUser(){
        return this.http.get('http://api.github.com/users/'+ this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
    }

    getRepository(){
        return this.http.get('http://api.github.com/users/'+ this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
    }

    updateUser(username:string)
    {   
        this.username = username;
    }
}

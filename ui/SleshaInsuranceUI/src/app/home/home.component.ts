import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private apServ:AppService){

  }

  now:Date=new Date();
  offerLeft=''
  ngOnInit(){
    this.apServ.userLoggedIn.subscribe(res=>{
      if(res!=''){
          this.router.navigateByUrl('/userHome')
      }
    })
    let x=new Date(2023,1,13);
    this.offerLeft=Math.ceil(this.now.getTime()-(x.getTime())/(1000 * 3600 *24))+' Days';
  }

}

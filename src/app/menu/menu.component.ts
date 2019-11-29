import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  mobiles=[
    {id:1, brand:"mi"},
    {id:2, brand:"realme"},
    {id:3, brand:"oppo"},
    {id:4, brand:"samsung"},
    {id:5, brand:"vivo"},
    {id:6, brand:"lenovo"}
    ];


  constructor() { 
    

    
  }

  ngOnInit() {
    
  }

}

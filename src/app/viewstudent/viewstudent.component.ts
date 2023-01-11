import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

   name=""
  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data:any)=>{
        this.name=data

      }
    )
  }

  
  
  ngOnInit(): void {
  }

}

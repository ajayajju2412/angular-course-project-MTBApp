import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-theatre',
  templateUrl: './add-theatre.component.html',
  styleUrls: ['./add-theatre.component.css']
})
export class AddTheatreComponent implements OnInit {
  theatreForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  goBack(){

  }

  addTheatre(){
    //call admin service
  }

}

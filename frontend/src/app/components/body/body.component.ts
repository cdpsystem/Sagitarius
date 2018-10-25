import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {


    code = `
        function myFunction() {
        document.getElementById("demo1").innerHTML = "Hello there!";
        document.getElementById("demo2").innerHTML = "How are you?";
        }
    `

  constructor() { }

  ngOnInit() {
  }

}

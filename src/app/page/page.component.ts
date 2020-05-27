import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  data:any;
  huyen:any;
  tinh="";
  constructor() { }

  ngOnInit(): void {
    fetch('./assets/data.json').then(res=>res.json()).then(json=>{     
        const peopleArray = Object.keys(json).map(i => json[i])
        this.data = peopleArray; 
    });
  }
  onChange($event) {    
    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];     
      if(element.name==this.tinh){          
        const peopleArraya = Object.keys(element.districts).map(i => element.districts[i])
        this.huyen=peopleArraya;               
      }     
      
    }      
   
  }
}


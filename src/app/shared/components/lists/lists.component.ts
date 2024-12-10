import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
     placesToVisit : Array<string> = ['Lonavala','Mahabaleshwar','Sinhgad Fort', 'Gateway Of India', 'Khandala Ghat'];
     cricketersNames : Array<string> = [ "Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Sunil Gavaskar", "Yuvraj Singh"];
     frameWorks : Array<string> = ["React.js", "Vue.js", "Angular","Node.js", "Express.js"];
}

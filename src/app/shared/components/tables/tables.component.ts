import { Component, OnInit } from '@angular/core';
import { employe, Imembers, product } from '../../models/model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent{
  investmentsArray : Array<Imembers> = [
    {
    id : 100,
    name:'Alfred Alan',
    contact : 8747094803,
    email : 'aalan2@gmail.com',
    investments : 'stocks'
   },
   {
    id : 101,
    name:'Alison smart',
    contact : 6535774453,
    email : 'asmart5@gmail.com',
    investments : 'Residental Property'
   },
   {
    id : 102,
    name:'Alfred smart',
    contact : 8747094803,
    email : 'aalan2@gmail.com',
    investments : 'stocks'
   },
   {
    id : 103,
    name:'Ally Emery',
    contact : 7452690504,
    email : 'alley72@gmail.com',
    investments : 'Residental Property'
   },
   {
    id : 104,
    name:'Andrew Phips',
    contact : 9874970322,
    email : 'andy8@gmail.com',
    investments : 'stocks'
   }
];

employeArray : Array<employe> = [
  {
    id : 110,
    name : "Tiger Nexon",
    age : 46,
    position : "System Architecture",
    salary : '$320,800'
  },
  {
    id : 111,
    name : "Cedric Kelly",
    age : 25,
    position : "Javascript Developer",
    salary : '$433,060'
  },  {
    id : 112,
    name : "Sonya Frost",
    age : 35,
    position : "Software Engineer",
    salary : '$103,600'
  },
  {
    id : 113,
    name : "Quinn Flynn",
    age : 60,
    position : "Support Lead",
    salary : '$300,312'
  },
  {
    id : 114,
    name : "Dia Rios",
    age : 32,
    position : "Personal Lead",
    salary : '$90,200'
  }
];

productArray : Array<product> = [
  {
    orderId : 200398,
    productName : "Iphone",
    quantity : 1,
    deliveryDate : '2024-09-29',
    totalPrice : '$999.00'
  },
  {
    orderId : 200397,
    productName : "Samsung",
    quantity : 1,
    deliveryDate : '2024-12-2',
    totalPrice : '$756.00'
  },
  {
    orderId : 200396,
    productName : "Game Console Controller",
    quantity : 3,
    deliveryDate : '2024-08-13',
    totalPrice : '$22.00'
  },
  {
    orderId : 200395,
    productName : "USB 3.0 Cable",
    quantity : 2,
    deliveryDate : '2024-06-26',
    totalPrice : '$30.00'
  },
  {
    orderId : 200394,
    productName : "SmartWatch 4.0 LTE",
    quantity : 1,
    deliveryDate : '2024-12-7',
    totalPrice : '$1494.00'
  }
]

}

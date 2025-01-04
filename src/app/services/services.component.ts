import { Component } from '@angular/core';
import { NgFor} from '@angular/common';
import { routes } from '../app.routes';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ NgFor, RouterModule ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  service = [
    {id:1, name:"Technical Support", desc: "provides assistance to users by troubleshooting and resolving hardware, software, or network-related issues", look:"https://wallpaperaccess.com/full/378768.jpg"},  
    {id:2, name:"Expert Advise", desc: "specialized guidance and insights from a knowledgeable professional to help make informed decisions", look:"https://wallpaperaccess.com/full/378768.jpg"},
    {id:3, name:"Ouick Help", desc: "delivers fast, efficient solutions to resolve immediate issues or answer urgent questions", look: "https://wallpaperaccess.com/full/378768.jpg"},
    {id:4, name:"Customer Support", desc: "assists clients by addressing inquiries, resolving issues, and ensuring a positive experience with products or services", look: "https://wallpaperaccess.com/full/378768.jpg"},
    {id:5, name:"Call Center", desc:"handles incoming and outgoing customer communications, providing support, information, and services ", look: "https://wallpaperaccess.com/full/378768.jpg"},
    {id:6, name:"Easy Solutions", desc:"provide straightforward, simple answers to problems, ensuring quick and efficient resolution", look:"https://wallpaperaccess.com/full/378768.jpg"},
    {id:7, name:"Chetan Chouhan", desc:"inches in extra", look: "https://wallpaperaccess.com/full/378768.jpg"},
    {id:8, name:"Tanmay Ghanekar", desc:"Inches in plus", look: "https://wallpaperaccess.com/full/378768.jpg"},
    
  ]
}
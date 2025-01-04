import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css'] // Corrected here
})
export class ServicesDetailComponent {
  service: { id: number; name: string; desc: string } | undefined;

  services = [
    { id: 1, name: "Technical Support", desc: "provides assistance to users by troubleshooting and resolving hardware, software, or network-related issues" },
    { id: 2, name: "Expert Advise", desc: "specialized guidance and insights from a knowledgeable professional to help make informed decisions" },
    { id: 3, name: "Quick Help", desc: "delivers fast, efficient solutions to resolve immediate issues or answer urgent questions" }, // Fixed typo "Ouick" to "Quick"
    { id: 4, name: "Customer Support", desc: "assists clients by addressing inquiries, resolving issues, and ensuring a positive experience with products or services" },
    { id: 5, name: "Call Center", desc: "handles incoming and outgoing customer communications, providing support, information, and services " },
    { id: 6, name: "Easy Solutions", desc: "provide straightforward, simple answers to problems, ensuring quick and efficient resolution" },
    { id: 7, name: "Chetan Chouhan", desc: "inches in extra" },
    {id:8, name:"Tanmay Ghanekar", desc:"Inches in plus"},
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service = this.services.find((service) => service.id === id);
  }
}

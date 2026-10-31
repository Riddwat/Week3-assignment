import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  // These arrays store the footer links so they can be
  // displayed without repeating the same HTML structure.

  categories = [
    'Laces',
    'Wax Prints',
    'Shoes & Bags',
    'Vlisco',
    'Getzner',
    'Swiss Voile',
    'Head Gear',
    'Brocade',
    'Specials'
  ];

  quickLinks = [
    'About Empire Textiles',
    'Contact Us',
    'Testimonials',
    "FAQ's",
    'Shipping Details',
    'Uniforms',
    'Blog',
    'Create Wholesale Account',
    'Terms & Conditions',
    'Privacy Policy'
  ];
}
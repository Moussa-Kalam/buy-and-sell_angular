import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText: string = '';
  @Input() currentName: string = '';
  @Input() currentDescription: string = '';
  @Input() currentPrice: number = 0;

  name: string = '';
  description: string = '';
  price: number = 0;

  @Output() onSubmit = new EventEmitter<Listing>

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.name = this.currentName,
    this.description = this.currentDescription,
    this.price = this.currentPrice
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price)
    })
  }
}


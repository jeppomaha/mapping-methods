import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
  standalone: false,
})
export class CategoryPage implements OnInit {

  categoryName: string = '';
  subcategories: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryName = this.route.snapshot.paramMap.get('id') || '';

    const data: any = {
      'For Sale': ['Electronics', 'Furniture', 'Cars', 'Clothing'],
      'Housing': ['Apartments', 'Rooms', 'Sublets'],
      'Jobs': ['Full-Time', 'Part-Time', 'Gigs'],
      'Services': ['Computer', 'Beauty', 'Lessons'],
      'Community': ['Events', 'Groups', 'Classes']
    };

    this.subcategories = data[this.categoryName] || [];

  }
}


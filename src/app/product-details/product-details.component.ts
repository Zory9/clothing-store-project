import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Review, reviews } from '../reviews';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'product-details-component',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;

  public swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
  }

  public swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  }

  public reviews: Review[] = reviews;
  public products: Product[] = products;
  public product: Product;
  public selectedSize: string = 'XS';
  public selectedQuantity: number = 1;
  public selectedStar: number = 0;
  public reviewForm: FormGroup;

  constructor(private route: ActivatedRoute, private cartService: CartService, private fb: FormBuilder) {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product = this.getProduct(Number(productId));

    this.reviewForm = this.fb.group({
      opinion: ['', Validators.required]   
    });
  }

  public getProduct(id: number | null): Product {
    return this.products.filter(product => product.id === id)[0];
  }

  public addToCart(): void {
    this.product.size = this.selectedSize;
    this.cartService.addToCart(this.product, this.selectedQuantity);
  }

  public countStar(star: number): void {
    this.selectedStar = star;
  }

  public submitReview(): void {
    if (this.reviewForm.valid) {
      Swal.fire({
        title: 'Thank you!',
        text: "Your review was added successfully!",
        icon: 'success',
        confirmButtonText: 'Cool'
      })

      this.reviews.splice(0, 0, { name: 'Anonymous', review: this.reviewForm.value.opinion });

      this.reviewForm.reset();
      this.selectedStar = 0;
    } else {
      Swal.fire({
        title: 'Invalid form!',
        text: "Please fill in the fields in the form to submit your review!",
        icon: 'warning',
        confirmButtonText: 'Okay'
      })
    }
  }

  public cancelReview(): void {
    this.reviewForm.reset();
    this.selectedStar = 0;
  }
}

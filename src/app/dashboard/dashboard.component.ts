import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router:Router){}


  toyList= [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCBdJwY2WX7DD4otO-jYGPvLXZ5HpvG-5wg&s',
      name: 'Building Blocks Set',
      description: 'A colorful set of interlocking building blocks to enhance creativity and spatial skills in children.',
      price: 999,
      availability: false
    },
    {
      img: 'https://i5.walmartimages.com/asr/7b374133-d995-4a20-ae3a-461e0f3d89e8_1.e2b753f2620974f24275128f0cf00b19.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
      name: 'Remote Control Car',
      description: 'High-speed remote control car with durable design and rechargeable battery. Perfect for kids and adults alike.',
      price: 999,
      availability: false
    },
    {
      img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/stuffed-toy/s/u/c/cute-lena-love-bear-soft-stuffed-toy-for-baby-kids-birthday-gift-original-imah3g7yythegg7p.jpeg?q=90&crop=false',
      name: 'Plush Teddy Bear',
      description: 'Crafted from high-quality, eco-friendly wood, this charming teddy bear combines timeless design with durability. Its smooth finish and intricate details make it a perfect decorative piece or a cherished gift for all ages. A classic keepsake that exudes warmth and nostalgia!',
      price: 700 ,
      availability: true
    },
    {
      img: 'https://m.media-amazon.com/images/I/616R+g9Rt3L._AC_UF350,350_QL80_.jpg',
      name: 'Mobile',
      description: 'Interactive laptop toy with numbers, letters, and games to encourage early learning and development.',
      price: 4600,
      availability: false
    },
    {
      img: 'https://img.freepik.com/premium-photo/3d-illustration-empty-modular-doll-house-made-plastic-design-plain-background_1096167-146048.jpg',
      name: 'Dollhouse Playset',
      description: 'Beautifully crafted dollhouse with miniature furniture and accessories for imaginative play.',
      price: 1200,
      availability: false
    },
    {
      img: 'https://image.slidesdocs.com/responsive-images/background/colorful-jigsaw-puzzles-come-together-in-the-hands-of-a-blue-book-wielding-mascot-character-set-against-a-cheerful-yellow-rendering-powerpoint-background_53993d6362__960_540.jpg',
      name: 'Puzzle Game',
      description: 'Challenge your mind with our engaging and fun puzzle game, designed to improve problem-solving and cognitive skills. Suitable for all ages, it offers hours of entertainment while boosting logical thinking. Perfect for solo play or family bonding!Challenging and fun puzzle game that helps improve problem-solving and cognitive skills.',
      price: 300,
      availability: true
    },
    {
      img: 'https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=https%3A%2F%2Fyp-media.s3.amazonaws.com%2FyP-mplace%2FToys%2FYPB08LTGRLD2_o.jpg&resizeTo=450',
      name: 'Woolen Toys (With Name)',
      description: 'Set of 5 detailed action figures with movable joints for dynamic play.',
      price: 600,
      availability: true
    },
    {
      img: 'https://www.bluey.tv/wp-content/uploads/2020/07/Bandit-Chilli.jpg',
      name: 'Art and Craft Kit',
      description: 'Complete kit with paints, brushes, and craft materials to bring out the artist in every child.',
      price: 800,
      availability: true
    },
    {
      img: 'https://play-lh.googleusercontent.com/J1gHq5527hL8Col_w4qCH-GRNktfSzhtThCT04os6c5EnZKLVhxqMQyT-CuNrX3X9G4=w526-h296-rw',
      name: 'Musical Keyboard Toy',
      description: 'Unleash your inner musician with our Musical Keyboard Game, a fun and interactive way to learn and play melodies. Perfect for kids and beginners, it features light-up keys, engaging sound effects, and built-in songs to spark creativity. Start creating music effortlessly and enjoy hours of entertainment!',
      price: 2500,
      availability: true
    },
    {
      img: 'https://snooplay.in/cdn/shop/products/doctorset18_400x.png?v=1608822187',
      name: 'Doctor Kit',
      description: 'An exciting kit with hands-on experiments to spark a love for science and discovery.',
      price: 700,
      availability: false
    },
    {
      img: 'https://5.imimg.com/data5/ECOM/Default/2024/7/434776586/FL/NZ/LI/223087674/03-100373d8-e208-45d6-be25-bf056cddf903.jpg',
      name: 'Remote Control Helicopter',
      description: 'Lightweight and durable remote-controlled helicopter with stable flight features.',
      price:1000,
      availability: true
    },
    {
      img: 'https://img.freepik.com/premium-photo/colorful-toy-kitchen-set-with-utensils-play-food-splitbackground-table_941468-6671.jpg',
      name: 'Play Kitchen Set',
      description: 'Miniature kitchen set complete with utensils, pretend food, and appliances for role-playing fun.',
      price: 450,
      availability: false
    }
  ];



  onProductClick(name:any){
    this.router.navigateByUrl(`toy/${name}`)

  }

}

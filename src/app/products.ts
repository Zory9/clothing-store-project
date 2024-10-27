export interface Product {
  id: number;
  type: string;
  title: string;
  rating: number;
  price: number;
  description: string;
  details: string[];
  size?: string;
  quantity?: number;
}

export const products = [
  {
    id: 1,
    type: 'Nike Sportswear Essentials',
    title: "Women's Logo T-shirt 'Futura'",
    rating: 986,
    price: 53.9,
    details: [
        'Fabric: 100% cotton',
        'Machine wash',
        'Imported',
        'Colour Shown: Black',
        'Style: BV6175-010',
        'Country/Region of Origin: Cambodia, Vietnam, China, Malaysia'
    ],
    description:
      'The Nike Sportswear Essential T-Shirt sets you up with soft cotton jersey and a hem. Cottonfabric is soft and comfortable. Loose fit for a roomy feel.',
  },
  {
    id: 2,
    type: 'Nike Dri-FIT Advantage',
    title: "Women's Tennis Dress",
    rating: 1054,
    price: 169.99,
    details: [
        'Fabric: 80% polyester/20% elastane',
        'Machine wash',
        'Imported',
        'Colour Shown: Black',
        'Style: BV6175-010',
        'Country/Region of Origin: Cambodia'
    ],
    description:
      'Add a touch of sophistication to your game look in this extra-stretchy, slim-fitting tennis dress. The streamlined design consists of minimal layers, giving you a classic, tailored look. Unexpected cut-outs at the neck and back work with mesh and sweat-wicking tech to help keep you cool and comfortable on and off the court.',
  },
  {
    id: 3,
    type: 'Nike Sportswear Essentials',
    title: "Women's Cropped Logo T-shirt",
    rating: 890,
    price: 64.9,
    details: [
        'Fabric: 100% cotton',
        'Machine wash',
        'Imported',
        'Colour Shown: Dark Grey Heather',
        'Style: BV6175-063',
        'Country/Region of Origin: Cambodia, Vietnam, China, Malaysia'
    ],
    description:
      "Comfort that's cropped. The Nike Sportswear Essential T-Shirt sets you up with soft cotton jersey and a cropped hem.",
  },
  {
    id: 4,
    type: 'Nike Sportswear Trend',
    title: "Women's Cropped Tank",
    rating: 1560,
    price: 99.9,
    details: [
        'Fabric: 86% polyester/14% spandex',
        'Machine wash',
        'Imported',
        'Colour Shown: Dark Smoke Grey',
        'Style: DM7379-070',
        'Country/Region of Origin: Cambodia, Vietnam, China, Malaysia'
    ],
    description:
      'From the machines to the mat to the miles, this tank is designed for all the ways you work out. Soft, smooth fabric in a breathable cropped length keeps you cool and dry, while the allover animal print lets you show off your wild side. This product is made with at least 75% recycled polyester fibers.',
  },
  {
    id: 5,
    type: 'Nike Pro',
    title: "Women's Leggings",
    rating: 999,
    price: 69.99,
    details: [
        'Fabric: 83% polyester/17% spandex',
        'Machine wash',
        'Imported',
        'Colour Shown: Black',
        'Style: CZ9779-084',
        'Country/Region of Origin: Cambodia, Vietnam, China, Malaysia'
    ],
    description:
      'The Nike Pro Leggings are made with sweat-wicking fabric that and mesh across the calves to keep you cool and dry. Soft, stretchy fabric moves with you as you sprint, lunge and stretch. This product is made with at least 50% recycled polyester fibers.',
  },
  {
    id: 6,
    type: 'Nike Sportswear One Luxe',
    title: "Women's Training Tote Bag (26L)",
    rating: 895,
    price: 119.99,
    details: [
        'Fabric: 64% polyester/36% nylon',
        'Spot clean',
        'Imported',
        'Colour Shown: Black',
        'Style: CV0058-010',
        'Country/Region of Origin: Cambodia, Vietnam, China, Malaysia'
    ],
    description:
      'The Nike One Luxe Bag is your solution to fitting everything into your day. From work or school to working out—the expandable design holds everything you need. It carries a laptop, yoga mat, hairstyling accessories and smaller packable totes to grab and go.',
  },
  {
    id: 7,
    type: 'Nike Pro',
    title: "Women's Shorts",
    rating: 1099,
    price: 74.99,
    details: [
        'Fabric: 78-83% polyester/17-22% elastane',
        'Machine wash',
        'Imported',
        'Colour Shown: Black',
        'Style: Style: CZ9857-010',
        'Country/Region of Origin: Cambodia, Vietnam, China, Malaysia'
    ],
    description:
      'The Nike Pro Shorts are made from stretchy, sleek and supportive fabric that wicks sweat to help you stay dry and comfortable during your workout. This product is made from at least 50% recycled polyester fibres.',
  },
  {
    id: 8,
    type: 'Nike Sportswear',
    title: "Women's Training Hoodie",
    rating: 1111,
    price: 108.9,
    details: [
        'Fabric: 91% polyester/9% elastane',
        'Machine wash',
        'Imported',
        'Colour Shown: Black/Dark Smoke Grey',
        'Style: DQ5546-010',
        'Country/Region of Origin: Cambodia, Vietnam, China, Malaysia'
    ],
    description:
      "Don't let a little cold come between you and your training. The hoodie is made of warm fleece that helps keep you warm before, during and after your workout. Branded with logo and color block detailing, a roomy fit can easily be worn over your workout clothes while dressing for a classic look.",
  },
];

let allProducts = [
  {
    id: 1,
    title: "فراولة",
    title_en: "Strawberry",
    image: "images/1.jpg",
    price: 10000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 2,
    title: "بصل",
    title_en: "Onion",
    image: "images/2.jpg",
    price: 13000,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 3,
    title: " طماطم",
    title_en: "Tomato",
    image: "images/3.jpg",
    price: 15000,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 4,
    title: "باذنجان",
    title_en: "Eggplant",
    image: "images/4.jpg",
    price: 12500,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 5,
    title: "بروکلی",
    title_en: "Broccoli",
    image: "images/5.jpg",
    price: 8500,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 7,
    title: "جزر",
    title_en: "Carrot",
    image: "images/7.jpg",
    price: 12000,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 8,
    title: "قرنبيط",
    title_en: "Cauliflower",
    image: "images/8.jpg",
    price: 8000,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 9,
    title: "خیار",
    title_en: "Cucumber",
    image: "images/9.jpg",
    price: 4000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 10,
    title: "ثوم",
    title_en: "Garlic",
    image: "images/10.jpg",
    price: 16500,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 11,
    title: "فلفل أخضر",
    title_en: "Sweet pepper",
    image: "images/11.jpg",
    price: 7000,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 12,
    title: "خس",
    title_en: "Lettuce",
    image: "images/12.jpg",
    price: 18000,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 13,
    title: "فلفل أحمر",
    title_en: "Red pepper",
    image: "images/13.jpg",
    price: 20000,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 14,
    title: "بطيخ",
    title_en: "Watermelon",
    image: "images/14.jpg",
    price: 8000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 15,
    title: "فطر",
    title_en: "Mushroom",
    image: "images/15.jpg",
    price: 25000,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 16,
    title: "موز",
    title_en: "Banana",
    image: "images/16.jpg",
    price: 47000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 17,
    title: "كوسة",
    title_en: "Pumpkin",
    image: "images/17.jpg",
    price: 13500,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 18,
    title: "آناناس",
    title_en: "Pineapple",
    image: "images/18.jpg",
    price: 25500,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 19,
    title: "لوز",
    title_en: "Almonds",
    image: "images/19.jpg",
    price: 55000,
    category: "مكسرات",
    category_en: "Nuts"
  },
  {
    id: 20,
    title: "تفاح",
    title_en: "Apple",
    image: "images/20.jpg",
    price: 12500,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 21,
    title: "بندق",
    title_en: "Hazelnut",
    image: "images/21.jpg",
    price: 45000,
    category: "مكسرات",
    category_en: "Nuts"
  },
  {
    id: 22,
    title: "فستق",
    title_en: "Pistachio",
    image: "images/22.jpg",
    price: 150000,
    category: "مكسرات",
    category_en: "Nuts"
  },
  {
    id: 23,
    title: "پرتقال",
    title_en: "Orange",
    image: "images/23.jpg",
    price: 12000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 24,
    title: "لب اسمر",
    title_en: "Sunflower seed",
    image: "images/24.jpg",
    price: 40000,
    category: "مكسرات",
    category_en: "Nuts"
  },
  {
    id: 25,
    title: "عين الجمل",
    title_en: "Walnut",
    image: "images/25.jpg",
    price: 50000,
    category: "مكسرات",
    category_en: "Nuts"
  },
  {
    id: 26,
    title: "كرز",
    title_en: "Cherry",
    image: "images/26.jpg",
    price: 60000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 27,
    title: "تين",
    title_en: "Fig",
    image: "images/27.jpg",
    price: 55000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 28,
    title: "بسلة خضراء",
    title_en: "Green Peas",
    image: "images/28.jpg",
    price: 30000,
    category: "حبوبات",
    category_en: "Beans"
  },
  {
    id: 29,
    title: "کیوی",
    title_en: "Kiwi",
    image: "images/29.jpg",
    price: 20000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 30,
    title: "لوبیا خضراء",
    title_en: "Green beans",
    image: "images/30.jpg",
    price: 17000,
    category: "حبوبات",
    category_en: "Beans"
  },
  {
    id: 31,
    title: "لوبیا حمراء",
    title_en: "Red beans",
    image: "images/31.jpg",
    price: 22000,
    category: "حبوبات",
    category_en: "Beans"
  },
  {
    id: 32,
    title: "العنب",
    title_en: "Grape",
    image: "images/32.jpg",
    price: 24000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 33,
    title: "لیمون",
    title_en: "Lemon",
    image: "images/33.jpg",
    price: 55000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 34,
    title: "كانتلوب",
    title_en: "Cantaloupe",
    image: "images/34.jpg",
    price: 8000,
    category: "فاكهة",
    category_en: "Fruit"
  },
  {
    id: 35,
    title: "عدس",
    title_en: "Lentils",
    image: "images/35.jpg",
    price: 13000,
    category: "حبوبات",
    category_en: "Beans"
  },
  {
    id: 36,
    title: "فجل",
    title_en: "Radish",
    image: "images/36.jpg",
    price: 4000,
    category: "خضراوات",
    category_en: "Vegetables"
  },
  {
    id: 37,
    title: "ذرة",
    title_en: "Corn",
    image: "images/37.jpg",
    price: 12000,
    category: "خضراوات",
    category_en: "Vegetables"
  }
];

export default allProducts;

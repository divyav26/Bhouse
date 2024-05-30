// footer 
import { RxCross2 } from "react-icons/rx";

export const Customer =[
   " Order Tracking",
    "Property Management",
    "My Account",
    "Build Wardrobes",
    "Floor Coverings",
]

export const Category =[
    "Home Selling",
    "Property Management",
    "Interior Design",
    "Build Wardrobes",
    "Floor Coverings",
]

// nav 

export const links = [
    {
      id: 1,
      title: 'Home +',
      path: '/',
      sublink: [
        { name: "Home Style 01", link: "/home01" },
        { name: "Home Style 02", link: "/home02" },
        { name: "Home Style 03", link: "/home03" },
        { name: "Home Style 04", link: "/home04" },
        { name: "Home Style 05", link: "/home05" },
      ],
    },
    {
      id: 2,
      title: 'About Us',
      path: '/about',
    },
    {
      id: 3,
      title: 'Page +',
      path: '/',
      sublink: [
        { name: "Team +", link: "/", children: [
            { id: 1, name: "Team Style 1", link: "/team1"  },
            { id: 2, name: "Team Style 2", link: "/team2"  }
          ] 
        },
        { name: "Pricing Plane", link: "/" },
        { name: "Services +", link: "/", children: [
            { id: 1, name: "Services", link: "/services" },
            { id: 2, name: "Services Details", link: "/servicesdetails"  }
          ] 
        },
        { name: "Portfolio +", link: "", children: [
            { id: 1, name: "Portfolio",link: "/portfolio"  },
            { id: 2, name: "Portfolio Details",link: "/portfoliodetails"  }
          ] 
        },
        { name: "Shop +", link: "", children: [
            { id: 1, name: "Cart",link: "/cart"  },
            { id: 2, name: "CheckOut",link: "/checkout"  },
            { id: 3, name: "Wishlist",link: "/whishlist"  }
          ] 
        },
        { name: "User +", link: "", children: [
            { id: 1, name: "Login",link: "/signin"  },
            { id: 2, name: "Register",link: "/signup"  },
            { id: 3, name: "Forget Password",link: "/ForgetPassword"  },
            { id: 4, name: "My Account",link: "/myaccount"  }
          ] 
        },
        { name: "Faq", link: "/faq" },
        { name: "404 Error", link: "/error" },
      ],
    },
    {
      id: 4,
      title: 'Shop +',
      path: '/',
      sublink: [
        { name: "Shop", link: "/shop" },
        { name: "Shop Grid", link: "/shopgrid" },
        { name: "Shop 2 Columns", link: "/shop2col" },
        { name: "Shop Left Sidebar", link: "/shopleft" },
        { name: "Shop Right Sidebar", link: "/shopright" },
        { name: "Shop Products", link: "/singleproduct" },
      ],
    },
    {
      id: 5,
      title: 'Blog +',
      path: '/',
      sublink: [
        { name: "Blog", link: "/blog" },
        { name: "Blog Grid", link: "/bloggrid" },
        { name: "Blog Left Sidebar", link: "/blogleft" },
        { name: "Blog Right Sidebar", link: "/blogright" },
        { name: "Blog Products", link: "/blogdetails" },
      ],
    },
    {
      id: 6,
      title: 'Contact Us',
      path: '/contact',
    },
  ];

export const PortfolioData =[
  {
    id:1,
    category:'Apartments',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/1.jpg',
  },
  {
    id:2,
    category:'Apartments',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/3.jpg',
  },
  {
    id:3,
    category:'Apartments',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/7.jpg',
  },
  {
    id:4,
    category:'Apartments',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/8.jpg',
  },
  {
    id:5,
    category:'Desing',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/3.jpg',
  },
  {
    id:6,
    category:'Desing',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/4.jpg',
  },
  {
    id:7,
    category:'Desing',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/6.jpg',
  },
  {
    id:8,
    category:'Desing',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/9.jpg',
  },
  {
    id:9,
    category:'Interior',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/1.jpg',
  },
  {
    id:10,
    category:'Interior',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/2.jpg',
  },
  {
    id:11,
    category:'Interior',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/9.jpg',
  },
  {
    id:12,
    category:'Interior',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/4.jpg',
  },
  {
    id:13,
    category:'Interior',
    img:'https://preetheme.com/html/bhouse/assets/img/portfolio/8.jpg',
  },

]

export const cartTable =[
  {
    id:1,
    img:'https://preetheme.com/html/bhouse/assets/img/product/1.jpg',
    name:'PRODUCT NAME',
    untilprice:'$260.00',
    qty:'1',
    subtotal:'$260.00	',
    action:<RxCross2 />
  },
  {
    id:2,
    img:'https://preetheme.com/html/bhouse/assets/img/product/2.jpg',
    name:'PRODUCT NAME',
    untilprice:'$260.00',
    qty:'1',
    subtotal:'$260.00	',
    action:<RxCross2 />
  },
  {
    id:3,
    img:'https://preetheme.com/html/bhouse/assets/img/product/3.jpg',
    name:'PRODUCT NAME',
    untilprice:'$260.00',
    qty:'1',
    subtotal:'$260.00	',
    action:<RxCross2 />
  }
]

//home
export const apartments = [
  {
    id:1,
    category:'thestudio',
    heading:'The Studio',
    para:'There are many variations of passags of Lorem Ipsum available, but the majority have suffered alteration in some, by injected humour, or randomised words which dont look even slighly believable ',
    total:'Total Area',
    sq1:'2800 Sq. Ft',
    bad1:'BedRoom',
    sq2:'150Sq. Ft',
    bad2:'Bathroom',
    Bel:'Belcony/Pets',
    all:'Allowed',
    lou:'Lounge',
    sq3:'650 Sq. Ft',
    img:'https://preetheme.com/html/bhouse/assets/img/int.jpg'

  },

  {
    id:2,
    category:'deluxe',
    heading:'Deluxe',
    para:'There are many variations of passags of Lorem Ipsum available, but the majority have suffered alteration in some, by injected humour, or randomised words which dont look even slighly believable ',
    total:'Total Area',
    sq1:'2800 Sq. Ft',
    bad1:'BedRoom',
    sq2:'150Sq. Ft',
    bad2:'Bathroom',
    Bel:'Belcony/Pets',
    all:'Allowed',
    lou:'Lounge',
    sq3:'650 Sq. Ft',
    img:'https://preetheme.com/html/bhouse/assets/img/int.jpg'

  },

  {
    id:3,
    category:'penthouse',
    heading:'Pent House',
    para:'There are many variations of passags of Lorem Ipsum available, but the majority have suffered alteration in some, by injected humour, or randomised words which dont look even slighly believable ',
    total:'Total Area',
    sq1:'2800 Sq. Ft',
    bad1:'BedRoom',
    sq2:'150Sq. Ft',
    bad2:'Bathroom',
    Bel:'Belcony/Pets',
    all:'Allowed',
    lou:'Lounge',
    sq3:'650 Sq. Ft',
    img:'https://preetheme.com/html/bhouse/assets/img/int.jpg'

  },

  {
    id:4,
    category:'topgarden',
    heading:'Top Garden',
    para:'There are many variations of passags of Lorem Ipsum available, but the majority have suffered alteration in some, by injected humour, or randomised words which dont look even slighly believable ',
    total:'Total Area',
    sq1:'2800 Sq. Ft',
    bad1:'BedRoom',
    sq2:'150Sq. Ft',
    bad2:'Bathroom',
    Bel:'Belcony/Pets',
    all:'Allowed',
    lou:'Lounge',
    sq3:'650 Sq. Ft',
    img:'https://preetheme.com/html/bhouse/assets/img/int.jpg'

  },
  {
    id:5,
    category:'double height',
    heading:'Double Height',
    para:'There are many variations of passags of Lorem Ipsum available, but the majority have suffered alteration in some, by injected humour, or randomised words which dont look even slighly believable ',
    total:'Total Area',
    sq1:'2800 Sq. Ft',
    bad1:'BedRoom',
    sq2:'150Sq. Ft',
    bad2:'Bathroom',
    Bel:'Belcony/Pets',
    all:'Allowed',
    lou:'Lounge',
    sq3:'650 Sq. Ft',
    img:'https://preetheme.com/html/bhouse/assets/img/int.jpg'

  },
]

//shop 

export const ShopCategories = ['Appartments','Picture Stodio','Office','Property Management','Interior Design','Build Wardrobes','Floor Coverings']

export const RecentPost =[
  {
    id:1,
    img:'https://preetheme.com/html/bhouse/assets/img/blog/1.jpg',
    title:'Five Ways to Develop a World Class Sales Operations',
    date:'18 September 2021',
  },
  {
    id:2,
    img:'https://preetheme.com/html/bhouse/assets/img/blog/2.jpg',
    title:'Five Ways to Develop a World Class Sales Operations',
    date:'18 September 2021',
  },
  {
    id:3,
    img:'https://preetheme.com/html/bhouse/assets/img/blog/3.jpg',
    title:'Five Ways to Develop a World Class Sales Operations',
    date:'18 September 2021',
  },
  {
    id:4,
    img:'https://preetheme.com/html/bhouse/assets/img/blog/4.jpg',
    title:'Five Ways to Develop a World Class Sales Operations',
    date:'18 September 2021',
  }
]

export const Tags =[
  'POPULATR','DESIGN','SERVICE','INTERIOR','APARTMENTS','OIL','FLOR','HOME SELLING','PROPERTY','MANAGEMENT'
]

export const Achives =[
  'September 2021',
 ' October 2021',
 ' August 2021',
 'July 2021',
  'June 2021',
]


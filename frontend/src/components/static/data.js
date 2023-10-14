import React from "react";
import { GiSunRadiations, GiFactory, GiSwordInStone, GiBank, GiPiggyBank, GiMailbox, GiFeather, GiSafetyPin, GiWhistle } from "react-icons/gi";

// navigation Data
export const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Best Sellers",
      url: "/best-sellers",
    },
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "Today's Deals",
      url: "/todaysDeals",
    },
    {
      title: "FAQ",
      url: "/faq",
    },
  ];
  
  // branding data
  export const brandingData = [
    {
      id: 1,
      title: "Daily Deals",
      description: "Save up to 25%",
      icon: <GiSunRadiations className="w-16 h-16 text-yellow-500" />,
    },
    {
      id: 2,
      title: "Affordable Prices",
      description: "Factory Direct Prices",
      icon: <GiFactory className="w-16 h-16 text-yellow-500" />,
    },
    {
      id: 3,
      title: "Secure Payments",
      description: "100% Protected Payments",
      icon: <GiSwordInStone className="w-16 h-16 text-yellow-500" />,
    },
    {
      id: 4,
      title: "Quality Products",
      description: "Top-notch Quality",
      icon: <GiBank className="w-16 h-16 text-yellow-500" />,
    },
    {
      id: 5,
      title: "Savings Account",
      description: "Start Saving Today",
      icon: <GiPiggyBank className="w-16 h-16 text-yellow-500" />,
    },
    {
      id: 6,
      title: "Fast Shipping",
      description: "Quick Delivery",
      icon: <GiMailbox className="w-16 h-16 text-yellow-500" />,
    },
    {
      id: 7,
      title: "Easy Returns",
      description: "Hassle-free Returns",
      icon: <GiFeather className="w-16 h-16 text-yellow-500" />,
    },
    {
      id: 8,
      title: "Safety First",
      description: "Your Safety Matters",
      icon: <GiSafetyPin className="w-16 h-16 text-yellow-500" />,
    },
    {
      id: 9,
      title: "Customer Support",
      description: "24/7 Customer Service",
      icon: <GiWhistle className="w-16 h-16 text-yellow-500" />,
    },
  ];
  
  
  // categories data
  export const categoriesData = [
    {
      id: 1,
      title: "Computers",
      subTitle: "",
      image_Url:
        "https://i.gadgets360cdn.com/products/large/alienware-x16-db-1094x800-1672745144.jpg",
    },
    {
      id: 2,
      title: "Fashion",
      subTitle: "",
      image_Url:
        "https://www.sciencenews.org/wp-content/uploads/2021/06/061521_mt_cosmetics_feat.jpg",
    },
    {
      id: 3,
      title: "Style and Accessories",
      subTitle: "",
      image_Url:
        "https://bobbysfashions.com/wp-content/uploads/2018/05/Style-Accessories-for-Men.jpg",
    },
    {
      id: 4,
      title: "Clothing",
      subTitle: "",
      image_Url:
        "https://cdn.shopify.com/s/files/1/0558/6413/1764/files/1_fbf588ca-9895-416a-874e-52892263d917_1024x1024.png",
    },
    {
      id: 5,
      title: "Shoes",
      subTitle: "",
      image_Url:
        "https://lajolla.com/wp-content/uploads/2022/01/Best-Shoe-Stores-San-Diego-1024x576.jpg",
    },
    {
      id: 6,
      title: "Birthday storeing",
      subTitle: "",
      image_Url:
        "https://cdn.thewirecutter.com/wp-content/media/2021/12/christmasgifts-2048px-1287618519-3x2-1.jpg",
    },
    {
      id: 7,
      title: "Pet Supplies",
      subTitle: "",
      image_Url: "https://i0.wp.com/mypetnutritionist.com/wp-content/uploads/2023/02/6295ff0be5bbeec3bf693a91_resized-image-Promo-14.jpeg",
    },
    {
      id: 8,
      title: "Electronics",
      subTitle: "",
      image_Url:
        "https://www.macworld.com/wp-content/uploads/2023/05/verizon-deal-post.jpg",
    },
    {
      id: 9,
      title: "Music and Games",
      subTitle: "",
      image_Url:
        "https://www.blitzwolfeurope.com/shop_ordered/90562/pic/gtk0/blitzwolf-bw-gtk0-gamer-fejhallgato-tarto-w07.jpg",
    },
    {
      id: 10,
      title: "Books and Originals",
      subTitle: "",
      image_Url:
        "https://cdn.create.vista.com/api/media/small/38411117/stock-photo-books-in-library-room",
    },
  ];
  
  // product Data
  export const productData = [
    {
      id: 1,
      category:"Computers",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space-gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://ecommerce.datablitz.com.ph/cdn/shop/files/0194253297352.jpg",
        },
        {
          public_id: "test",
          url: "https://ecommerce.datablitz.com.ph/cdn/shop/files/0194253297352.jpg",
        },
      ],
      shop: {
        name: "Apple Inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 1099,
      discount_price: 1049,
      rating: 4,
      total_sell: 35,
      stock: 10,
    },
    {
      id: 2,
      category:"Electronics",
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://xn----8sb1bezcm.xn--p1ai/resources/01/500/400/76/16/dd5f3b4e-2a06-4b1c-be4f-1c5b60c58b62.jpg",
        },
        {
          public_id: "test",
          url: "https://xn----8sb1bezcm.xn--p1ai/resources/01/500/400/76/16/dd5f3b4e-2a06-4b1c-be4f-1c5b60c58b62.jpg",
        },
      ],
      shop: {
        name: "Amazon Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 80,
      stock: 10,
      category:"Mobile & Tablets"
    },
    {
      id: 1,
      category:"Computers and Laptop",
      name: "MacBook pro M2 chipset 256gb ssd 8gb ram space gray color with apple 1 year warranty",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://ecommerce.datablitz.com.ph/cdn/shop/files/0194253297352.jpg",
        },
        {
          public_id: "test",
          url: "https://ecommerce.datablitz.com.ph/cdn/shop/files/0194253297352.jpg",
        },
      ],
      shop: {
        name: "Apple Inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 1099,
      discount_price: 1049,
      rating: 4,
      total_sell: 75,
      stock: 10,
      category:"Computers & Laptop"
    },
    {
      id: 4,
      category:"Books and Originals",
      name: "New Fashionable Watch for men 2023 with multiple colors",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://cdn.justluxe.com/articles/images/news/15911953627220.jpg",
        },
        {
          public_id: "test",
          url: "https://cdn.justluxe.com/articles/images/news/15911953627220.jpg",
        },
      ],
      shop: {
        name: "Rollex",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      category:"Books and Originals"
      },
      price: 100,
      discount_price: 79,
      rating: 4,
      total_sell: 12,
      stock: 10,
    },
    {
      id: 5,
      category:"Shoes",
      name: "New Trend shoes for gents with all sizes",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://sneakernews.com/wp-content/uploads/2021/06/jordan-point-lane-black-infrared-cz4166-006.jpg",
        },
        {
          public_id: "test",
          url: "https://sneakernews.com/wp-content/uploads/2021/06/jordan-point-lane-black-infrared-cz4166-006.jpg",
        },
      ],
      shop: {
        name: "Nike",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 120,
      discount_price: 89,
      rating: 5,
      total_sell: 49,
      stock: 10,
      category:"Shoes"
    },
    {
      id: 1,
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://9to5mac.com/wp-content/uploads/sites/6/2020/12/AirPods-Max-black.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Apple Inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
      category:"Music and Games"
    },
    {
      id: 4,
      name: "New Fashionable Watch for men 2023 with multiple colors",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://cdn.justluxe.com/articles/images/news/15911953627220.jpg",
        },
        {
          public_id: "test",
          url: "https://cdn.justluxe.com/articles/images/news/15911953627220.jpg",
        },
      ],
      shop: {
        name: "Rollex",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 100,
      discount_price: 79,
      rating: 4,
      total_sell: 62,
      stock: 10,
    },
    {
      id: 1,
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://9to5mac.com/wp-content/uploads/sites/6/2020/12/AirPods-Max-black.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Apple Inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
    },
    {
      id: 2,
      category:"Electronics",
      name: "Iphone 14 pro max 256 gb ssd and 8 gb ram silver colour",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://xn----8sb1bezcm.xn--p1ai/resources/01/500/400/76/16/dd5f3b4e-2a06-4b1c-be4f-1c5b60c58b62.jpg",
        },
        {
          public_id: "test",
          url: "https://xn----8sb1bezcm.xn--p1ai/resources/01/500/400/76/16/dd5f3b4e-2a06-4b1c-be4f-1c5b60c58b62.jpg",
        },
      ],
      shop: {
        name: "Amazon Ltd",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      discount_price: 1099,
      rating: 5,
      total_sell: 20,
      stock: 10,
    },
    {
      id: 1,
      category:"Music and Games",
      name: "Gaming Headphone Asus with mutiple color and free delivery",
      description:
        "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
      image_Url: [
        {
          public_id: "test",
          url: "https://9to5mac.com/wp-content/uploads/sites/6/2020/12/AirPods-Max-black.jpg",
        },
        {
          public_id: "test",
          url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
        },
      ],
      shop: {
        name: "Apple Inc.",
        shop_avatar: {
          public_id: "test",
          url: "https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png",
        },
        ratings: 4.2,
      },
      price: 300,
      discount_price: 239,
      rating: 4.5,
      reviews: [
        {
          user: {
            // user object will be here
          },
          comment: "IT's so cool!",
          rating: 5,
        },
      ],
      total_sell: 20,
      stock: 10,
    },
  ];
  
  export const footerProductLinks = [
    {
      name: "About us",
      link: "/about"
    },
    {
      name: "Careers",
      link: "/carrers"
    },
    {
      name: "Store Locations",
    },
    {
      name: "Our Blog",
    },
    {
      name: "Reviews",
    },
  ];
  
  export const footercompanyLinks = [
    {
      name: "Game & Video",
    },
    {
      name: "Phone &Tablets",
    },
    {
      name: "Computers & Laptop",
    },
    {
      name: "Sport Watches",
    },
    {
      name: "Today's Deals",
    },
  ];
  
  export const footerSupportLinks = [
    {
      name: "FAQ",
    },
    {
      name: "Reviews",
    },
    {
      name: "Contact Us",
    },
    {
      name: "Shipping",
    },
    {
      name: "Live chat",
    },
  ];
  
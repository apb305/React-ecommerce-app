const products = [
    {
        id: 1,
        product_name: "MacBook Air",
        img: "img/products/macbookair.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "13.3-inch (diagonal) LED-backlit display with IPS technology; 2560-by-1600 native resolution at 227 pixels per inch with support for millions of colors. 1.1GHz dual-core Intel Core i3, Turbo Boost up to 3.2GHz, with 4MB L3 cache.",
        product_price: 1299.00,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 2,
        product_name: "MacBook Pro",
        img: "img/products/macbookpro.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "13.3‑inch (diagonal) LED-backlit display with IPS technology; 2560‑by‑1600 native resolution at 227 pixels per inch with support for millions of colors. 1.4GHz quad‑core 8th‑generation Intel Core i5, Turbo Boost up to 3.9GHz, with 128MB of eDRAM",
        product_price: 2799.00,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 3,
        product_name: "iPad Pro",
        img: "img/products/ipadpro.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "Liquid Retina display 11-inch (diagonal) LED-backlit Multi‑Touch display with IPS technology 2388-by-1668-pixel resolution at 264",
        product_price: 1449.00,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 4,
        product_name: "Asus ASUS ZenBook Pro",
        img: "img/products/asuszenbookpro.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "Intel® Core™ i9-8950HK processor",
        product_price: 2999.99,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 5,
        product_name: "iPhone 11 Pro Max 256GB",
        img: "img/products/iphone11promax.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "Display. 6.5 inches. 2688 x 1242 pixels.",
        product_price: 1249.00,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 6,
        product_name: "Galaxy Note10+ 256GB",
        img: "img/products/notetenplus.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
        product_price: 1099.99,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 7,
        product_name: "Surface Pro 7",
        img: "img/products/surfaceproseven.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
        product_price: 749.99,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 8,
        product_name: "Galaxy Tab S6 128GB 10.5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "10.5-inch AMOLED 2,560x1,600-pixel display",
        img: "img/products/tabssix.jpg",
        product_price: 649.99,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 9,
        product_name: "Surface Laptop 3",
        img: "img/products/surfacelaptopthree.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
        product_price: 799.99,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 10,
        product_name: "Mac Pro",
        img: "img/products/macpro.jpeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
        product_price: 5999.99,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 11,
        product_name: "Gaming PC",
        img: "img/products/gamingpc.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
        product_price: 2800.00,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },
    {
        id: 12,
        product_name: "Samsung Monitor",
        img: "img/products/samsungmonitor.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        specs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
        product_price: 999.99,
        addedToCart: "Add to cart",
        inCart: false,
        quantity: 1
    },    
]

export default products
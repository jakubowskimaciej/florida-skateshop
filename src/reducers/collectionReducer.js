const INITIAL_STATE = [
  {
    id: 1,
    title: 'hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Beige Ice Cream Hat',
        imageUrl:
          'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        price: 25,
      },
      {
        id: 2,
        name: 'Jeans Palm Cap',
        imageUrl:
          'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1004&q=80',
        price: 18,
      },
      {
        id: 3,
        name: 'Orange Desert Cap',
        imageUrl:
          'https://images.unsplash.com/photo-1560774358-d727658f457c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80',
        price: 35,
      },
      {
        id: 4,
        name: 'White MTLJTM Cap',
        imageUrl:
          'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        price: 25,
      },
      {
        id: 5,
        name: 'Black Baseball hat',
        imageUrl:
          'https://images.unsplash.com/photo-1604532057336-2c4a09f71330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        price: 18,
      },
      {
        id: 6,
        name: 'Black FE Cap',
        imageUrl:
          'https://images.unsplash.com/photo-1602337871614-a2bf032f4701?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 14,
      },
      {
        id: 7,
        name: 'Black Happy Hat',
        imageUrl:
          'https://images.unsplash.com/photo-1606483956061-46a898dce538?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1673&q=80',
        price: 18,
      },
      {
        id: 8,
        name: 'Red BN hat',
        imageUrl:
          'https://images.unsplash.com/photo-1466992133056-ae8de8e22809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2108&q=80',
        price: 14,
      },
      {
        id: 9,
        name: 'Worn-out black cap',
        imageUrl:
          'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: 'shoes',
    routeName: 'shoes',
    items: [
      {
        id: 10,
        name: 'Vans Old Skool',
        imageUrl:
          'https://images.unsplash.com/photo-1582405255296-e85bd3a7944f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2128&q=80',
        price: 220,
      },
      {
        id: 11,
        name: 'Nike Blazer',
        imageUrl:
          'https://images.unsplash.com/photo-1591370409347-2fd43b7842de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 280,
      },
      {
        id: 12,
        name: 'Nike SB Janoski',
        imageUrl:
          'https://static.super-shop.com/1243029-nike-sb-zoom-stefan-janoski-rm-shoes-court-blue-white-court-blue-w1920w.jpg',
        price: 110,
      },
      {
        id: 13,
        name: 'Vans Old-Skool Grey',
        imageUrl:
          'https://images.unsplash.com/photo-1618686081236-3ef081793aa6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1743&q=80',
        price: 160,
      },
      {
        id: 14,
        name: 'Vans Slip-on Checkerboard',
        imageUrl:
          'https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        price: 160,
      },
      {
        id: 15,
        name: 'Vans Old-Skool High',
        imageUrl:
          'https://images.unsplash.com/photo-1619646176605-b7417fb53b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 160,
      },
      {
        id: 16,
        name: 'Vans Old-Skool Grey',
        imageUrl:
          'https://images.unsplash.com/photo-1618686081236-3ef081793aa6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1743&q=80',
        price: 190,
      },
      {
        id: 17,
        name: 'Vans Old-Skool White',
        imageUrl:
          'https://images.unsplash.com/photo-1620237468009-9bbd18f2de23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: 'jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
      },
      {
        id: 20,
        name: 'Black Quilted Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 130,
      },
      {
        id: 21,
        name: 'Black Kangaroo Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1547140737-e85d9cd22ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
        price: 115,
      },
      {
        id: 22,
        name: 'Red Bomber jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1552573102-2b44b44d85b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 70,
      },
      {
        id: 23,
        name: 'Black Sleeveless Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1577471444692-4e7c23b51ce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
        price: 120,
      },
      {
        id: 24,
        name: 'Black Kangaroo Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1576775068104-807d10cdf0ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 115,
      },
      {
        id: 25,
        name: 'Red Winter Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1611099573232-1b7b44fdbcef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
        price: 220,
      },
    ],
  },
  {
    id: 4,
    title: 'women',
    routeName: 'women',
    items: [
      {
        id: 26,
        name: 'Nylon Sport Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1529144239979-4f4930902c60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        price: 25,
      },
      {
        id: 27,
        name: 'Washed Black hoodie',
        imageUrl:
          'https://images.unsplash.com/photo-1508216310976-c518daae0cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80',
        price: 130,
      },
      {
        id: 28,
        name: 'Black Sweatsuit Set',
        imageUrl:
          'https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80',
        price: 280,
      },
      {
        id: 29,
        name: 'Oversized White T-Shirt',
        imageUrl:
          'https://images.unsplash.com/photo-1597138227224-50057ab09f06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=985&q=80',
        price: 80,
      },
      {
        id: 30,
        name: 'Striped T-Shirt',
        imageUrl:
          'https://images.unsplash.com/photo-1580704122277-18c04b1a5f92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        price: 80,
      },
      {
        id: 31,
        name: 'Burgundy Top',
        imageUrl:
          'https://images.unsplash.com/photo-1512310604669-443f26c35f52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1034&q=80',
        price: 20,
      },

      {
        id: 32,
        name: 'Red Blouse',
        imageUrl:
          'https://images.unsplash.com/photo-1612115819136-51296f55dffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        price: 45,
      },
      {
        id: 33,
        name: 'Grey T-Shirt',
        imageUrl:
          'https://images.unsplash.com/photo-1513462447748-c1d2dd474b1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        price: 135,
      },
    ],
  },
  {
    id: 5,
    title: 'men',
    routeName: 'men',
    items: [
      {
        id: 34,
        name: 'Jeans Jacket',
        imageUrl:
          'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        price: 325,
      },
      {
        id: 35,
        name: 'Black Palm T-shirt',
        imageUrl:
          'https://images.unsplash.com/photo-1631443270442-a7f0af200dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        price: 20,
      },
      {
        id: 36,
        name: 'Black Hoodie',
        imageUrl:
          'https://images.unsplash.com/photo-1572495673508-62a6b369c380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 90,
      },
      {
        id: 37,
        name: 'Anti Social Social Club Hoodie',
        imageUrl:
          'https://images.unsplash.com/photo-1553227138-bff31be43f47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 200,
      },
      {
        id: 38,
        name: 'Pink Hoodie',
        imageUrl:
          'https://images.unsplash.com/photo-1617952125960-38d76f3659d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 90,
      },
      {
        id: 39,
        name: 'White Longsleeve',
        imageUrl:
          'https://images.unsplash.com/photo-1567535969727-54c71d449f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 25,
      },
      {
        id: 40,
        name: 'Black Blouse',
        imageUrl:
          'https://images.unsplash.com/photo-1614975059016-370131093171?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 25,
      },
      {
        id: 41,
        name: 'Red Supreme Hoodie',
        imageUrl:
          'https://images.unsplash.com/photo-1542327534-59a1fe8daf73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 250,
      },
    ],
  },
];

export const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  const currentDB = db.db(dbName);
  const myProducts = [
    {
      name: "bed",
      price: 799,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "bed",
      price: 999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/4993094/pexels-photo-4993094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4993094/pexels-photo-4993094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "bed",
      price: 899,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "mattress",
      price: 1200,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://www.ikea.co.il/images/Fittings/ikea/202/72/392/20272392_2_Enlarge.jpg",
        "https://www.ikea.co.il/images/Fittings/ikea/202/72/392/20272392_2_Enlarge.jpg",
      ],
    },
    {
      name: "mattress",
      price: 1200,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://www.ikea.co.il/images/Fittings/ikea/202/72/392/20272392_2_Enlarge.jpg",
        "https://www.ikea.co.il/images/Fittings/ikea/202/72/392/20272392_2_Enlarge.jpg",
      ],
    },
    {
      name: "mattress",
      price: 1200,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://www.ikea.co.il/images/Fittings/ikea/202/72/392/20272392_2_Enlarge.jpg",
        "https://www.ikea.co.il/images/Fittings/ikea/202/72/392/20272392_2_Enlarge.jpg",
      ],
    },
    {
      name: "mattress",
      price: 1200,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://www.ikea.co.il/images/Fittings/ikea/202/72/392/20272392_2_Enlarge.jpg",
        "https://www.ikea.co.il/images/Fittings/ikea/202/72/392/20272392_2_Enlarge.jpg",
      ],
    },
    {
      name: "blanket",
      price: 70,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/1421176/pexels-photo-1421176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1421176/pexels-photo-1421176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "blanket",
      price: 70,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/1421176/pexels-photo-1421176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1421176/pexels-photo-1421176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "blanket",
      price: 70,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/1421176/pexels-photo-1421176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1421176/pexels-photo-1421176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "blanket",
      price: 70,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/1421176/pexels-photo-1421176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1421176/pexels-photo-1421176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "night stand",
      price: 90,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    {
      name: "night stand",
      price: 90,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    {
      name: "night stand",
      price: 90,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    {
      name: "night stand",
      price: 90,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    {
      name: "pillow",
      price: 50,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "pillow",
      price: 50,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "pillow",
      price: 50,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "pillow",
      price: 50,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3682240/pexels-photo-3682240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "plant",
      price: 30,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/1590115/pexels-photo-1590115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1590115/pexels-photo-1590115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "plant",
      price: 30,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/1590115/pexels-photo-1590115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1590115/pexels-photo-1590115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "plant",
      price: 30,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/1590115/pexels-photo-1590115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1590115/pexels-photo-1590115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "plant",
      price: 30,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bedroom",
      images: [
        "https://images.pexels.com/photos/1590115/pexels-photo-1590115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1590115/pexels-photo-1590115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "arm chair",
      price: 799,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/5490303/pexels-photo-5490303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5490303/pexels-photo-5490303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "arm chair",
      price: 899,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/6198655/pexels-photo-6198655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6198655/pexels-photo-6198655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "arm chair",
      price: 899,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/6373660/pexels-photo-6373660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/6373660/pexels-photo-6373660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    {
      name: "arm chair",
      price: 1119,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/5490306/pexels-photo-5490306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5490306/pexels-photo-5490306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Sofa",
      price: 14999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Sofa",
      price: 30999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Sofa",
      price: 24999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/6758512/pexels-photo-6758512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6758512/pexels-photo-6758512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Sofa",
      price: 20999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Dining Table",
      price: 9999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/154161/pexels-photo-154161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/154161/pexels-photo-154161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Dining Table",
      price: 7999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Dining Table",
      price: 8999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/1843655/pexels-photo-1843655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1843655/pexels-photo-1843655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Dining Table",
      price: 6999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Rug",
      price: 1999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/3965509/pexels-photo-3965509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3965509/pexels-photo-3965509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Rug",
      price: 2999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Rug",
      price: 2999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Rug",
      price: 999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "living room",
      images: [
        "https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },

    {
      name: "Designed kitchen",
      price: 47999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/4740585/pexels-photo-4740585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4740585/pexels-photo-4740585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Designed kitchen",
      price: 48999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3718434/pexels-photo-3718434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Designed kitchen",
      price: 40999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6301168/pexels-photo-6301168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Designed kitchen",
      price: 39999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Dishwasher",
      price: 2999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Dishwasher",
      price: 2599,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/9551377/pexels-photo-9551377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/9551377/pexels-photo-9551377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Dishwasher",
      price: 3099,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/3829555/pexels-photo-3829555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3829555/pexels-photo-3829555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Dishwasher",
      price: 2099,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/5018049/pexels-photo-5018049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5018049/pexels-photo-5018049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Stove",
      price: 5490,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/4099350/pexels-photo-4099350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4099350/pexels-photo-4099350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Stove",
      price: 3490,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://cdn.pixabay.com/photo/2020/04/02/10/00/stove-4994402__340.jpg",
        "https://cdn.pixabay.com/photo/2020/04/02/10/00/stove-4994402__340.jpg",
      ],
    },
    {
      name: "Stove",
      price: 2490,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://cdn.pixabay.com/photo/2016/10/27/22/08/cooking-1776648__340.jpg",
        "https://cdn.pixabay.com/photo/2016/10/27/22/08/cooking-1776648__340.jpg",
      ],
    },
    {
      name: "Stove",
      price: 2490,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://cdn.pixabay.com/photo/2018/02/12/19/33/kitchen-3148954__340.jpg",
        "https://cdn.pixabay.com/photo/2018/02/12/19/33/kitchen-3148954__340.jpg",
      ],
    },
    {
      name: "Fridge",
      price: 8999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/5696115/pexels-photo-5696115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/5696115/pexels-photo-5696115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Fridge",
      price: 8999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/3637728/pexels-photo-3637728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/3637728/pexels-photo-3637728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Fridge",
      price: 8999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/6996088/pexels-photo-6996088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6996088/pexels-photo-6996088.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Fridge",
      price: 8999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "kitchen",
      images: [
        "https://images.pexels.com/photos/6964157/pexels-photo-6964157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6964157/pexels-photo-6964157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },

    {
      name: "Designed bathroom",
      price: 46999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Designed bathroom",
      price: 47999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Designed bathroom",
      price: 42999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Designed bathroom",
      price: 41999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Bath",
      price: 7999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/6585741/pexels-photo-6585741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6585741/pexels-photo-6585741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Bath",
      price: 8999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/7031564/pexels-photo-7031564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/7031564/pexels-photo-7031564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Bath",
      price: 5999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/6653896/pexels-photo-6653896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6653896/pexels-photo-6653896.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Bath",
      price: 9999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/6811176/pexels-photo-6811176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6811176/pexels-photo-6811176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Ceramic sink",
      price: 3599,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/4194712/pexels-photo-4194712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4194712/pexels-photo-4194712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Ceramic sink",
      price: 3999,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://cdn.pixabay.com/photo/2014/07/10/17/17/bathroom-389255__340.jpg",
        "https://cdn.pixabay.com/photo/2014/07/10/17/17/bathroom-389255__340.jpg",
      ],
    },
    {
      name: "Ceramic sink",
      price: 3199,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/6899546/pexels-photo-6899546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6899546/pexels-photo-6899546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Ceramic sink",
      price: 3299,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/6781116/pexels-photo-6781116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/6781116/pexels-photo-6781116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    {
      name: "Soap",
      price: 299,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/6766583/pexels-photo-6766583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6766583/pexels-photo-6766583.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Soap",
      price: 399,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/4202465/pexels-photo-4202465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/4202465/pexels-photo-4202465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Soap",
      price: 499,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/6187540/pexels-photo-6187540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6187540/pexels-photo-6187540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
    {
      name: "Soap",
      price: 599,
      description: "Lorem, ipsum dolor. Maiores.",
      category: "bath",
      images: [
        "https://images.pexels.com/photos/6690891/pexels-photo-6690891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/6690891/pexels-photo-6690891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
    },
  ];
  currentDB.collection(productsCollec).insertMany(myProducts, (err, docs) => {
    if (err) {
      throw err;
    }
    console.log(
      `inserted ${docs.insertedCount} documents to ${productsCollec} inside the ${dbName} DB`
    );
    db.close();
  });
});

// this file is used to centralize the image import and export
import bannerImage from '../assets/imgs/banner_img.jpg';

import burgerImg from '../assets/imgs/burger.jpg';
import lasagnaImg from '../assets/imgs/lasagna.jpg';
import pizzaImg from '../assets/imgs/pizza.jpg';
import saladImg from '../assets/imgs/salad.jpg';
import soupImg from '../assets/imgs/soup.jpg';
import friesImg from '../assets/imgs/fries.jpg';

import bringHome from '../assets/imgs/bring_home.jpg';
import freePizza from '../assets/imgs/free_pizza.jpg';
import iceTea from '../assets/imgs/ice_tea.jpg';
import offFriday from '../assets/imgs/off_friday.jpg';

import aboutImg from '../assets/imgs/about_img.jpg';

export const images = {
  bannerImg: bannerImage,
  cardsImg: [
    {
      img: burgerImg,
      alt: 'A image of a cheeseburger',
      title: 'Cheeseburger',
      price: '$5.00',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.',
    },
    {
      img: lasagnaImg,
      alt: 'A image of a lasagna',
      title: 'Lasagna',
      price: '$8.00',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.',
    },
    {
      img: pizzaImg,
      alt: 'A image of a pizza',
      title: 'Pizza',
      price: '$12.00',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.',
    },
    {
      img: saladImg,
      alt: 'A image of a salad',
      title: 'Salad',
      price: '$10.00',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.',
    },
    {
      img: soupImg,
      alt: 'A image of a soup',
      title: 'Soup',
      price: '$6.00',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.',
    },
    {
      img: friesImg,
      alt: 'A image of fries',
      title: 'Fries',
      price: '$4.00',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.',
    },
  ],
};

export const wnImages = [
  {
    img: bringHome,
    alt: 'Party at home with pizza, wings, canned drinks, and popcorn',
    title: 'BRING JOY TO YOUR HOME',
    description:
      'Lorem ipsum dolor sit amet consectur adipisicing elit. Dolor que, volutibus.',
    action: 'Order Now',
  },
  {
    img: freePizza,
    alt: 'People sharing a pizza with friends',
    title: 'FREE PIZZA FOR NEW MEMBERS',
    description:
      'Lorem ipsum dolor sit amet consectur adipisicing elit. Dolor que, volutibus.',
    action: 'Learn More',
  },
  {
    img: iceTea,
    alt: 'A glass of ice tea',
    title: 'BOTTOMLESS ICE TEA IS HERE',
    description:
      'Lorem ipsum dolor sit amet consectur adipisicing elit. Dolor que, volutibus.',
    action: 'Read More',
  },
  {
    img: offFriday,
    alt: 'Family enjoying their meal while cheerings their drinks',
    title: '50% OFF ALL ITEMS EVERY FRIDAY',
    description:
      'Lorem ipsum dolor sit amet consectur adipisicing elit. Dolor que, volutibus.',
    action: 'Order Now',
  },
];

export const aboutImage = {
  img: aboutImg,
  alt: 'Image of a person cooking',
};

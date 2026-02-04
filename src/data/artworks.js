export const CONTACT_EMAIL = 'markwilsonmalek@gmail.com';

export const artworks = [
  {
    id: 1,
    title: '🪡',
    image: '/images/art/art-01.jpeg',
    price: 150,
    status: 'available',
  },
  {
    id: 2,
    title: 'All the same',
    image: '/images/art/art-02.jpeg',
    price: 800,
    status: 'available',
  },
  {
    id: 3,
    title: 'Sunday afternoon',
    image: '/images/art/art-03.jpeg',
    price: 300,
    status: 'available',
  },
  {
    id: 4,
    title: 'Thinker I',
    image: '/images/art/art-04.jpg',
    price: 300,
    status: 'available',
  },
  {
    id: 5,
    title: 'Small man I',
    image: '/images/art/art-05.jpeg',
    price: 125,
    status: 'sold',
  },
  {
    id: 6,
    title: 'Charcoal Sculpture I',
    image: '/images/art/art-06.jpeg',
    price: 225,
    status: 'sold',
  },
  {
    id: 7,
    title: 'David',
    image: '/images/art/art-07.jpeg',
    price: 800,
    status: 'sold',
  },
  {
    id: 8,
    title: 'Lost boy',
    image: '/images/art/art-08.jpeg',
    price: 1000,
    status: 'available',
  },
  {
    id: 9,
    title: "You're just a man",
    image: '/images/art/art-09.jpeg',
    price: 300,
    status: 'sold',
  },
  {
    id: 10,
    title: "You'll smoke me out",
    image: '/images/art/art-10.jpeg',
    price: 1500,
    status: 'available',
  },
  {
    id: 11,
    title: 'Lost in the Feeling',
    image: '/images/art/art-11.jpeg',
    price: 2500,
    status: 'available',
  },
  {
    id: 12,
    title: 'I know you find it funny',
    image: '/images/art/art-12.jpeg',
    price: 225,
    status: 'available',
  },
  {
    id: 13,
    title: 'If now was then',
    image: '/images/art/art-13.jpeg',
    price: 150,
    status: 'available',
  },
  {
    id: 14,
    title: 'BLAH',
    image: '/images/art/art-14.jpeg',
    price: 550,
    status: 'available',
  },
  {
    id: 15,
    title: 'Slash',
    image: '/images/art/art-15.jpeg',
    price: 400,
    status: 'available',
  },
];

export const getArtworkById = (id) => {
  return artworks.find((artwork) => artwork.id === id);
};

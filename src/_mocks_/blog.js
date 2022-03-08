import { faker } from '@faker-js/faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Whiteboard Templates',
  'Tesla Cybertruck',
  'Designify',
  '✨Done is Done ✨',
  'Fresh Prince',
  'Six Socks Studio',
  'Vincenzo de cotiis’',
  'Simple, Great Looking',
  '40 Free Serif Fonts',
  'Examining the Evolution',
  'Katie Griffin loves',
  'The American Dream',
  'Illustration System Design',
  'CarZio-Delivery',
  'How to create a client-serverless',
  '3D & Motion Design',
  'RAYO',
  'Anthony Burrill',
  'Mind of Samuel Day',
  'Portfolio Review',
  'Akkers van Margraten',
  'Gradient Ticket icon',
  'Here’s a Dyson',
  'How to Animate a SVG'
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;

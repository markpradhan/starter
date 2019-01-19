export let posts = [
  {
    id: '082369ed-e093-48e0-9494-ad3b7867fd91',
    title: 'volutpat eleifend',
    body:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    published: false,
    author: '6abed91d-5e46-4850-a579-b273699d88fe',
  },
  {
    id: '17d58606-ae0f-41b6-aca9-4ddfd903ef07',
    title: 'consequat ut nulla sed accumsan felis',
    body:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    published: false,
    author: '6abed91d-5e46-4850-a579-b273699d88fe',
  },
  {
    id: 'f43111b0-b19c-4aae-90c2-8a75fff35bbe',
    title: 'cursus urna ut tellus nulla',
    body:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    published: false,
    author: '7a44ffaf-628a-40ba-8a20-62b72484e0df',
  },
  {
    id: 'bc17e9db-4049-4ba1-b645-f608b2754aaa',
    title: 'platea dictumst morbi vestibulum velit id',
    body:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    published: true,
    author: 'bc68a7d6-1047-4cb4-8566-35ee00873835',
  },
  {
    id: '807ddee1-32be-4269-96ab-b01d5bc26918',
    title: 'lectus vestibulum quam sapien',
    body:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    published: true,
    author: '8e7d761f-aafa-49c7-b327-7e2431b0851b',
  },
]

export let users = [
  {
    id: '6abed91d-5e46-4850-a579-b273699d88fe',
    name: 'Daryl Lapidus',
    age: 20,
    email: 'fsickamore0@csmonitor.com',
  },
  {
    id: '7a44ffaf-628a-40ba-8a20-62b72484e0df',
    name: 'Murvyn Bennoe',
    age: 18,
    email: 'ldenes1@photobucket.com',
  },
  {
    id: '5d515d80-c593-4aba-b6a8-97b2fffdc9e2',
    name: 'Jade Haxby',
    age: 30,
    email: 'mklimshuk2@wp.com',
  },
  {
    id: 'bc68a7d6-1047-4cb4-8566-35ee00873835',
    name: 'Chico Pietzker',
    age: 49,
    email: 'jgorgl3@umich.edu',
  },
  {
    id: '8e7d761f-aafa-49c7-b327-7e2431b0851b',
    name: 'Onida Betonia',
    age: 32,
    email: 'gboutflour4@exblog.jp',
  },
]

export let comments = [
  {
    id: 'db5927f6-1053-4830-b392-3cc69cf19542',
    text:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    author: '6abed91d-5e46-4850-a579-b273699d88fe',
    post: '082369ed-e093-48e0-9494-ad3b7867fd91',
  },
  {
    id: '8da1935f-c36e-46bb-a8e7-d600c54ee4e8',
    text:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    author: '6abed91d-5e46-4850-a579-b273699d88fe',
    post: '082369ed-e093-48e0-9494-ad3b7867fd91',
  },
  {
    id: '4f366270-0454-4f93-8f68-e0d40a47e99e',
    text:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    author: '6abed91d-5e46-4850-a579-b273699d88fe',
    post: '082369ed-e093-48e0-9494-ad3b7867fd91',
  },
  {
    id: '88a1d9b4-edc5-4cb9-9871-29650f82558d',
    text:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    author: '7a44ffaf-628a-40ba-8a20-62b72484e0df',
    post: '807ddee1-32be-4269-96ab-b01d5bc26918',
  },
  {
    id: '636dc586-6ab5-4a23-9c34-b0390e509b7f',
    text:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    author: '7a44ffaf-628a-40ba-8a20-62b72484e0df',
    post: '807ddee1-32be-4269-96ab-b01d5bc26918',
  },
]

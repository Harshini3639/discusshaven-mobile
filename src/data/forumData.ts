
export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  avatar: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
  category: string;
}

export interface Comment {
  id: string;
  content: string;
  author: string;
  avatar: string;
  timestamp: string;
  likes: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  postCount: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "General",
    description: "General discussions",
    icon: "message-circle",
    postCount: 24,
  },
  {
    id: "2",
    name: "Technology",
    description: "Tech discussions",
    icon: "mail",
    postCount: 18,
  },
  {
    id: "3",
    name: "Gaming",
    description: "Gaming discussions",
    icon: "message-square",
    postCount: 15,
  },
  {
    id: "4",
    name: "Sports",
    description: "Sports discussions",
    icon: "users",
    postCount: 12,
  },
];

export const posts: Post[] = [
  {
    id: "1",
    title: "Welcome to our new forum!",
    content: "This is the beginning of our new community. Let's make it awesome!",
    author: "Admin",
    avatar: "https://i.pravatar.cc/150?img=1",
    timestamp: "2023-09-15T10:30:00Z",
    likes: 42,
    category: "General",
    comments: [
      {
        id: "101",
        content: "So excited to be here!",
        author: "Sarah",
        avatar: "https://i.pravatar.cc/150?img=2",
        timestamp: "2023-09-15T11:15:00Z",
        likes: 8,
      },
      {
        id: "102",
        content: "Looking forward to the discussions!",
        author: "Mike",
        avatar: "https://i.pravatar.cc/150?img=3",
        timestamp: "2023-09-15T12:45:00Z",
        likes: 5,
      },
    ],
  },
  {
    id: "2",
    title: "Tips for mobile development",
    content: "Here are some tips for effective mobile development: 1. Always design for different screen sizes. 2. Test on real devices.",
    author: "DevGuru",
    avatar: "https://i.pravatar.cc/150?img=4",
    timestamp: "2023-09-14T15:20:00Z",
    likes: 27,
    category: "Technology",
    comments: [
      {
        id: "201",
        content: "Great tips! I would also add to consider battery usage.",
        author: "TechFan",
        avatar: "https://i.pravatar.cc/150?img=5",
        timestamp: "2023-09-14T16:30:00Z",
        likes: 12,
      },
    ],
  },
  {
    id: "3",
    title: "New game release discussion",
    content: "What do you all think about the latest AAA game release? Worth the hype?",
    author: "Gamer123",
    avatar: "https://i.pravatar.cc/150?img=6",
    timestamp: "2023-09-13T09:10:00Z",
    likes: 18,
    category: "Gaming",
    comments: [
      {
        id: "301",
        content: "I've been playing it for a week. Definitely worth it!",
        author: "GameFan",
        avatar: "https://i.pravatar.cc/150?img=7",
        timestamp: "2023-09-13T10:45:00Z",
        likes: 4,
      },
      {
        id: "302",
        content: "I'm still on the fence. The reviews are mixed.",
        author: "CasualGamer",
        avatar: "https://i.pravatar.cc/150?img=8",
        timestamp: "2023-09-13T11:30:00Z",
        likes: 2,
      },
    ],
  },
  {
    id: "4",
    title: "World Cup Predictions",
    content: "Who do you think will win the next World Cup?",
    author: "SportsNut",
    avatar: "https://i.pravatar.cc/150?img=9",
    timestamp: "2023-09-12T13:15:00Z",
    likes: 15,
    category: "Sports",
    comments: [
      {
        id: "401",
        content: "My money is on Brazil!",
        author: "SoccerFan",
        avatar: "https://i.pravatar.cc/150?img=10",
        timestamp: "2023-09-12T14:20:00Z",
        likes: 6,
      },
    ],
  },
  {
    id: "5",
    title: "Community Guidelines",
    content: "Please review our community guidelines to keep discussions respectful.",
    author: "Moderator",
    avatar: "https://i.pravatar.cc/150?img=11",
    timestamp: "2023-09-11T08:00:00Z",
    likes: 32,
    category: "General",
    comments: [],
  },
];

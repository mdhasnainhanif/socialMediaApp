import type { Conversation, Post, User } from '../types'

const avatar = (seed: string) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(seed)}`

const cover = (seed: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/1200/400`

export const currentUser: User = {
  id: 'u-me',
  name: 'Alex Rivera',
  username: 'alexrivera',
  avatarUrl: avatar('alex'),
  bio: 'Product designer · Coffee · Travel',
  followers: 1280,
  following: 342,
}

export const mockUsers: User[] = [
  currentUser,
  {
    id: 'u1',
    name: 'Sofia Chen',
    username: 'sofia',
    avatarUrl: avatar('sofia'),
    bio: 'Frontend dev · React',
    followers: 8900,
    following: 412,
    isFollowing: true,
    isOnline: true,
  },
  {
    id: 'u2',
    name: 'Marcus Johnson',
    username: 'marcusj',
    avatarUrl: avatar('marcus'),
    bio: 'Photographer',
    followers: 12000,
    following: 200,
    isFollowing: false,
    isOnline: false,
  },
  {
    id: 'u3',
    name: 'Priya Patel',
    username: 'priya',
    avatarUrl: avatar('priya'),
    bio: 'Founder @ Startup',
    followers: 4500,
    following: 890,
    isFollowing: true,
    isOnline: true,
  },
  {
    id: 'u4',
    name: 'Diego Alvarez',
    username: 'diego',
    avatarUrl: avatar('diego'),
    bio: 'Music · Design',
    followers: 2100,
    following: 600,
    isFollowing: false,
    isOnline: false,
  },
  {
    id: 'u5',
    name: 'Emma Wilson',
    username: 'emmaw',
    avatarUrl: avatar('emma'),
    bio: 'Writer',
    followers: 6700,
    following: 300,
    isFollowing: false,
    isOnline: true,
  },
]

export const mockPosts: Post[] = [
  {
    id: 'p-me',
    author: currentUser,
    content:
      'Sketching the next version of our feed. Feedback welcome in the comments.',
    imageUrl: 'https://picsum.photos/seed/me/800/500',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    likes: 56,
    comments: 12,
    shares: 4,
  },
  {
    id: 'p1',
    author: mockUsers[1],
    content:
      'Shipped a new dashboard today. Dark mode + subtle motion — small details add up.',
    imageUrl: 'https://picsum.photos/seed/post1/800/500',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    likes: 124,
    comments: 18,
    shares: 12,
  },
  {
    id: 'p2',
    author: mockUsers[2],
    content: 'Golden hour at the waterfront. Nothing beats this light.',
    imageUrl: 'https://picsum.photos/seed/post2/800/500',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    likes: 892,
    comments: 56,
    shares: 34,
  },
  {
    id: 'p3',
    author: mockUsers[3],
    content:
      'Reminder: your MVP is allowed to be “boring” if it solves the problem.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    likes: 2100,
    comments: 142,
    shares: 89,
  },
  {
    id: 'p4',
    author: mockUsers[4],
    content: 'Weekend hike — clear skies and good company.',
    imageUrl: 'https://picsum.photos/seed/post4/800/500',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    likes: 445,
    comments: 22,
    shares: 8,
  },
  {
    id: 'p5',
    author: mockUsers[1],
    content: 'Short clip from the team offsite.',
    videoUrl:
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
    likes: 210,
    comments: 31,
    shares: 9,
  },
]

export const mockConversations: Conversation[] = [
  {
    id: 'c1',
    user: mockUsers[1],
    lastMessage: 'Sounds good — let’s sync tomorrow morning.',
    lastMessageAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    unread: 2,
    messages: [
      {
        id: 'm1',
        senderId: 'u1',
        text: 'Hey! Did you get a chance to review the mockups?',
        sentAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      },
      {
        id: 'm2',
        senderId: 'u-me',
        text: 'Yes — left a few comments in Figma.',
        sentAt: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
      },
      {
        id: 'm3',
        senderId: 'u1',
        text: 'Sounds good — let’s sync tomorrow morning.',
        sentAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
      },
    ],
  },
  {
    id: 'c2',
    user: mockUsers[2],
    lastMessage: 'Uploaded the album — check your email.',
    lastMessageAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    unread: 0,
    messages: [
      {
        id: 'm4',
        senderId: 'u2',
        text: 'Uploaded the album — check your email.',
        sentAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
      },
    ],
  },
  {
    id: 'c3',
    user: mockUsers[3],
    lastMessage: 'Congrats on the launch 🎉',
    lastMessageAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    unread: 1,
    messages: [
      {
        id: 'm5',
        senderId: 'u3',
        text: 'Congrats on the launch 🎉',
        sentAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
      },
    ],
  },
]

export const trendingTopics = [
  { tag: 'DesignSystems', posts: '12.4k' },
  { tag: 'React', posts: '89k' },
  { tag: 'Photography', posts: '5.1k' },
  { tag: 'StartupLife', posts: '3.2k' },
]

export const friendsSidebar = mockUsers.slice(1, 5)

export const groupsSidebar = [
  { id: 'g1', name: 'UI Engineers', members: 1200 },
  { id: 'g2', name: 'Indie Hackers', members: 8900 },
  { id: 'g3', name: 'Local Creatives', members: 430 },
]

export function getCoverForUser(userId: string) {
  return cover(`cover-${userId}`)
}

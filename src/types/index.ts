export type User = {
  id: string
  name: string
  username: string
  avatarUrl: string
  bio?: string
  followers: number
  following: number
  isFollowing?: boolean
  isOnline?: boolean
}

export type Post = {
  id: string
  author: User
  content: string
  imageUrl?: string
  videoUrl?: string
  createdAt: string
  likes: number
  comments: number
  shares: number
}

export type Message = {
  id: string
  senderId: string
  text: string
  sentAt: string
}

export type Conversation = {
  id: string
  user: User
  lastMessage: string
  lastMessageAt: string
  unread?: number
  messages: Message[]
}

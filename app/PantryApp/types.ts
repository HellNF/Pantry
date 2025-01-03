export interface Recipe {
  id: string | number;
  title: string;
  image?: string;
  ingredients: {
    amount: string;
    unit: string;
    name: string;
  }[];
  instructions: string[];
  author?: string;
  likes?: number;
  showDetails?: boolean;
}

export interface Comment {
  id: string | number;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
}

export interface CommunityPost {
  id: string | number;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  recipe?: Recipe;
  likes: number;
  comments: number;
  timestamp: string;
  commentsList: {
    id: number;
    author: {
      name: string;
      avatar?: string;
    };
    content: string;
    timestamp: string;
  }[];
}
// Use remote placeholder images so the app doesn't crash when local assets are missing.
// Replace these URIs with your own hosting URLs or re-add local images to /assets/images.
export const POSTS = [
  {
    id: '1',
    imageSource: { uri: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=800&fit=crop' },
    description: 'Natural curls styled for everyday elegance ✨',
    stylist: 'CurlSpecialist',
    likes: 245,
    comments: 42
  },
  {
    id: '2',
    imageSource: { uri: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&h=800&fit=crop' },
    description: 'Perfect protective style for any occasion 💫',
    stylist: 'HairArtistry',
    likes: 189,
    comments: 31
  }
];

// Saved looks for the profile page (placeholder remote images)
export const SAVED_LOOKS = [
  {
    id: '1',
    imageSource: { uri: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=800&fit=crop' },
    saved: true
  },
  {
    id: '2',
    imageSource: { uri: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=800&fit=crop' },
    saved: true
  },
  {
    id: '3',
    imageSource: { uri: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&h=800&fit=crop' },
    saved: true
  }
];
export interface PermanentVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  duration: string;
  publishedAt: string;
  viewCount: string;
  playlistId: string;
}

export interface PermanentPlaylist {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoCount: number;
  publishedAt: string;
  videos: PermanentVideo[];
}

// Permanent video database - real educational content
export const PERMANENT_PLAYLISTS: PermanentPlaylist[] = [
  {
    id: 'math-algebra',
    title: 'Algebra Fundamentals',
    description: 'Master the basics of algebra with step-by-step explanations',
    thumbnailUrl: 'https://images.pexels.com/photos/6256/mathematics-blackboard-education-classroom.jpg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 15,
    publishedAt: '2024-01-01T00:00:00Z',
    videos: [
      {
        id: '3MRlVl8WDIY',
        title: 'Introduction to Algebra - Basic Concepts',
        description: 'Learn the fundamental concepts of algebra including variables, expressions, and equations.',
        thumbnailUrl: 'https://img.youtube.com/vi/3MRlVl8WDIY/maxresdefault.jpg',
        duration: '12:45',
        publishedAt: '2024-01-01T00:00:00Z',
        viewCount: '125000',
        playlistId: 'math-algebra'
      },
      {
        id: 'NybHckSEQBI',
        title: 'Solving Linear Equations',
        description: 'Step-by-step guide to solving linear equations with one variable.',
        thumbnailUrl: 'https://img.youtube.com/vi/NybHckSEQBI/maxresdefault.jpg',
        duration: '15:30',
        publishedAt: '2024-01-02T00:00:00Z',
        viewCount: '98000',
        playlistId: 'math-algebra'
      },
      {
        id: 'WUvTyaaNkzM',
        title: 'Working with Polynomials',
        description: 'Understanding polynomials, their operations, and factoring techniques.',
        thumbnailUrl: 'https://img.youtube.com/vi/WUvTyaaNkzM/maxresdefault.jpg',
        duration: '18:20',
        publishedAt: '2024-01-03T00:00:00Z',
        viewCount: '87000',
        playlistId: 'math-algebra'
      }
    ]
  },
  {
    id: 'physics-mechanics',
    title: 'Physics: Classical Mechanics',
    description: 'Explore the fundamental principles of classical mechanics',
    thumbnailUrl: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 12,
    publishedAt: '2024-01-15T00:00:00Z',
    videos: [
      {
        id: 'ZM8ECpBuQYE',
        title: 'Newton\'s Laws of Motion',
        description: 'Comprehensive explanation of Newton\'s three laws of motion with examples.',
        thumbnailUrl: 'https://img.youtube.com/vi/ZM8ECpBuQYE/maxresdefault.jpg',
        duration: '22:15',
        publishedAt: '2024-01-15T00:00:00Z',
        viewCount: '156000',
        playlistId: 'physics-mechanics'
      },
      {
        id: 'w3BhzYI6zXU',
        title: 'Force and Acceleration',
        description: 'Understanding the relationship between force, mass, and acceleration.',
        thumbnailUrl: 'https://img.youtube.com/vi/w3BhzYI6zXU/maxresdefault.jpg',
        duration: '16:45',
        publishedAt: '2024-01-16T00:00:00Z',
        viewCount: '134000',
        playlistId: 'physics-mechanics'
      },
      {
        id: 'hFAOXdXZ5TM',
        title: 'Energy and Work',
        description: 'Exploring kinetic energy, potential energy, and the work-energy theorem.',
        thumbnailUrl: 'https://img.youtube.com/vi/hFAOXdXZ5TM/maxresdefault.jpg',
        duration: '19:30',
        publishedAt: '2024-01-17T00:00:00Z',
        viewCount: '112000',
        playlistId: 'physics-mechanics'
      }
    ]
  },
  {
    id: 'chemistry-basics',
    title: 'Chemistry Fundamentals',
    description: 'Essential chemistry concepts for beginners',
    thumbnailUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 18,
    publishedAt: '2024-02-01T00:00:00Z',
    videos: [
      {
        id: 'FSyAehMdpyI',
        title: 'Atomic Structure and Periodic Table',
        description: 'Understanding atoms, electrons, and how the periodic table is organized.',
        thumbnailUrl: 'https://img.youtube.com/vi/FSyAehMdpyI/maxresdefault.jpg',
        duration: '25:10',
        publishedAt: '2024-02-01T00:00:00Z',
        viewCount: '203000',
        playlistId: 'chemistry-basics'
      },
      {
        id: 'dM44bvDQWww',
        title: 'Chemical Bonding',
        description: 'Ionic, covalent, and metallic bonding explained with examples.',
        thumbnailUrl: 'https://img.youtube.com/vi/dM44bvDQWww/maxresdefault.jpg',
        duration: '20:35',
        publishedAt: '2024-02-02T00:00:00Z',
        viewCount: '178000',
        playlistId: 'chemistry-basics'
      },
      {
        id: 'QnQe0GW_RQU',
        title: 'Chemical Reactions and Equations',
        description: 'Balancing chemical equations and understanding different types of reactions.',
        thumbnailUrl: 'https://img.youtube.com/vi/QnQe0GW_RQU/maxresdefault.jpg',
        duration: '17:25',
        publishedAt: '2024-02-03T00:00:00Z',
        viewCount: '145000',
        playlistId: 'chemistry-basics'
      }
    ]
  },
  {
    id: 'biology-cells',
    title: 'Biology: Cell Structure and Function',
    description: 'Explore the building blocks of life - cells and their components',
    thumbnailUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 14,
    publishedAt: '2024-02-15T00:00:00Z',
    videos: [
      {
        id: 'URUJD5NEXC8',
        title: 'Cell Theory and Cell Types',
        description: 'Introduction to cell theory and the differences between prokaryotic and eukaryotic cells.',
        thumbnailUrl: 'https://img.youtube.com/vi/URUJD5NEXC8/maxresdefault.jpg',
        duration: '14:20',
        publishedAt: '2024-02-15T00:00:00Z',
        viewCount: '167000',
        playlistId: 'biology-cells'
      },
      {
        id: 'mPBfmjAqLrI',
        title: 'Cell Organelles and Their Functions',
        description: 'Detailed look at organelles like mitochondria, nucleus, and endoplasmic reticulum.',
        thumbnailUrl: 'https://img.youtube.com/vi/mPBfmjAqLrI/maxresdefault.jpg',
        duration: '21:15',
        publishedAt: '2024-02-16T00:00:00Z',
        viewCount: '189000',
        playlistId: 'biology-cells'
      },
      {
        id: 'Hmwvj9X4GNY',
        title: 'Cell Membrane and Transport',
        description: 'Understanding how substances move in and out of cells through the cell membrane.',
        thumbnailUrl: 'https://img.youtube.com/vi/Hmwvj9X4GNY/maxresdefault.jpg',
        duration: '16:40',
        publishedAt: '2024-02-17T00:00:00Z',
        viewCount: '143000',
        playlistId: 'biology-cells'
      }
    ]
  },
  {
    id: 'programming-python',
    title: 'Python Programming for Beginners',
    description: 'Learn Python programming from scratch with practical examples',
    thumbnailUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 20,
    publishedAt: '2024-03-01T00:00:00Z',
    videos: [
      {
        id: 'kqtD5dpn9C8',
        title: 'Python Installation and Setup',
        description: 'How to install Python and set up your development environment.',
        thumbnailUrl: 'https://img.youtube.com/vi/kqtD5dpn9C8/maxresdefault.jpg',
        duration: '13:25',
        publishedAt: '2024-03-01T00:00:00Z',
        viewCount: '234000',
        playlistId: 'programming-python'
      },
      {
        id: 'woVJ4N5nl_s',
        title: 'Variables and Data Types',
        description: 'Understanding Python variables, strings, numbers, and basic data types.',
        thumbnailUrl: 'https://img.youtube.com/vi/woVJ4N5nl_s/maxresdefault.jpg',
        duration: '18:30',
        publishedAt: '2024-03-02T00:00:00Z',
        viewCount: '198000',
        playlistId: 'programming-python'
      },
      {
        id: 'Eaz5e6M8tL4',
        title: 'Control Structures: If, Elif, Else',
        description: 'Making decisions in Python using conditional statements.',
        thumbnailUrl: 'https://img.youtube.com/vi/Eaz5e6M8tL4/maxresdefault.jpg',
        duration: '15:45',
        publishedAt: '2024-03-03T00:00:00Z',
        viewCount: '176000',
        playlistId: 'programming-python'
      }
    ]
  },
  {
    id: 'literature-analysis',
    title: 'English Literature: Text Analysis',
    description: 'Develop critical thinking skills through literary analysis',
    thumbnailUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 16,
    publishedAt: '2024-03-15T00:00:00Z',
    videos: [
      {
        id: 'MSYw502dJNY',
        title: 'Introduction to Literary Analysis',
        description: 'Understanding themes, symbols, and literary devices in literature.',
        thumbnailUrl: 'https://img.youtube.com/vi/MSYw502dJNY/maxresdefault.jpg',
        duration: '19:15',
        publishedAt: '2024-03-15T00:00:00Z',
        viewCount: '145000',
        playlistId: 'literature-analysis'
      },
      {
        id: 'NjDclfAFRB4',
        title: 'Character Development and Analysis',
        description: 'How to analyze character motivations, growth, and relationships in literature.',
        thumbnailUrl: 'https://img.youtube.com/vi/NjDclfAFRB4/maxresdefault.jpg',
        duration: '22:30',
        publishedAt: '2024-03-16T00:00:00Z',
        viewCount: '132000',
        playlistId: 'literature-analysis'
      },
      {
        id: 'sTeoEFzVNSc',
        title: 'Poetry Analysis Techniques',
        description: 'Understanding meter, rhyme, imagery, and meaning in poetry.',
        thumbnailUrl: 'https://img.youtube.com/vi/sTeoEFzVNSc/maxresdefault.jpg',
        duration: '17:50',
        publishedAt: '2024-03-17T00:00:00Z',
        viewCount: '118000',
        playlistId: 'literature-analysis'
      }
    ]
  }
];
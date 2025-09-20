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

// Comprehensive permanent video database with all available playlists
export const PERMANENT_PLAYLISTS: PermanentPlaylist[] = [
  {
    id: 'math-algebra',
    title: 'Algebra Fundamentals',
    description: 'Master the basics of algebra with step-by-step explanations',
    thumbnailUrl: 'https://images.pexels.com/photos/6256/mathematics-blackboard-education-classroom.jpg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 25,
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
      },
      {
        id: 'kLx_G7VFuP4',
        title: 'Quadratic Equations and Formulas',
        description: 'Complete guide to solving quadratic equations using various methods.',
        thumbnailUrl: 'https://img.youtube.com/vi/kLx_G7VFuP4/maxresdefault.jpg',
        duration: '22:15',
        publishedAt: '2024-01-04T00:00:00Z',
        viewCount: '156000',
        playlistId: 'math-algebra'
      },
      {
        id: 'VOE_uhVFamE',
        title: 'Systems of Linear Equations',
        description: 'Learn to solve systems of equations using substitution and elimination methods.',
        thumbnailUrl: 'https://img.youtube.com/vi/VOE_uhVFamE/maxresdefault.jpg',
        duration: '19:45',
        publishedAt: '2024-01-05T00:00:00Z',
        viewCount: '134000',
        playlistId: 'math-algebra'
      },
      {
        id: 'mhl-gV1i-78',
        title: 'Graphing Linear Functions',
        description: 'Understanding slope, y-intercept, and graphing linear equations.',
        thumbnailUrl: 'https://img.youtube.com/vi/mhl-gV1i-78/maxresdefault.jpg',
        duration: '16:30',
        publishedAt: '2024-01-06T00:00:00Z',
        viewCount: '112000',
        playlistId: 'math-algebra'
      },
      {
        id: 'Qhqikb_XAcY',
        title: 'Exponential and Logarithmic Functions',
        description: 'Exploring exponential growth, decay, and logarithmic relationships.',
        thumbnailUrl: 'https://img.youtube.com/vi/Qhqikb_XAcY/maxresdefault.jpg',
        duration: '24:10',
        publishedAt: '2024-01-07T00:00:00Z',
        viewCount: '189000',
        playlistId: 'math-algebra'
      },
      {
        id: 'dFcGGeXVAM4',
        title: 'Rational Expressions and Equations',
        description: 'Working with fractions containing variables and solving rational equations.',
        thumbnailUrl: 'https://img.youtube.com/vi/dFcGGeXVAM4/maxresdefault.jpg',
        duration: '20:25',
        publishedAt: '2024-01-08T00:00:00Z',
        viewCount: '95000',
        playlistId: 'math-algebra'
      }
    ]
  },
  {
    id: 'math-calculus',
    title: 'Calculus Essentials',
    description: 'From limits to derivatives and integrals - master calculus concepts',
    thumbnailUrl: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 30,
    publishedAt: '2024-01-10T00:00:00Z',
    videos: [
      {
        id: 'WUvTyaaNkzM',
        title: 'Introduction to Limits',
        description: 'Understanding the concept of limits and their fundamental role in calculus.',
        thumbnailUrl: 'https://img.youtube.com/vi/WUvTyaaNkzM/maxresdefault.jpg',
        duration: '18:45',
        publishedAt: '2024-01-10T00:00:00Z',
        viewCount: '203000',
        playlistId: 'math-calculus'
      },
      {
        id: 'CfW845LNObM',
        title: 'Derivatives - The Power Rule',
        description: 'Learn to find derivatives using the power rule and basic differentiation techniques.',
        thumbnailUrl: 'https://img.youtube.com/vi/CfW845LNObM/maxresdefault.jpg',
        duration: '21:30',
        publishedAt: '2024-01-11T00:00:00Z',
        viewCount: '178000',
        playlistId: 'math-calculus'
      },
      {
        id: 'S0_qX4VJhMQ',
        title: 'Chain Rule and Product Rule',
        description: 'Advanced differentiation techniques for complex functions.',
        thumbnailUrl: 'https://img.youtube.com/vi/S0_qX4VJhMQ/maxresdefault.jpg',
        duration: '25:15',
        publishedAt: '2024-01-12T00:00:00Z',
        viewCount: '145000',
        playlistId: 'math-calculus'
      },
      {
        id: 'rfG8ce4nNh0',
        title: 'Applications of Derivatives',
        description: 'Using derivatives to solve optimization problems and analyze functions.',
        thumbnailUrl: 'https://img.youtube.com/vi/rfG8ce4nNh0/maxresdefault.jpg',
        duration: '28:40',
        publishedAt: '2024-01-13T00:00:00Z',
        viewCount: '167000',
        playlistId: 'math-calculus'
      },
      {
        id: 'FnJqaIESC2s',
        title: 'Introduction to Integration',
        description: 'Understanding antiderivatives and the fundamental theorem of calculus.',
        thumbnailUrl: 'https://img.youtube.com/vi/FnJqaIESC2s/maxresdefault.jpg',
        duration: '23:20',
        publishedAt: '2024-01-14T00:00:00Z',
        viewCount: '189000',
        playlistId: 'math-calculus'
      },
      {
        id: 'Gc2en3nHxA4',
        title: 'Integration Techniques',
        description: 'Substitution, integration by parts, and other advanced integration methods.',
        thumbnailUrl: 'https://img.youtube.com/vi/Gc2en3nHxA4/maxresdefault.jpg',
        duration: '31:15',
        publishedAt: '2024-01-15T00:00:00Z',
        viewCount: '156000',
        playlistId: 'math-calculus'
      }
    ]
  },
  {
    id: 'physics-mechanics',
    title: 'Physics: Classical Mechanics',
    description: 'Explore the fundamental principles of classical mechanics',
    thumbnailUrl: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 28,
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
      },
      {
        id: 'mEsaW4l4X4Q',
        title: 'Momentum and Collisions',
        description: 'Conservation of momentum and analyzing elastic and inelastic collisions.',
        thumbnailUrl: 'https://img.youtube.com/vi/mEsaW4l4X4Q/maxresdefault.jpg',
        duration: '24:20',
        publishedAt: '2024-01-18T00:00:00Z',
        viewCount: '198000',
        playlistId: 'physics-mechanics'
      },
      {
        id: 'MTFY0H4EZx4',
        title: 'Rotational Motion',
        description: 'Angular velocity, angular acceleration, and rotational dynamics.',
        thumbnailUrl: 'https://img.youtube.com/vi/MTFY0H4EZx4/maxresdefault.jpg',
        duration: '27:45',
        publishedAt: '2024-01-19T00:00:00Z',
        viewCount: '145000',
        playlistId: 'physics-mechanics'
      },
      {
        id: 'b7gZM-31P2k',
        title: 'Simple Harmonic Motion',
        description: 'Oscillations, springs, and pendulums in simple harmonic motion.',
        thumbnailUrl: 'https://img.youtube.com/vi/b7gZM-31P2k/maxresdefault.jpg',
        duration: '21:10',
        publishedAt: '2024-01-20T00:00:00Z',
        viewCount: '167000',
        playlistId: 'physics-mechanics'
      }
    ]
  },
  {
    id: 'physics-electricity',
    title: 'Physics: Electricity and Magnetism',
    description: 'Master electromagnetic phenomena and electrical circuits',
    thumbnailUrl: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 24,
    publishedAt: '2024-02-01T00:00:00Z',
    videos: [
      {
        id: 'x1-SibwIPM4',
        title: 'Electric Charge and Coulomb\'s Law',
        description: 'Understanding electric charge, electric force, and Coulomb\'s law.',
        thumbnailUrl: 'https://img.youtube.com/vi/x1-SibwIPM4/maxresdefault.jpg',
        duration: '18:30',
        publishedAt: '2024-02-01T00:00:00Z',
        viewCount: '143000',
        playlistId: 'physics-electricity'
      },
      {
        id: 'mdulzEfQXDE',
        title: 'Electric Fields and Potential',
        description: 'Electric field lines, electric potential, and potential difference.',
        thumbnailUrl: 'https://img.youtube.com/vi/mdulzEfQXDE/maxresdefault.jpg',
        duration: '23:45',
        publishedAt: '2024-02-02T00:00:00Z',
        viewCount: '178000',
        playlistId: 'physics-electricity'
      },
      {
        id: 'fJefjG3xhW0',
        title: 'Ohm\'s Law and Electrical Circuits',
        description: 'Current, voltage, resistance, and analyzing simple electrical circuits.',
        thumbnailUrl: 'https://img.youtube.com/vi/fJefjG3xhW0/maxresdefault.jpg',
        duration: '20:15',
        publishedAt: '2024-02-03T00:00:00Z',
        viewCount: '156000',
        playlistId: 'physics-electricity'
      },
      {
        id: 'NLMVWFLlg-c',
        title: 'Magnetic Fields and Forces',
        description: 'Magnetic field lines, magnetic force on moving charges and currents.',
        thumbnailUrl: 'https://img.youtube.com/vi/NLMVWFLlg-c/maxresdefault.jpg',
        duration: '25:30',
        publishedAt: '2024-02-04T00:00:00Z',
        viewCount: '134000',
        playlistId: 'physics-electricity'
      }
    ]
  },
  {
    id: 'chemistry-basics',
    title: 'Chemistry Fundamentals',
    description: 'Essential chemistry concepts for beginners',
    thumbnailUrl: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 32,
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
      },
      {
        id: 'yQP4UJhNn0I',
        title: 'Stoichiometry and Mole Concept',
        description: 'Understanding moles, molar mass, and stoichiometric calculations.',
        thumbnailUrl: 'https://img.youtube.com/vi/yQP4UJhNn0I/maxresdefault.jpg',
        duration: '22:40',
        publishedAt: '2024-02-04T00:00:00Z',
        viewCount: '167000',
        playlistId: 'chemistry-basics'
      },
      {
        id: 'Rd4a1X3B61w',
        title: 'Acids, Bases, and pH',
        description: 'Properties of acids and bases, pH scale, and neutralization reactions.',
        thumbnailUrl: 'https://img.youtube.com/vi/Rd4a1X3B61w/maxresdefault.jpg',
        duration: '19:15',
        publishedAt: '2024-02-05T00:00:00Z',
        viewCount: '189000',
        playlistId: 'chemistry-basics'
      },
      {
        id: 'IFAe53Bh8dE',
        title: 'States of Matter and Phase Changes',
        description: 'Solid, liquid, gas phases and the energy involved in phase transitions.',
        thumbnailUrl: 'https://img.youtube.com/vi/IFAe53Bh8dE/maxresdefault.jpg',
        duration: '16:50',
        publishedAt: '2024-02-06T00:00:00Z',
        viewCount: '134000',
        playlistId: 'chemistry-basics'
      }
    ]
  },
  {
    id: 'chemistry-organic',
    title: 'Organic Chemistry Essentials',
    description: 'Introduction to carbon compounds and organic reactions',
    thumbnailUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 26,
    publishedAt: '2024-02-10T00:00:00Z',
    videos: [
      {
        id: 'AWLJLy_0Mzg',
        title: 'Introduction to Organic Chemistry',
        description: 'Carbon bonding, hydrocarbons, and basic organic compound structures.',
        thumbnailUrl: 'https://img.youtube.com/vi/AWLJLy_0Mzg/maxresdefault.jpg',
        duration: '24:30',
        publishedAt: '2024-02-10T00:00:00Z',
        viewCount: '156000',
        playlistId: 'chemistry-organic'
      },
      {
        id: 'od7BTC4Sa6c',
        title: 'Functional Groups in Organic Chemistry',
        description: 'Alcohols, aldehydes, ketones, carboxylic acids, and their properties.',
        thumbnailUrl: 'https://img.youtube.com/vi/od7BTC4Sa6c/maxresdefault.jpg',
        duration: '28:15',
        publishedAt: '2024-02-11T00:00:00Z',
        viewCount: '198000',
        playlistId: 'chemistry-organic'
      },
      {
        id: 'J_Q5ulvjEgw',
        title: 'Isomerism in Organic Compounds',
        description: 'Structural isomers, stereoisomers, and their significance in organic chemistry.',
        thumbnailUrl: 'https://img.youtube.com/vi/J_Q5ulvjEgw/maxresdefault.jpg',
        duration: '21:45',
        publishedAt: '2024-02-12T00:00:00Z',
        viewCount: '143000',
        playlistId: 'chemistry-organic'
      }
    ]
  },
  {
    id: 'biology-cells',
    title: 'Biology: Cell Structure and Function',
    description: 'Explore the building blocks of life - cells and their components',
    thumbnailUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 22,
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
      },
      {
        id: 'mzycBwqIxSE',
        title: 'Photosynthesis and Cellular Respiration',
        description: 'Energy conversion processes in plants and animals.',
        thumbnailUrl: 'https://img.youtube.com/vi/mzycBwqIxSE/maxresdefault.jpg',
        duration: '26:30',
        publishedAt: '2024-02-18T00:00:00Z',
        viewCount: '234000',
        playlistId: 'biology-cells'
      },
      {
        id: 'yxJkMzBO7G4',
        title: 'Cell Division: Mitosis and Meiosis',
        description: 'Understanding how cells reproduce and create genetic diversity.',
        thumbnailUrl: 'https://img.youtube.com/vi/yxJkMzBO7G4/maxresdefault.jpg',
        duration: '23:45',
        publishedAt: '2024-02-19T00:00:00Z',
        viewCount: '178000',
        playlistId: 'biology-cells'
      }
    ]
  },
  {
    id: 'biology-genetics',
    title: 'Biology: Genetics and Heredity',
    description: 'Understanding inheritance patterns and genetic principles',
    thumbnailUrl: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 20,
    publishedAt: '2024-02-20T00:00:00Z',
    videos: [
      {
        id: 'oBwtxdI1zvk',
        title: 'Mendel\'s Laws of Inheritance',
        description: 'Dominant and recessive traits, Punnett squares, and basic genetics principles.',
        thumbnailUrl: 'https://img.youtube.com/vi/oBwtxdI1zvk/maxresdefault.jpg',
        duration: '19:30',
        publishedAt: '2024-02-20T00:00:00Z',
        viewCount: '156000',
        playlistId: 'biology-genetics'
      },
      {
        id: 'zwibgNGe4aY',
        title: 'DNA Structure and Replication',
        description: 'The double helix structure of DNA and how it replicates.',
        thumbnailUrl: 'https://img.youtube.com/vi/zwibgNGe4aY/maxresdefault.jpg',
        duration: '22:15',
        publishedAt: '2024-02-21T00:00:00Z',
        viewCount: '198000',
        playlistId: 'biology-genetics'
      },
      {
        id: 'gG7uCskUOrA',
        title: 'Protein Synthesis: Transcription and Translation',
        description: 'How genetic information is used to make proteins.',
        thumbnailUrl: 'https://img.youtube.com/vi/gG7uCskUOrA/maxresdefault.jpg',
        duration: '25:40',
        publishedAt: '2024-02-22T00:00:00Z',
        viewCount: '167000',
        playlistId: 'biology-genetics'
      }
    ]
  },
  {
    id: 'programming-python',
    title: 'Python Programming for Beginners',
    description: 'Learn Python programming from scratch with practical examples',
    thumbnailUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 35,
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
      },
      {
        id: 'wxds6MAtUQ0',
        title: 'Loops: For and While',
        description: 'Repeating code execution with for loops and while loops.',
        thumbnailUrl: 'https://img.youtube.com/vi/wxds6MAtUQ0/maxresdefault.jpg',
        duration: '20:15',
        publishedAt: '2024-03-04T00:00:00Z',
        viewCount: '189000',
        playlistId: 'programming-python'
      },
      {
        id: 'W8KRzm-HUcc',
        title: 'Functions and Parameters',
        description: 'Creating reusable code with functions, parameters, and return values.',
        thumbnailUrl: 'https://img.youtube.com/vi/W8KRzm-HUcc/maxresdefault.jpg',
        duration: '22:30',
        publishedAt: '2024-03-05T00:00:00Z',
        viewCount: '167000',
        playlistId: 'programming-python'
      },
      {
        id: 'R-HLU9Fl5ug',
        title: 'Lists and List Methods',
        description: 'Working with Python lists, indexing, slicing, and list methods.',
        thumbnailUrl: 'https://img.youtube.com/vi/R-HLU9Fl5ug/maxresdefault.jpg',
        duration: '24:45',
        publishedAt: '2024-03-06T00:00:00Z',
        viewCount: '145000',
        playlistId: 'programming-python'
      },
      {
        id: 'daefaLgNkw0',
        title: 'Dictionaries and Sets',
        description: 'Key-value pairs with dictionaries and unique collections with sets.',
        thumbnailUrl: 'https://img.youtube.com/vi/daefaLgNkw0/maxresdefault.jpg',
        duration: '19:20',
        publishedAt: '2024-03-07T00:00:00Z',
        viewCount: '134000',
        playlistId: 'programming-python'
      }
    ]
  },
  {
    id: 'programming-javascript',
    title: 'JavaScript Fundamentals',
    description: 'Master JavaScript for web development and beyond',
    thumbnailUrl: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 28,
    publishedAt: '2024-03-10T00:00:00Z',
    videos: [
      {
        id: 'PkZNo7MFNFg',
        title: 'JavaScript Basics and Syntax',
        description: 'Introduction to JavaScript syntax, variables, and basic programming concepts.',
        thumbnailUrl: 'https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg',
        duration: '16:45',
        publishedAt: '2024-03-10T00:00:00Z',
        viewCount: '187000',
        playlistId: 'programming-javascript'
      },
      {
        id: 'hdI2bqOjy3c',
        title: 'Functions and Scope',
        description: 'Understanding JavaScript functions, parameters, scope, and closures.',
        thumbnailUrl: 'https://img.youtube.com/vi/hdI2bqOjy3c/maxresdefault.jpg',
        duration: '21:30',
        publishedAt: '2024-03-11T00:00:00Z',
        viewCount: '156000',
        playlistId: 'programming-javascript'
      },
      {
        id: 'rRgD1yVwIvE',
        title: 'DOM Manipulation',
        description: 'Interacting with HTML elements using JavaScript and the Document Object Model.',
        thumbnailUrl: 'https://img.youtube.com/vi/rRgD1yVwIvE/maxresdefault.jpg',
        duration: '25:15',
        publishedAt: '2024-03-12T00:00:00Z',
        viewCount: '198000',
        playlistId: 'programming-javascript'
      },
      {
        id: 'DHvZLI7Db8E',
        title: 'Event Handling and User Interaction',
        description: 'Responding to user actions with event listeners and handlers.',
        thumbnailUrl: 'https://img.youtube.com/vi/DHvZLI7Db8E/maxresdefault.jpg',
        duration: '18:40',
        publishedAt: '2024-03-13T00:00:00Z',
        viewCount: '167000',
        playlistId: 'programming-javascript'
      }
    ]
  },
  {
    id: 'literature-analysis',
    title: 'English Literature: Text Analysis',
    description: 'Develop critical thinking skills through literary analysis',
    thumbnailUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 24,
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
      },
      {
        id: 'Kp7eSUU9oy8',
        title: 'Narrative Structure and Plot Analysis',
        description: 'Examining story structure, plot devices, and narrative techniques.',
        thumbnailUrl: 'https://img.youtube.com/vi/Kp7eSUU9oy8/maxresdefault.jpg',
        duration: '24:20',
        publishedAt: '2024-03-18T00:00:00Z',
        viewCount: '156000',
        playlistId: 'literature-analysis'
      },
      {
        id: 'YQHsXMglC9A',
        title: 'Historical Context in Literature',
        description: 'Understanding how historical periods influence literary works.',
        thumbnailUrl: 'https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg',
        duration: '20:45',
        publishedAt: '2024-03-19T00:00:00Z',
        viewCount: '134000',
        playlistId: 'literature-analysis'
      }
    ]
  },
  {
    id: 'literature-writing',
    title: 'Creative Writing and Composition',
    description: 'Develop your writing skills across different genres and styles',
    thumbnailUrl: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 18,
    publishedAt: '2024-03-20T00:00:00Z',
    videos: [
      {
        id: 'wfdy9dBcBHU',
        title: 'Elements of Creative Writing',
        description: 'Character, setting, plot, and dialogue in creative writing.',
        thumbnailUrl: 'https://img.youtube.com/vi/wfdy9dBcBHU/maxresdefault.jpg',
        duration: '21:15',
        publishedAt: '2024-03-20T00:00:00Z',
        viewCount: '143000',
        playlistId: 'literature-writing'
      },
      {
        id: 'Nv7u728wNV4',
        title: 'Essay Writing Techniques',
        description: 'Structure, argumentation, and persuasive writing in academic essays.',
        thumbnailUrl: 'https://img.youtube.com/vi/Nv7u728wNV4/maxresdefault.jpg',
        duration: '18:30',
        publishedAt: '2024-03-21T00:00:00Z',
        viewCount: '167000',
        playlistId: 'literature-writing'
      },
      {
        id: 'bTqNSgCmM2s',
        title: 'Poetry Writing Workshop',
        description: 'Crafting poems with attention to rhythm, imagery, and emotional impact.',
        thumbnailUrl: 'https://img.youtube.com/vi/bTqNSgCmM2s/maxresdefault.jpg',
        duration: '23:45',
        publishedAt: '2024-03-22T00:00:00Z',
        viewCount: '125000',
        playlistId: 'literature-writing'
      }
    ]
  },
  {
    id: 'history-world',
    title: 'World History: Major Civilizations',
    description: 'Journey through the rise and fall of great civilizations',
    thumbnailUrl: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 30,
    publishedAt: '2024-04-01T00:00:00Z',
    videos: [
      {
        id: 'ymI5Uv5cGU4',
        title: 'Ancient Mesopotamia and the First Cities',
        description: 'The cradle of civilization: Sumerians, Babylonians, and Assyrians.',
        thumbnailUrl: 'https://img.youtube.com/vi/ymI5Uv5cGU4/maxresdefault.jpg',
        duration: '26:30',
        publishedAt: '2024-04-01T00:00:00Z',
        viewCount: '189000',
        playlistId: 'history-world'
      },
      {
        id: 'Z3Wvw6BuhhA',
        title: 'Ancient Egypt: Pharaohs and Pyramids',
        description: 'The civilization along the Nile: pharaohs, pyramids, and daily life.',
        thumbnailUrl: 'https://img.youtube.com/vi/Z3Wvw6BuhhA/maxresdefault.jpg',
        duration: '24:15',
        publishedAt: '2024-04-02T00:00:00Z',
        viewCount: '234000',
        playlistId: 'history-world'
      },
      {
        id: 'SFd2c4Ot-nY',
        title: 'Classical Greece: Democracy and Philosophy',
        description: 'Athens, Sparta, and the birth of democracy and philosophical thought.',
        thumbnailUrl: 'https://img.youtube.com/vi/SFd2c4Ot-nY/maxresdefault.jpg',
        duration: '28:45',
        publishedAt: '2024-04-03T00:00:00Z',
        viewCount: '198000',
        playlistId: 'history-world'
      },
      {
        id: 'TG55ErfdaeY',
        title: 'The Roman Empire: Rise and Fall',
        description: 'From republic to empire: Roman expansion, culture, and eventual decline.',
        thumbnailUrl: 'https://img.youtube.com/vi/TG55ErfdaeY/maxresdefault.jpg',
        duration: '32:20',
        publishedAt: '2024-04-04T00:00:00Z',
        viewCount: '267000',
        playlistId: 'history-world'
      },
      {
        id: 'jvO0P5-SMxk',
        title: 'Medieval Europe: Feudalism and the Church',
        description: 'The Middle Ages: feudal system, crusades, and the power of the Catholic Church.',
        thumbnailUrl: 'https://img.youtube.com/vi/jvO0P5-SMxk/maxresdefault.jpg',
        duration: '25:10',
        publishedAt: '2024-04-05T00:00:00Z',
        viewCount: '156000',
        playlistId: 'history-world'
      }
    ]
  },
  {
    id: 'history-modern',
    title: 'Modern History: 19th and 20th Centuries',
    description: 'Industrial revolution, world wars, and the modern world',
    thumbnailUrl: 'https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoCount: 26,
    publishedAt: '2024-04-10T00:00:00Z',
    videos: [
      {
        id: 'zhL5DCizj5c',
        title: 'The Industrial Revolution',
        description: 'Steam power, factories, and the transformation of society.',
        thumbnailUrl: 'https://img.youtube.com/vi/zhL5DCizj5c/maxresdefault.jpg',
        duration: '23:40',
        publishedAt: '2024-04-10T00:00:00Z',
        viewCount: '178000',
        playlistId: 'history-modern'
      },
      {
        id: 'Yocja_N5s1I',
        title: 'World War I: The Great War',
        description: 'Causes, major battles, and consequences of the First World War.',
        thumbnailUrl: 'https://img.youtube.com/vi/Yocja_N5s1I/maxresdefault.jpg',
        duration: '29:15',
        publishedAt: '2024-04-11T00:00:00Z',
        viewCount: '245000',
        playlistId: 'history-modern'
      },
      {
        id: 'Q78COTwT7nE',
        title: 'The Russian Revolution',
        description: 'Fall of the Tsars, rise of the Bolsheviks, and the birth of the Soviet Union.',
        thumbnailUrl: 'https://img.youtube.com/vi/Q78COTwT7nE/maxresdefault.jpg',
        duration: '26:50',
        publishedAt: '2024-04-12T00:00:00Z',
        viewCount: '167000',
        playlistId: 'history-modern'
      }
    ]
  }
];
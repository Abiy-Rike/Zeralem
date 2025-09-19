import React, { useState } from 'react';
import { 
  BookOpen, 
  Play, 
  Users, 
  Star, 
  Clock, 
  Search,
  Filter,
  Menu,
  X,
  ChevronRight,
  Award,
  Globe,
  Heart
} from 'lucide-react';
import { useCourses, Course } from './hooks/useCourses';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import VideoPlayer from './components/VideoPlayer';
import { YouTubeVideo } from './services/youtubeApi';


const levels = ["All", "Beginner", "Intermediate", "Advanced"];

function App() {
  const { courses, loading, error, refetch } = useCourses();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

  // Generate categories dynamically from courses
  const categories = ["All", ...Array.from(new Set(courses.map(course => course.category)))];

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const CourseCard = ({ course }: { course: Course }) => (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group overflow-hidden"
      onClick={() => setSelectedCourse(course)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {course.level}
        </div>
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          {course.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Play className="w-4 h-4" />
            <span>{course.lessons} lessons</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
            <span className="text-gray-500">({course.students})</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
      </div>
    </div>
  );

  const CourseDetail = ({ course, onClose }: { course: Course; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={course.thumbnail} 
            alt={course.title}
            className="w-full h-64 object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h2>
              <p className="text-lg text-gray-600">by {course.instructor}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600 mb-1">{course.price}</div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{course.rating} ({course.students} students)</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-6">{course.description}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="font-medium">{course.duration}</div>
              <div className="text-sm text-gray-500">Duration</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Play className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="font-medium">{course.lessons}</div>
              <div className="text-sm text-gray-500">Lessons</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="font-medium">{course.students}</div>
              <div className="text-sm text-gray-500">Students</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Award className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="font-medium">{course.level}</div>
              <div className="text-sm text-gray-500">Level</div>
            </div>
          </div>
          
          <div className="flex gap-4">
            {course.videos.length > 0 && (
              <button 
                onClick={() => {
                  setSelectedVideo(course.videos[0]);
                  onClose();
                }}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors font-medium"
              >
                Start Learning
              </button>
            )}
            <button className="px-6 py-3 border-2 border-gray-300 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors font-medium">
              Add to Wishlist
            </button>
          </div>
          
          {/* Video List */}
          {course.videos.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Content</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {course.videos.map((video, index) => (
                  <div
                    key={video.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => {
                      setSelectedVideo(video);
                      onClose();
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{video.title}</p>
                      <p className="text-xs text-gray-500">{video.duration}</p>
                    </div>
                    <Play className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-2 rounded-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Zeralem Teaching Center</h1>
                <p className="text-sm text-gray-500">Excellence in Education</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Courses</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#courses" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Courses</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Zeralem Teaching Center</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Unlock your potential with our comprehensive online courses. Learn from expert instructor Zeralem 
              across mathematics, sciences, programming, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-medium text-lg">
                Explore Courses
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-colors font-medium text-lg">
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">5,000+</div>
                <div className="text-gray-600">Students</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Courses</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Globe className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Heart className="w-12 h-12 mx-auto mb-4 text-red-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">4.8</div>
                <div className="text-gray-600">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Course Catalog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover comprehensive courses designed to help you excel in your studies and career goals.
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select 
                    className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <select 
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Zeralem Teaching Center</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Founded on the principle that quality education should be accessible to everyone, 
              Zeralem Teaching Center brings together comprehensive courses across multiple disciplines. 
              Our expert instructor Zeralem has dedicated years to creating content that not only teaches 
              but inspires students to reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl opacity-75 mb-8 max-w-2xl mx-auto">
              Have questions about our courses? Ready to start your learning journey? We're here to help.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-medium text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-2 rounded-xl">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Zeralem Teaching Center</span>
          </div>
          <p className="text-gray-400 mb-6">Excellence in Education • Empowering Students Worldwide</p>
          <p className="text-gray-500">&copy; 2024 Zeralem Teaching Center. All rights reserved.</p>
        </div>
      </footer>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetail 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </div>
  );
}

export default App;
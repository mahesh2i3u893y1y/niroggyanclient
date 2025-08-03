import Stats from './Stats';
import doctor from '../assets/doctor.jpg'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Content */}
          <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Health,
                <span className="text-cyan-300 block">Our Priority</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
                Book appointments with trusted healthcare professionals. Quality care, convenient scheduling, all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Book Appointment
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-300">
              <div className="bg-white/10 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={doctor}
                  alt="Healthcare professionals"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <Stats/>
      </div>
    </div>
  );
}
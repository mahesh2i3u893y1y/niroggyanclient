import React from "react";
import { MapPin, Star, Calendar, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function DoctorCard({ doctor, onBookNow }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
      {/* Doctor Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full  object-cover object-[center_10%] group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              doctor.available
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {doctor.available ? "Available" : "Busy"}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">
              {doctor.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {doctor.name}
          </h3>
          <p className="text-blue-600 font-medium mb-2">
            {doctor.specialization}
          </p>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {doctor.description}
          </p>

          <div className="flex items-center text-gray-500 text-sm mb-2">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{doctor.address}</span>
          </div>

          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{doctor.experience} experience</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onBookNow(doctor)}
            disabled={!doctor.available}
            className={`flex-1 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
              doctor.available
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Book Now
          </button>
          <Link
            to={`/doctor-details/${doctor._id}`}
            className="flex-1 px-4 py-3 rounded-xl font-semibold text-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Eye className="h-4 w-4" />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

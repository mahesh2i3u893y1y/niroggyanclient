import React from "react";
import { Star, Calendar } from "lucide-react";

export default function DoctorHeader({ doctor }) {
  return (
    <div className="relative h-[70vh] bg-gradient-to-r from-blue-600 to-indigo-700  overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-full object-cover object-[center_20%]"
      />
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {doctor.name}
            </h1>
            <p className="text-xl text-blue-100 mb-2">{doctor.specialization}</p>
            <div className="flex items-center space-x-4 text-white/90">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span className="font-medium">{doctor.rating}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-1" />
                <span>{doctor.experience}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                doctor.available ? "bg-green-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              {doctor.available ? "Available Today" : "Busy Today"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

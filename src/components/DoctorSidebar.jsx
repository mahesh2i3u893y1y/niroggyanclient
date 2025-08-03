import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function DoctorSidebar({ doctor, onBookNow }) {
  return (
    <div className="space-y-6">
      {/* Contact Info */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Contact Information
        </h3>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <span>{doctor.address}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-400" />
            <span>{doctor.phone || "+1 (555) 123-4567"}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-400" />
            <span>
              {doctor.email || doctor.name.toLowerCase().replace(" ", ".") + "@healthcare.com"}
            </span>
          </div>
        </div>
      </div>

      {/* Available Slots */}
      <div className="bg-blue-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Clock className="h-5 w-5 text-blue-600 mr-2" />
          Available Today
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {(doctor.availableSlots || ["09:00 AM", "10:00 AM", "02:00 PM", "04:00 PM"]).map(
            (slot, index) => (
              <div
                key={index}
                className="bg-white border border-blue-200 text-blue-800 text-center py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer"
              >
                {slot}
              </div>
            )
          )}
        </div>
      </div>

      {/* Book Button */}
      <button
        onClick={() => onBookNow(doctor)}
        disabled={!doctor.available}
        className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 cursor-pointer ${
          doctor.available
            ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:scale-105"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {doctor.available ? "Book Appointment Now" : "Currently Unavailable"}
      </button>
    </div>
  );
}

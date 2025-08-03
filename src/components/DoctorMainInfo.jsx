import React from "react";
import { BookOpen, Award } from "lucide-react";

export default function DoctorMainInfo({ doctor }) {
  return (
    <div className="lg:col-span-2 space-y-8">
      {/* About */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
          About
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {doctor.description} With {doctor.experience} of dedicated service in{" "}
          {doctor.specialization}, I am committed to providing comprehensive,
          compassionate care to all my patients. My approach focuses on understanding
          each patient's unique needs and developing personalized treatment plans.
        </p>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Award className="h-6 w-6 text-blue-600 mr-2" />
          Education & Qualifications
        </h2>
        <div className="space-y-3">
          {(doctor.education || [
            "MD - " + doctor.specialization,
            "MBBS from Medical College",
            "Fellowship in Advanced " + doctor.specialization,
          ]).map((edu, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">{edu}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {(doctor.languages || ["English", "Hindi", "Spanish"]).map((lang, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

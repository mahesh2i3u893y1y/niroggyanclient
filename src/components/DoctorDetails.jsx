import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import DoctorHeader from "./DoctorHeader";
import DoctorMainInfo from "./DoctorMainInfo";
import DoctorSidebar from "./DoctorSidebar";
import BookingModal from "./BookingModel";
import LoadingSpinner from "./LoadingSpinner";
import { APP_VARIABLE } from "./constants";

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`${APP_VARIABLE.SERVER}/doctor/${id}`);
        if (!response.ok) throw new Error("Failed to fetch doctor");
        const data = await response.json();
        setDoctor(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDoctor();
  }, [id]);

  const onBookNow = (doctor) => {
     setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);

  }

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSelectedDoctor(null);
  };

  if (!doctor) return <LoadingSpinner/>

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Back Button */}
      <div className="">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center absolute z-10 bg-gray-300 p-4 rounded-[50%] cursor-pointer left-2 top-2 hover:bg-gray-400 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
        </button>
      </div>

      {/* Header */}
      <DoctorHeader doctor={doctor} />

      {/* Main Content */}
      <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <DoctorMainInfo doctor={doctor} />
        <DoctorSidebar
          doctor={doctor}
          onBookNow={onBookNow}
        />
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
        doctor={selectedDoctor}
      />
    </div>
  );
};

export default DoctorDetails;

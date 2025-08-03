import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import DoctorsSection from "./DoctorsSection";
import BookingModal from "./BookingModel";
import { APP_VARIABLE } from "./constants";

function Body() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${APP_VARIABLE.SERVER}/doctors`);
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleBookNow = (doctor) => {
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
      />

      <Hero />

      <DoctorsSection
        doctors={doctors}
        searchTerm={searchTerm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onBookNow={handleBookNow}
      />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseModal}
        doctor={selectedDoctor}
      />
    </div>
  );
}

export default Body;

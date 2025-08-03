import React, { useMemo, useEffect } from 'react';
import DoctorCard from './DoctorCard';
import Pagination from './Pagination';
import LoadingSpinner from './LoadingSpinner';

const DOCTORS_PER_PAGE = 9;

const DoctorsSection = ({
  doctors,
  searchTerm,
  currentPage,
  setCurrentPage,
  onBookNow,
  onViewDetails
}) => {
  // Filter doctors
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, doctors]);

  // Paginate doctors
  const paginatedDoctors = useMemo(() => {
    const startIndex = (currentPage - 1) * DOCTORS_PER_PAGE;
    const endIndex = startIndex + DOCTORS_PER_PAGE;
    return filteredDoctors.slice(startIndex, endIndex);
  }, [filteredDoctors, currentPage]);

  const totalPages = Math.ceil(filteredDoctors.length / DOCTORS_PER_PAGE);

  // Reset to page 1 on search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, setCurrentPage]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Expert Doctors
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Meet our team of experienced healthcare professionals dedicated to providing you with the best medical care.
        </p>
        {searchTerm && (
          <div className="mt-6 text-lg text-blue-600">
            {filteredDoctors.length > 0
              ? `Found ${filteredDoctors.length} doctor${filteredDoctors.length !== 1 ? 's' : ''} matching "${searchTerm}"`
              : `No doctors found matching "${searchTerm}"`
            }
          </div>
        )}
      </div>

      {/* Grid */}
      {paginatedDoctors.length > 0 ? (
        <>
          <div className="flex flex-wrap -mx-4">
            {paginatedDoctors.map((doctor, index) => (
              <div
                key={doctor._id}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <DoctorCard
                  doctor={doctor}
                  onBookNow={onBookNow}
                  onViewDetails={onViewDetails}
                />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 600, behavior: 'smooth' });
              }}
            />
          )}
        </>
      ) : (
        <LoadingSpinner/>
      )}
    </section>
  );
};

export default DoctorsSection;

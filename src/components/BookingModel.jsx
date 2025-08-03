
import  { useState } from "react";
import { X } from "lucide-react";
import BookingForm from "./BookingForm";
import BookingSuccess from "./BookingSuccess";

export default function BookingModal({ isOpen, onClose, doctor }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingInfo, setBookingInfo] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300 scrollbar-hide">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {isSuccess ? (
          <BookingSuccess
            doctor={doctor}
            bookingInfo={bookingInfo}
          />
        ) : (
          <BookingForm
            doctor={doctor}
            onSuccess={(info) => {
              setBookingInfo(info);
              setIsSuccess(true);
              setTimeout(() => {
                setIsSuccess(false);
                setBookingInfo(null);
                onClose();
              }, 3000);
            }}
          />
        )}
      </div>
    </div>
  );
}

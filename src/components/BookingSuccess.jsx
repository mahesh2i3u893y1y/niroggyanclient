
import { CheckCircle } from "lucide-react";

export default function BookingSuccess({ doctor, bookingInfo }) {
  return (
    <div className="p-8 text-center">
      <div className="mb-6">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Booking Successful!</h3>
      <p className="text-gray-600 mb-6">
        Your appointment with <strong>{doctor?.name}</strong> has been booked successfully.
        A confirmation email will be sent to you shortly.
      </p>
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <p className="text-sm text-green-800">
          <strong>Date:</strong> {bookingInfo?.date} <br />
          <strong>Time:</strong> {bookingInfo?.time}
        </p>
      </div>
    </div>
  );
}

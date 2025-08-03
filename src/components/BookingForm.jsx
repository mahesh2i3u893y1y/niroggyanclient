import React, { useState } from "react";
import { User, Mail, Calendar, Clock } from "lucide-react";
import { APP_VARIABLE } from "./constants";

export default function BookingForm({ doctor, onSuccess }) {
  const [bookingData, setBookingData] = useState({
    patientName: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { patientName, email, date, time, notes } = bookingData;
    const dateTime = new Date(`${date}T${time}:00`);

    const payload = {
      patientName,
      email,
      dateTime,
      doctorName: doctor?.name,
      hospitalName: doctor?.address,
      notes,
    };

    try {
      const res = await fetch(`${APP_VARIABLE.SERVER}/appointment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to book");

      onSuccess({ date, time });
    } catch (err) {
      alert("Booking failed. Try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      {/* Doctor preview */}
      {doctor && (
        <div className="flex items-center space-x-3 mb-2">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{doctor.name}</h3>
            <p className="text-sm text-blue-600">{doctor.specialization}</p>
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">
          <User className="inline w-4 h-4 mr-1" />
          Patient Name
        </label>
        <input
          type="text"
          placeholder="Enter Name."
          name="patientName"
          value={bookingData.patientName}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          <Mail className="inline w-4 h-4 mr-1" />
          Email Address
        </label>
        <input
          placeholder="Enter Email."
          type="email"
          name="email"
          value={bookingData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">
            <Calendar className="inline w-4 h-4 mr-1" />
            Date
          </label>
          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleInputChange}
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          />
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">
            <Clock className="inline w-4 h-4 mr-1" />
            Time
          </label>
          <select
            name="time"
            value={bookingData.time}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl"
          >
            <option value="">Select time</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="14:00">02:00 PM</option>
            <option value="15:00">03:00 PM</option>
            <option value="16:00">04:00 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Additional Notes</label>
        <textarea
          name="notes"
          placeholder="Describe the health condition. "
          value={bookingData.notes}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 cursor-pointer text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all"
      >
        {isSubmitting ? "Booking..." : "Book Appointment"}
      </button>
    </form>
  );
}

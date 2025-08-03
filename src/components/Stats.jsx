import { Award, Calendar, Clock, User } from "lucide-react";

const Stats = () => {
  return (
    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
        <div className="flex justify-center mb-2">
          <User className="h-8 w-8 text-cyan-300" />
        </div>
        <div className="text-3xl font-bold">500+</div>
        <div className="text-blue-200">Doctors</div>
      </div>
      <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-700">
        <div className="flex justify-center mb-2">
          <Calendar className="h-8 w-8 text-cyan-300" />
        </div>
        <div className="text-3xl font-bold">10K+</div>
        <div className="text-blue-200">Appointments</div>
      </div>
      <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-900">
        <div className="flex justify-center mb-2">
          <Award className="h-8 w-8 text-cyan-300" />
        </div>
        <div className="text-3xl font-bold">98%</div>
        <div className="text-blue-200">Satisfaction</div>
      </div>
      <div className="text-center animate-in fade-in slide-in-from-bottom duration-700 delay-1100">
        <div className="flex justify-center mb-2">
          <Clock className="h-8 w-8 text-cyan-300" />
        </div>
        <div className="text-3xl font-bold">24/7</div>
        <div className="text-blue-200">Support</div>
      </div>
    </div>
  );
};

export default Stats;

import { MapPin, Navigation } from "lucide-react";

const agents = [
  {
    id: "F001",
    name: "Deepak Kumar",
    status: "On Field",
    city: "Mumbai",
    completed: 2,
    recovery: 125000,
  },
  {
    id: "F002",
    name: "Arjun Nair",
    status: "Available",
    city: "Mumbai",
    completed: 3,
    recovery: 85000,
  },
];

const AgentsList = () => {
  return (
    <div className="bg-custom-dark border border-gray-800 p-6 rounded-xl">
      <h3 className="text-white mb-4">Field Agents</h3>

      <div className="space-y-4">
        {agents.map((a) => (
          <div key={a.id} className="p-4 border border-gray-700 rounded-lg">
            
            <div className="flex justify-between mb-2">
              <div>
                <h4 className="text-white">{a.name}</h4>
                <p className="text-xs text-gray-400">
                  <MapPin className="inline w-3 h-3" /> {a.city}
                </p>
              </div>

              <Navigation className="text-blue-400" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-center text-sm">
              <div className="bg-blue-500/10 p-2 rounded">
                <p className="text-blue-400 font-bold">{a.completed}</p>
                <p className="text-xs text-blue-300">Done</p>
              </div>

              <div className="bg-green-500/10 p-2 rounded">
                <p className="text-green-400 font-bold">
                  ₹{(a.recovery / 1000).toFixed(0)}K
                </p>
                <p className="text-xs text-green-300">Recovered</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsList;
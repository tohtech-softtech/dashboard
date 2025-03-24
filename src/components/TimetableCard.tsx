interface TimetableData {
  id: number;
  departure: string;
  destination: string;
  departure_hour: number;
  departure_minute: number;
  time_required: number;
  bus_type: string;
}

export const TimetableCard: React.FC<TimetableData> = (item) => {
  return (
    <div key={item.id} className="card grid grid-cols-2 bg-gray-100 p-4">
      <div className="text-left">
        <div className="text-base font-bold">{item.destination} 行</div>
        <div className="flex grid-cols-2 gap-2 text-sm font-bold">
          {item.bus_type === "" ? null : <div>{item.bus_type}</div>}
          <div>{item.time_required}分</div>
        </div>
      </div>
      <div className="flex items-center justify-end text-xl font-extrabold">
        {item.departure_hour}:{item.departure_minute === 0 ? "00" : item.departure_minute}
      </div>
    </div>
  );
};

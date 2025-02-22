import { useState, useEffect } from "react";

interface TimeTableData {
  id: number;
  departure: string;
  destination: string;
  departure_hour: number;
  departure_minute: number;
  time_required: number;
  bus_type: string;
}

const fetchTimeTables = async () => {
  const response = await fetch("data/nagamachi-campus.json");
  return response.json();
};

export default function TimeTable() {
  const [timeTable, setTimeTable] = useState<TimeTableData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTimeTables();
      setTimeTable(data);
    };
    loadData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-8 pb-20 ">
        {timeTable.map((item) => (
          <div key={item.id} className="card grid grid-cols-2 bg-gray-100 p-4">
            <div className="text-left">
              <div className="text-base font-medium">{item.destination}</div>
              <div>
                {item.bus_type} {item.time_required}分
              </div>
            </div>
            <div className="flex items-center justify-end text-xl font-bold">
              {item.departure_hour}:{item.departure_minute}
            </div>
          </div>
        ))}
      </div>
      <div className="btm-nav">
        <button type="button">
          <span className="btm-nav-label text-xs font-bold">八木山キャンパス</span>
        </button>
        <button type="button" className="active">
          <span className="btm-nav-label text-xs font-bold">長町キャンパス</span>
        </button>
        <button type="button">
          <span className="btm-nav-label text-xs font-bold">八木山動物公園駅</span>
        </button>
      </div>
    </>
  );
}

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

type Location = "yagiyama" | "nagamachi" | "station";

const getJsonPath = (location: Location): string => {
  switch (location) {
    case "yagiyama":
      return "data/yagiyama-campus.json";
    case "nagamachi":
      return "data/nagamachi-campus.json";
    case "station":
      return "data/yagiyama-station.json";
  }
};

const fetchTimeTable = async (location: Location) => {
  const response = await fetch(getJsonPath(location));
  return response.json();
};

export default function TimeTable() {
  const [timeTable, setTimeTable] = useState<TimeTableData[]>([]);
  const [location, setLocation] = useState<Location>("yagiyama");

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTimeTable(location);
      setTimeTable(data);
    };
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    loadData();
  }, [location]);

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
        <button type="button" className={location === "yagiyama" ? "active" : ""} onClick={() => setLocation("yagiyama")}>
          <span className="btm-nav-label text-xs font-bold">八木山キャンパス 発</span>
        </button>
        <button type="button" className={location === "nagamachi" ? "active" : ""} onClick={() => setLocation("nagamachi")}>
          <span className="btm-nav-label text-xs font-bold">長町キャンパス 発</span>
        </button>
        <button type="button" className={location === "station" ? "active" : ""} onClick={() => setLocation("station")}>
          <span className="btm-nav-label text-xs font-bold">八木山動物公園駅 発</span>
        </button>
      </div>
    </>
  );
}

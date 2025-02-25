import { Divider } from "@/components/Divider";
import { TimetableCard } from "@/components/TimetableCard";
import { useState, useEffect } from "react";

interface TimetableData {
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

const fetchTimetable = async (location: Location) => {
  const response = await fetch(getJsonPath(location));
  return response.json();
};

export default function Timetable() {
  const [timetable, setTimetable] = useState<TimetableData[]>([]);
  const [location, setLocation] = useState<Location>("yagiyama");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTimetable(location);
      setTimetable(data);
      setDate(new Date());
    };
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    loadData();
  }, [location]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-8 pb-24 ">
        <Divider>
          {
            {
              yagiyama: "八木山キャンパス発 シャトルバス",
              nagamachi: "長町キャンパス発 シャトルバス",
              station: "八木山動物公園駅発 シャトルバス",
            }[location]
          }
        </Divider>
        {timetable.map((item, index) => {
          const showCurrentTime = date.getHours() < item.departure_hour || (date.getHours() === item.departure_hour && date.getMinutes() < item.departure_minute);
          return (
            <div key={item.id} className="space-y-4">
              {showCurrentTime && index === timetable.findIndex((t) => t.departure_hour > date.getHours() || (t.departure_hour === date.getHours() && t.departure_minute > date.getMinutes())) && (
                <div className="card gap-2 bg-blue-100 p-4 text-center">
                  <div className="text-lg font-bold">
                    現在時刻: {date.getHours().toString().padStart(2, "0")}:{date.getMinutes().toString().padStart(2, "0")}
                  </div>
                </div>
              )}
              <TimetableCard {...item} />
            </div>
          );
        })}
      </div>
      <div className="btm-nav">
        <button type="button" className={location === "yagiyama" ? "active" : ""} onClick={() => setLocation("yagiyama")}>
          <span className="btm-nav-label text-xs font-extrabold">八木山キャンパス 発</span>
        </button>
        <button type="button" className={location === "nagamachi" ? "active" : ""} onClick={() => setLocation("nagamachi")}>
          <span className="btm-nav-label text-xs font-extrabold">長町キャンパス 発</span>
        </button>
        <button type="button" className={location === "station" ? "active" : ""} onClick={() => setLocation("station")}>
          <span className="btm-nav-label text-xs font-extrabold">八木山動物公園駅 発</span>
        </button>
      </div>
    </>
  );
}

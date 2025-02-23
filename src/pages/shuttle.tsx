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

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTimetable(location);
      setTimetable(data);
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
        {timetable.map((item) => (
          <TimetableCard key={item.id} {...item} />
        ))}
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

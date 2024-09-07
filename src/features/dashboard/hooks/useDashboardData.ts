import { useState, useEffect } from "react";
import { DashboardData } from "../types/DashboardTypes";

const useDashboardData = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      const staticData: DashboardData = {
        send_sms: 1200,
        clients: 75,
        delivered_sms: 30,
        groups: 450,
      };
      setData(staticData);
    };

    fetchData();
  }, []);

  return data;
};

export default useDashboardData;

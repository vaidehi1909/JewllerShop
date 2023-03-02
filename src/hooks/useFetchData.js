import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      //   const url = "https://mocki.io/v1/76316a6e-2b82-4aa9-988b-738e684d5f3f";
      const response = await axios.get("/data.json");
      if (response?.data) setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { data, loading };
};

export default useFetchData;

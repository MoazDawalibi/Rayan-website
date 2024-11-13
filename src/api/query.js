import { useQuery } from "react-query";
import axios from "axios";

const queryOptions = {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
};

export const useGetData = () =>
  useQuery(
    "DATA",
    async () => {
      try {
        const { data } = await axios.get("/assets/data.json");
        return data;
      } catch (e) {}
    },
    queryOptions
  );

export const useGetPolicy = (activeLanguage) =>
  useQuery(
    ["POLICY", activeLanguage],
    async () => {
      try {
        const { data } = await axios.get(`/assets/policy/${activeLanguage}.html`);
        return data;
      } catch (e) {}
    },
    { ...queryOptions, keepPreviousData: true }
  );

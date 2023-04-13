import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useBillboard = () => {
  const { data, error, isLoading } = useSWR("/api/random", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  return { data, error, isLoading };
};

export default useBillboard;

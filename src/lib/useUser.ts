import { useQuery } from "@tanstack/react-query";
import { getMe } from "../api";
import { IUser } from "../types";

export default function useUser() {
  // 'me'라는 키로 캐시를 저장하고, getMe 함수를 실행한다. 이제 언제든지 'me'라는 키로 캐시를 불러올 수 있다.
  const { isLoading, data, isError } = useQuery<IUser>(["me"], getMe, {
    retry: false,
    refetchOnWindowFocus: false,
  });
  return {
    userLoading: isLoading,
    user: data,
    isLoggedIn: !isError,
  };
}

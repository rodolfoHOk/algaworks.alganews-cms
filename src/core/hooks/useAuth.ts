import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import * as AuthActions from "../store/Auth.slice";

export default function useAuth() {
  const user = useSelector((state: RootState) => state.auth.user);
  const fetching = useSelector((state: RootState) => state.auth.fetching);

  const dispatch = useDispatch<AppDispatch>();

  const fetchUser = useCallback(
    async (userId: number) => {
      return dispatch(AuthActions.fetchUser(userId)).unwrap();
    },
    [dispatch]
  );

  return {
    user,
    fetching,
    fetchUser,
  };
}

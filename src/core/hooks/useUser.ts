import { useCallback, useState } from "react";
import { User, UserService } from "rodolfohiok-sdk";

export default function useUser() {
  const [user, setUser] = useState<User.Detailed>();

  const fetchUser = useCallback(async function(userId: number) {
    UserService.getDetailedUser(userId).then(setUser);
  },[]);
  
  return {
    user,
    fetchUser
  }
}

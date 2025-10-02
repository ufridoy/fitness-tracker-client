// src/hooks/useUserRole.js
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useUserRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setRole(null);
      setRoleLoading(false);
      return;
    }

    const fetchRole = async () => {
      setRoleLoading(true);
      try {
        // ✅ তোমার API call (example)
        const res = await fetch(`/api/users/role?email=${user.email}`);
        const data = await res.json();

        setRole(data.role); // ধরে নিচ্ছি response: { role: "admin" }
      } catch (error) {
        console.error("Error fetching role:", error);
        setRole(null);
      } finally {
        setRoleLoading(false);
      }
    };

    fetchRole();
  }, [user]);

  return { role, roleLoading };
};

export default useUserRole;
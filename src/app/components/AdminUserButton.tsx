"use client"; 

import { useUser, UserButton } from "@clerk/nextjs"; // Make sure UserButton is imported here
import { useEffect, useState } from "react";

const AdminUserButton = () => {
  const { user } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user?.publicMetadata?.roles && Array.isArray(user.publicMetadata.roles)) {
      setIsAdmin(user.publicMetadata.roles.includes("admin"));
    }
  }, [user]);

  return isAdmin ? (
    <div>
      {/* Render the UserButton only for admins */}
      <UserButton />
    </div>
  ) : (
    <div>You do not have permission to access this page.</div>
  );
};

export default AdminUserButton;

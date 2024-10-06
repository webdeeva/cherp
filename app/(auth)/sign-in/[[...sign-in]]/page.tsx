import { SignIn } from "@clerk/nextjs";
import './api/globals.css'; // Ensure this import is present if not already

export default function Page() {
  return (
    <div className="center-container">
      <SignIn />
    </div>
  );
}

import { RootNavigator } from "@/navigation";
import { AuthProvider } from "@/context";

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

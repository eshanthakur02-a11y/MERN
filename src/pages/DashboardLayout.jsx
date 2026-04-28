import { Outlet, Navigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";

export default function DashboardLayout() {
  const user = localStorage.getItem("ai_user");
  if (!user) return <Navigate to="/login" replace />;

  const parsed = JSON.parse(user);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#050505]">
        <div className="border-r border-white/5 bg-black/20 backdrop-blur-2xl">
          <DashboardSidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <header className="h-20 flex items-center justify-between border-b border-white/5 bg-black/20 backdrop-blur-xl px-8 pr-12">
            <SidebarTrigger className="ml-1 hover:bg-white/5" />
            <div className="flex items-center gap-6">

              <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border-white/5 bg-white/5">
                <span className="text-sm font-medium text-foreground">{parsed.name}</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-xs font-bold text-primary-foreground shadow-glow">
                  {parsed.name?.[0]?.toUpperCase() || "U"}
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-10 bg-gradient-subtle">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

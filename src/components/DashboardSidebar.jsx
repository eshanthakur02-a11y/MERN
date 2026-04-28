import { FileText, Image, Video, Wand2, Sparkles, History, LayoutDashboard, LogOut } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const tools = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Text Generator", url: "/dashboard/text", icon: FileText },
  { title: "Image Generator", url: "/dashboard/image", icon: Image },
  { title: "Video Generator", url: "/dashboard/video", icon: Video },
  { title: "Summarizer", url: "/dashboard/summarizer", icon: Wand2 },
  { title: "Script Generator", url: "/dashboard/script", icon: Sparkles },
  { title: "History", url: "/dashboard/history", icon: History },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("ai_user");
    navigate("/");
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-white/5 bg-[#030303]">
      <SidebarContent className="bg-[#030303]">
        <SidebarGroup>
          <div className="px-3 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-glow transition-transform hover:scale-110">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              {!collapsed && <span className="font-display text-xl font-bold tracking-tight">Content<span className="text-primary">AI</span></span>}
            </div>
          </div>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {tools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all hover:bg-white/5 hover:text-primary active:scale-95"
                      activeClassName="bg-primary/10 text-primary font-semibold shadow-[inset_0_0_10px_rgba(var(--primary),0.1)] border-l-2 border-primary"
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout} className="text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              <LogOut className="mr-2 h-4 w-4" />
              {!collapsed && <span>Logout</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

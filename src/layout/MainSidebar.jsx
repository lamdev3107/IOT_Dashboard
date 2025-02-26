import React, { useState } from "react";
import {
  Calendar,
  ChevronDown,
  Home,
  Inbox,
  LucideBlocks,
  LucideChartArea,
  LucideSwatchBook,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "@/utils/constants";

const items = [
  {
    title: "Trang chủ",
    url: ROUTES.DASHBOARD,
  },
  {
    title: "Lịch sử bật tắt",
    url: ROUTES.HISTORY,
  },
  {
    title: "Dữ liệu cảm biến",
    url: ROUTES.DEVICES,
  },
  {
    title: "Tài khoản",
    url: ROUTES.PROFILE,
  },
  {
    title: "Settings",
    url: "",
    // icon: Settings,
  },
];
export const MainSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <Sidebar collapsible="icon" className="z-50 overflow-y-hidden">
      <SidebarHeader className="bg-white flex items-center justify-items-center">
        <Link to={ROUTES.DASHBOARD}>IOT DashBoard</Link>
        {/* <AdminHeader /> */}
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel>Trang quản lý</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, id) => {
                return (
                  <SidebarMenuButton
                    asChild
                    key={id}
                    isActive={pathname === item.url}
                  >
                    <Link to={item.url} className="flex items-center gap-2">
                      <LucideChartArea />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
};

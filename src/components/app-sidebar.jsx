import * as React from "react";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
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
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ROUTES } from "@/utils/constants";
import { Link, useLocation } from "react-router-dom";
import {
  LucideChartArea,
  LucideCircleUser,
  LucideDatabaseZap,
  LucideHistory,
  LucideHouse,
} from "lucide-react";
import { LuSettings } from "react-icons/lu";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Trang chủ",
      icon: <LucideHouse size={20} />,
      url: ROUTES.DASHBOARD,
    },
    {
      title: "Lịch sử bật tắt",
      icon: <LucideHistory />,
      url: ROUTES.HISTORY,
    },
    {
      title: "Dữ liệu cảm biến",
      icon: <LucideDatabaseZap />,
      url: ROUTES.SENSOR_DATA,
    },
    {
      title: "Tài khoản",
      icon: <LucideCircleUser />,
      url: ROUTES.PROFILE,
    },
    // {
    //   title: "Settings",
    //   icon: <LuSettings />,
    //   url: "",
    // },
  ],
};

export function AppSidebar({ ...props }) {
  const { pathname } = useLocation();
  return (
    <Sidebar
      className="shadow-[inset_0px_4px_10px_#d5e7fb] bg-primary "
      {...props}
    >
      <SidebarHeader>{/* <SearchForm /> */}</SidebarHeader>
      <SidebarContent className="overflow-hidden">
        {/* We create a SidebarGroup for each parent. */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-primaryBlue flex items-center text-xl font-bold mb-4 ">
            IOT DASHBOARD
          </SidebarGroupLabel>
          <SidebarGroupContent className="ml-4">
            <SidebarMenu className="overflow-hidden">
              {data.navMain.map((item, id) => {
                return (
                  <SidebarMenuButton
                    asChild
                    key={id}
                    className={`${
                      pathname === item.url
                        ? "bg-white text-primaryBlue  hover:bg-white hover:text-primaryBlue rounded-l-full overflow-hidden shadow-md"
                        : "bg-transparent hover:bg-blue-100  rounded-l-full overflow-hidden"
                    }  `}
                    // isActive={pathname === item.url}
                  >
                    <Link
                      to={item.url}
                      className="  flex items-center gap-2 h-fit "
                    >
                      {
                        <div
                          className={`p-2 rounded-l-full ${
                            pathname === item.url
                              ? "bg-primaryBlue rounded-full shadow-inner text-white "
                              : "bg-transparent "
                          } `}
                        >
                          {item.icon}
                        </div>
                      }
                      <span className="text-md">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarRail /> */}
      {/* <SidebarFooter className="flex items-center">
        <SidebarTrigger />
      </SidebarFooter> */}
    </Sidebar>
  );
}

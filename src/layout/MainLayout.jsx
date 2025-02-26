import React from "react";
// import { AdminHeader } from "./AdminHeader";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { MainSidebar } from "./MainSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LucideLogOut } from "lucide-react";

export const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[#f7fcff]">
        <header className="sticky top-0 z-30 bg-[#f7fcff] flex h-[72px] shrink-0 items-center justify-between gap-2  px-4 ">
          <div className="text-xl font-bold ">
            {/* <SidebarTrigger className="-ml-1" /> */}
            Welcom to Smart Home.
          </div>
          <div className="flex justify-between  items-center gap-3 p-1.5 rounded-full bg-primary">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-md font-semibold">Lam Tran</span>
            <Button className="rounded-full p-2 bg-white hover:bg-primaryBlue hover:text-white w-fit h-fit text-gray-700">
              <LucideLogOut />
            </Button>
          </div>
          {/* <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </SidebarInset>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 4000,
          style: {
            background: "#fff",
            color: "#000",
          },
        }}
      />
    </SidebarProvider>
  );
};

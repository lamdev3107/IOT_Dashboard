import { Card, CardContent } from "@/components/ui/card";
import React, { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { LuPencilLine } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UploadCloud } from "lucide-react";

const formSchema = z.object({
  name: z.any(),
  code: z.any(),
  linkGithub: z.any(),
  linkPDF: z.any(),
});
export const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState("https://github.com/shadcn.png");
  const fileInputRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Trần Xuân Lâm",
    code: "B21DCPT138",
    linkGithub: "",
    linkPDF: "",
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: profileData,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  function onSubmit(values) {
    setProfileData(values); // Cập nhật thông tin
    setIsEdit(false); // Tắt chế độ chỉnh sửa
  }

  return (
    <Card className="mt-5 rounded-xl col-span-2 lg:col-span-1 bg-primary shadow-[inset_0px_4px_10px_#d5e7fb] p-6 lg:p-4 text-center">
      <div className="flex justify-between items-center ">
        <h2 className="font-semibold text-xl">Profile</h2>
        <Button
          onClick={() => setIsEdit(!isEdit)}
          className="p-2 rounded-full group shadow-md hover:bg-primaryBlue w-9 h-9"
        >
          <LuPencilLine className="text-black group:hover:text-white" />
        </Button>
      </div>
      <CardContent className="p-0 ">
        <div className="flex gap-6">
          <div
            className="relative w-36 h-36 mx-6"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Avatar className="w-36 h-36 flex-shrink-0">
              <AvatarImage src={image} alt="Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {hovered && isEdit && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer"
                onClick={() => fileInputRef.current.click()}
              >
                <UploadCloud className="w-8 h-8 text-white" />
              </div>
            )}
            {isEdit && (
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            )}
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-4 flex-1"
            >
              <div className="grid col-span-8 grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-2 md:col-span-1 flex flex-col items-start">
                      <FormLabel>Họ tên</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={!isEdit} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem className="col-span-2 md:col-span-1 flex flex-col items-start">
                      <FormLabel>Mã sinh viên</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={!isEdit} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="linkGithub"
                render={({ field }) => (
                  <FormItem className="col-span-2 mt-3 flex flex-col items-start">
                    <FormLabel>Link Github</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isEdit} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkPDF"
                render={({ field }) => (
                  <FormItem className="col-span-2 mt-3 flex flex-col items-start">
                    <FormLabel>Link Báo cáo</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={!isEdit} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {isEdit && (
                <Button
                  className="bg-primaryBlue hover:bg-blue-700"
                  type="submit"
                >
                  Submit
                </Button>
              )}
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};

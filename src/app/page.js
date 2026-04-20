import Mainhome from "@/components/pages/dashboard/Index";
import MainLayout from "@/components/templates/MainLayout";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <MainLayout title="Dashboard">
     <Mainhome/>
    </MainLayout>
   </div>
  );
}

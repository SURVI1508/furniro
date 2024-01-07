import Image from "next/image";
import { NewArrival } from "@/Components/Home/Hero/NewArrival";
import BrowseTheRange from "@/Components/Home/BrowseTheRange";

export default function Home() {
  return (
    <div className="w-full">
      <NewArrival />
      <BrowseTheRange />
    </div>
  );
}

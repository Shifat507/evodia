import Banner from "@/components/Banner";
import Introduce from "@/components/Introduce";
import Navbar from "@/components/Navbar";
import PopularCollectionMale from "@/components/PopularCollectionMale";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <Introduce></Introduce>
        <PopularCollectionMale></PopularCollectionMale>
      </div>
    </div>
  );
}

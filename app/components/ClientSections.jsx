"use client";
import dynamic from "next/dynamic";

const Education = dynamic(() => import("../components/homepage/education"), { ssr: false });
const Experience = dynamic(() => import("../components/homepage/experience"), { ssr: false });

export default function ClientSections() {
  return (
    <>
      <Experience />
      <Education />
    </>
  );
}

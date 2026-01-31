"use client";
import { useState } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "../components/Footer";

export default function Page() {
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  const [s3, setS3] = useState(false);
  const [s4, setS4] = useState(false);
  const [s5, setS5] = useState(false);
  const [s6, setS6] = useState(false);

  return (
    <main className="relative w-full mt-[-100px] overflow-x-hidden">
      <Section1 onFinish={() => setS1(true)} />

      {s1 && <Section2 onFinish={() => setS2(true)} />}
      {s2 && <Section3 onFinish={() => setS3(true)} />}
      {s3 && <Section4 onFinish={() => setS4(true)} />}
      {s4 && <Section5 onFinish={() => setS5(true)} />}
      {s5 && <Section6 onFinish={() => setS6(true)} />}
    </main>
  );
}

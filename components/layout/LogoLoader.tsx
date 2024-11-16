"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const svgContent = `
<svg width="100%" height="100%" viewBox="0 0 4267 4267" xmlns="http://www.w3.org/2000/svg" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(4.16667,0,0,4.16667,0,0)">
        <g id="a" transform="matrix(1,0,0,1,-49.8544,-19.262)">
            <path d="M561.572,244.714c58.012,-0 115.924,148.404 88.736,197.204c-25.007,44.886 -152.464,44.886 -177.472,-0c-27.188,-48.8 30.724,-197.204 88.736,-197.204Z" style="fill:none;stroke:black;stroke-width:50.72px;"/>
        </g>
        <g id="d" transform="matrix(1,0,0,1,-49.8544,371.642)">
            <path d="M490.507,288.367c19.757,-23.17 148.096,-42.678 148.314,83.886c0.191,111.059 -135.58,106.505 -151.039,83.312c-19.037,-28.562 -14.769,-146.684 2.725,-167.198Z" style="fill:none;stroke:black;stroke-width:50.72px;"/>
        </g>
        <path id="outline" d="M696.515,406.057c0,-0 -31.105,-283.711 -184.797,-281.368c-125.719,1.916 -191.28,227.699 -187.58,301.084c3.701,73.385 67.219,106.686 204.739,117.169c137.52,10.484 177.604,148.004 175.754,196.105c-1.85,48.101 -37.618,188.139 -209.055,189.321c-171.438,1.183 -173.288,-60.485 -173.904,-177.038c-0.617,-116.553 3.7,-195.488 141.836,-204.739c138.137,-9.25 252.835,-36.67 233.007,-140.534Z" style="fill:none;stroke:black;stroke-width:49.09px;stroke-linejoin:miter;stroke-miterlimit:1;"/>
        <g id="curve" transform="matrix(1.76419,0,0,1.80464,-395.855,-394.017)">
            <g transform="matrix(0.13604,-0,-0,0.132991,224.383,218.336)">
                <path d="M2098.86,1545.06c-119.448,193.608 -245.38,497.753 -0.539,667.516c422.99,293.286 248.043,607.16 95.193,797.81c-2.701,3.368 -5.454,6.789 -8.252,10.251" style="fill:none;stroke:rgb(21,122,255);stroke-width:91.6px;"/>
            </g>
        </g>
    </g>
</svg>
`;

export default function LogoLoader() {
  const svgContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!svgContainerRef.current) return;

    const svgElement = svgContainerRef.current.querySelector("svg") as SVGSVGElement | null;
    if (!svgElement) {
      console.error("Elemen SVG tidak ditemukan");
      return;
    }

    const aPath = svgElement.querySelector<SVGPathElement>("#a path");
    const dPath = svgElement.querySelector<SVGPathElement>("#d path");
    const outlinePath = svgElement.querySelector<SVGPathElement>("#outline");
    const curvePath = svgElement.querySelector<SVGPathElement>("#curve path");

    if (!aPath || !dPath || !outlinePath || !curvePath) {
      console.error("Satu atau lebih elemen SVG tidak ditemukan");
      return;
    }

    // Mengatur nilai awal strokeDasharray dan strokeDashoffset
    [aPath, dPath, outlinePath, curvePath].forEach((path) => {
      const length = path.getTotalLength();
      // Mengatur strokeDasharray menjadi dua kali panjang path
      path.style.strokeDasharray = `${length} ${length}`;
      // Mengatur strokeDashoffset ke panjang path untuk animasi masuk
      path.style.strokeDashoffset = `${length}`;
    });

    // Membuat timeline animasi dengan repeat
    const tl = gsap.timeline({ 
      repeat: -1, 
      defaults: { ease: "none" }
    });

    // Durasi animasi masuk dan keluar
    const durationIn = 1; // Durasi animasi masuk
    const durationOut = 1; // Durasi animasi keluar
    const delayBetween = 0.5; // Jeda antara animasi masuk dan keluar

    // Animasi masuk untuk semua elemen secara bersamaan
    tl.to([aPath, dPath, outlinePath, curvePath], { 
      strokeDashoffset: 0, 
      duration: durationIn
    }, 0)
    // Jeda sebelum animasi keluar dimulai
    .to({}, { duration: delayBetween })
    // Animasi keluar untuk semua elemen secara bersamaan
    .to([aPath, dPath, outlinePath, curvePath], {
      strokeDashoffset: (i, target) => - (target as SVGPathElement).getTotalLength(),
      duration: durationOut
    }, "+=0");
  }, []);

  return (
    <div style={{ width: "300px", height: "300px" }}>
      {/* Menggunakan ref pada div yang mengandung SVG */}
      <div
        ref={svgContainerRef}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}

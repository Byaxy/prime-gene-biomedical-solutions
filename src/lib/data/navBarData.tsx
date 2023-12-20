import {
  FaAtom,
  FaBone,
  FaHeartbeat,
  FaMicroscope,
  FaPills,
  FaRadiationAlt,
  FaDog,
  FaTooth,
  FaUserGraduate,
  FaStethoscope,
  FaXRay,
  FaDotCircle,
} from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { RiFilter2Fill } from "react-icons/ri";
import { HiBeaker } from "react-icons/hi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { GiOfficeChair } from "react-icons/gi";

export const navBarData = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about-us",
    title: "About Us",
    path: "/about-us",
    section: [
      {
        title: "Our Philosophy",
        id: "#our-philosophy",
      },
      {
        title: "Our Profile",
        id: "#our-profile",
      },
      {
        title: "Cooperate Policy",
        id: "#cooperate-policy",
      },
      {
        title: "Our Partners",
        id: "#our-partners",
      },
    ],
  },
  {
    id: "products-and-solutions",
    title: "Products & Solutions",
    path: "/products-and-solutions",
    sections: [
      {
        id: "laboratory",
        title: "Laboratory Solutions",
        path: "/products-and-solutions/laboratory-solutions",
        icon: <FaMicroscope />,
        sections: [
          {
            id: "chemistry",
            title: "Chemistry Solutions",
            path: "/products-and-solutions/laboratory-solutions/chemistry-solutions",
            icon: <HiBeaker />,
            sections: [
              {
                id: "biochemistry",
                title: "Biochemistry Solutions",
                sections: [
                  {
                    id: "dry-chemistry-systems",
                    title: "Dry Chemistry Systems",
                    sections: [
                      {
                        title: "MNCHIP CM-5 Dry Chemistry System",
                      },
                    ],
                  },
                  {
                    id: "wet-chemistry-systems",
                    title: "Wet Chemistry Systems",
                    sections: [
                      {
                        id: "semi-automated-chemistry-systems",
                        title: "Semi-Automated Chemistry Systems",
                        sections: [
                          {
                            title: "Genrui WP-21A Semi-Automated Systems",
                          },
                          {
                            title: "Mindray BA-88A Semi-Automated Systems",
                          },
                        ],
                      },
                      {
                        id: "full-automated-chemistry-systems",
                        title: "Full Automated Chemistry Systems",
                        sections: [
                          {
                            title:
                              "Genrui GS-300Plus Fully Automated Chemistry Systems",
                          },
                          {
                            title:
                              "Bioassays 240 Plus Fully Automated Chemistry Systems",
                          },
                          {
                            title:
                              "Mindray BS-240 Pro Fully Automated Chemistry Systems",
                          },
                          {
                            title:
                              "Erba XL180 Fully Automated Chemistry Systems",
                          },
                          {
                            title:
                              "Erba XL200 Fully Automated Chemistry Systems",
                          },
                          {
                            title:
                              "Roche COBAS C311 Fully Automated Chemistry Systems",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: "wet-chemistry-reagents",
                    title: "Wet Chemistry Reagents, Controls and Calibrators",
                    sections: [
                      {
                        title: "Biorex Wet Chemistry Reagent",
                      },
                      {
                        title: "Mindray Wet Chemistry Reagents",
                      },
                      {
                        title: "Randox Chemistry Reagents",
                      },
                      {
                        title: "Roche Chemistry Reagents",
                      },
                      {
                        title: "SFRI Chemistry Reagents",
                      },
                      {
                        title: "Beckman Coulter Chemistry Reagents",
                      },
                      {
                        title: "Olympus Chemistry Reagents",
                      },
                      {
                        title: "Hitachi Chemistry Reagents",
                      },
                      {
                        title: "Abbot Chemistry Reagents",
                      },
                      {
                        title: "Toshiba Chemistry Reagents",
                      },
                      {
                        title: "ORTHO VITROS Chemistry Reagents",
                      },
                      {
                        title: "PENTRA Chemistry Reagents",
                      },
                      {
                        title: "SIEMENS Chemistry Reagents",
                      },
                      {
                        title: "THERMO KONELAB Chemistry Reagents",
                      },
                      {
                        title: "VITALAB FLEXOR Chemistry Reagents",
                      },
                    ],
                  },
                ],
              },
              {
                id: "electrolyte",
                title: "Electrolyte Solutions",
                sections: [
                  {
                    title: "Genrui GE500 Electrolyte System",
                  },
                  {
                    title: "IONIX Electrolyte System",
                  },
                  {
                    title: "ISE ION Electrolyte System",
                  },
                  {
                    title: "Erba Lyte Electrolyte System",
                  },
                  {
                    title: "MNCHIP CM-5 Electrolyte System",
                  },
                ],
              },
              {
                id: "blood-gas",
                title: "Blood gas Solutions",
                sections: [
                  {
                    title: "Edan i15 Blood Gas system",
                  },
                ],
              },
              {
                id: "haemoglobin",
                title: "Haemoglobin A1c Solutions",
                sections: [
                  {
                    title: "Hemocue 501 HbA1C Systems",
                  },
                ],
              },
            ],
          },
          {
            id: "hematology",
            title: "Haematology Solutions",
            path: "/products-and-solutions/laboratory-solutions/haematology",
            icon: <FaHeartbeat />,
            sections: [
              {
                id: "fbc-cbc",
                title: "FBC/CBC System",
                sections: [
                  {
                    id: "3-part-fbc-cbc-system",
                    title: "3-Parts FBC/CBC System System",
                    sections: [
                      {
                        title: "GENRUI KT-60 3-Part Haematology system",
                      },
                      {
                        title: "ERBA MANNHEIM 3-Part Haematology Systems",
                      },
                      {
                        title: "SFRI COUNTENDER 20+ 3-Part Haematology Systems",
                      },
                      {
                        title: "SFRI H18 LIGHT 3-Part Haematology Systems",
                      },
                      {
                        title: "SFRI HEMIX 3-30 3-Parts Haematology Systems",
                      },
                      {
                        title: "Mindray BC-10 3-Parts Haematology Systems",
                      },
                      {
                        title: "Mindray BC-20 3-Parts Haematology Systems",
                      },
                      {
                        title: "Mindray BC-20S 3-Parts Haematology Systems",
                      },
                      {
                        title: "Mindray BC-30 3-Parts Haematology Systems",
                      },
                      {
                        title: "Mindray BC-30S 3-Parts Haematology Systems",
                      },
                    ],
                  },
                  {
                    id: "5-part-fbc-cbc-system",
                    title: "5-Parts FBC/CBC System System",
                    sections: [
                      {
                        title: "Genrui KT-6600 5-Parts Hematology System",
                      },
                      {
                        title: "Genrui KT-8000 5-Parts Hematology System",
                      },
                      {
                        title: "ERBAH H-560 5-Parts Haematology System",
                      },
                      {
                        title: "ERBAH H-580 5-Parts Haematology System",
                      },
                      {
                        title: "SFRI HEMIX 5-60 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-700S 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-5000 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-5000 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-5300 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-5310CRP 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-5380 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-5390 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-5390CRP 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-6000 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-6200 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-6800 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-6800Plus 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray BC-7500CRP 5-Parts Haematology System",
                      },
                      {
                        title: "Mindray MC-80 Digital Cell Morphology System",
                      },
                    ],
                  },
                  {
                    id: "fbc-cbc-reagents",
                    title: "FBC/CBC Reagents/Calibrators/QC Systems",
                    sections: [
                      {
                        title:
                          "ABBOTT® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "BECKMAN COULTER® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "DIATRON ® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "HORIBA® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "MEDONIC® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "MINDRAY® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "NIHON KOHDEN® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "ORPHÉE® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "PROKAN® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "RAYTO® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "SIEMENS® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "SWELAB® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "SYSMEX® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "URIT® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "GENRUI® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                      {
                        title:
                          "DYMIND® Series FBC/CBC Reagents/Calibrators/QC Systems",
                      },
                    ],
                  },
                ],
              },
              {
                id: "hemostasis-system",
                title: "Hemostasis System",
                sections: [
                  {
                    id: "fully-automated-coagulation-systems",
                    title: "Fully Automated Coagulation Systems",
                    sections: [
                      {
                        title: "ERBAH ECL 760 Coagulation Systems",
                      },
                    ],
                  },
                  {
                    id: "semi-automated-coagulation-systems",
                    title: "Semi-Automated Coagulation Systems",
                    sections: [
                      {
                        title: "ERBAH ECL 105 Coagulation Systems",
                      },
                      {
                        title: "ERBAH ECL 412 Coagulation Systems",
                      },
                      {
                        title: "GENRUI CA52 Coagulation Systems",
                      },
                      {
                        title: "GENRUI CA54 Coagulation Systems",
                      },
                    ],
                  },
                ],
              },
              {
                id: "haematology-poct-meters",
                title: "Haematology POCT Meters",
                sections: [
                  {
                    id: "hb-meters",
                    title: "Hb-Meters",
                    sections: [
                      {
                        title: "AllTest Hb Meter",
                      },
                      {
                        title: "Hemocue Hb 301 Hb System",
                      },
                      {
                        title: "Hemocue Hb 801 Hb System",
                      },
                      {
                        title: "Urit-12 Hb Systems",
                      },
                      {
                        title: "Urit Ph-01 Hb System",
                      },
                    ],
                  },
                  {
                    id: "wbc-meters",
                    title: "WBC Meters",
                    sections: [
                      {
                        title: "Hemaocue WBC Meters",
                      },
                      {
                        title: "Hemaocue WBC DIFF Meters",
                      },
                    ],
                  },
                ],
              },
              {
                id: "esr-system",
                title: "ESR System",
                sections: [
                  {
                    id: "fully-automated-esr-system",
                    title: "Fully Automated ESR System",
                    sections: [
                      {
                        title: "ORON-200 ESR System",
                      },
                      {
                        title: "ORON-400 ESR System",
                      },
                      {
                        title: "SFRI ESR-3000 System",
                      },
                      {
                        title: "Vision Fully Auto ESR System",
                      },
                      {
                        title: "VisionPro Fully Auto ESR System",
                      },
                    ],
                  },
                  {
                    id: "manual-automated-esr-system",
                    title: "Manual ESR System",
                    sections: [
                      {
                        title: "ESR stands",
                      },
                      {
                        title: "ESR Reagents Tubes",
                      },
                    ],
                  },
                ],
              },
              {
                id: "electrophoresis-system",
                title: "Electrophoresis systems",
                sections: [
                  {
                    id: "semi-automated-system",
                    title: "Semi-Automated system",
                    sections: [
                      {
                        title: "HLPC System",
                      },
                      {
                        title: "Electrophoresis Tank",
                      },
                      {
                        title: "Electrophoresis Power Pack",
                      },
                      {
                        title: "Electrophoresis Consumables",
                      },
                    ],
                  },
                  {
                    id: "rapid-automated-system",
                    title: "Rapid Electrophoresis Kits",
                    sections: [
                      {
                        title: "HemoTypeSC Electrophoresis kits",
                      },
                      {
                        title: "Sickle Scan Electrophoresis kits",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "immunoserology",
            title: "Immunoserology Solutions",
            path: "/products-and-solutions/laboratory-solutions/immunoserology",
            icon: <FaPills />,
            sections: [
              {
                id: "clia-systems",
                title: "CLIA Systems",
                sections: [
                  {
                    id: "clia-poct-systems",
                    title: "CLIA POCT Systems",
                    sections: [
                      {
                        title: "Finecare™-FIA-Meter-Plus",
                      },
                      {
                        title: "i-Chroma-II-immune-assay System",
                      },
                      {
                        title: "Flourecare immune-assay System",
                      },
                      {
                        title: "Genrui Minifine 6 immune-assay System",
                      },
                    ],
                  },
                  {
                    id: "semi-automated-clia-systems",
                    title: "Semi-Automated CLIA Systems",
                    sections: [
                      {
                        title: "CLIA Pro CLIA Systems",
                      },
                      {
                        title: "CLIA Plus CLIA Systems",
                      },
                    ],
                  },
                  {
                    id: "fully-automated-clia-systems",
                    title: "Fully Automated CLIA System",
                    sections: [
                      {
                        title: "Genrui MT-60 CLIA System",
                      },
                      {
                        title: "HLO iFlash 1200 CLIA System",
                      },
                      {
                        title: "YHLO iFlash 1800 CLIA System",
                      },
                      {
                        title: "YHLO iFlash 3000 CLIA System",
                      },
                      {
                        title: "Mindray CL-900i CLIA System",
                      },
                      {
                        title: "Mindray CL-1000i CLIA System",
                      },
                      {
                        title: "Mindray CL-2000i CLIA System",
                      },
                      {
                        title: "Mindray CL-6000i CLIA System",
                      },
                      {
                        title: "Roche Cobas e 411 CLIA System",
                      },
                      {
                        title: "Snibe Maglumi 600 CLIA System",
                      },
                      {
                        title: "Snibe Maglumi 800 CLIA System",
                      },
                      {
                        title: "Snibe Maglumi 2000 CLIA System",
                      },
                      {
                        title: "Snibe Maglumi 2000Plus CLIA System",
                      },
                      {
                        title: "Snibe Maglumi 4000Plus CLIA System",
                      },
                      {
                        title: "Snibe Maglumi X3 CLIA System",
                      },
                      {
                        title: "Snibe Maglumi X6 CLIA System",
                      },
                      {
                        title: "Snibe Maglumi X8 CLIA System",
                      },
                    ],
                  },
                  {
                    id: "clia-reagents-systems",
                    title: "CLIA Reagents Systems",
                    sections: [
                      {
                        title: "Allergy Assays",
                      },
                      {
                        title: "Autoimmune Thyroid Assays",
                      },
                      {
                        title: "Cardio-Vascular Monitoring",
                      },
                      {
                        title: "Diabetes Assays",
                      },
                      {
                        title: "Fertility Assays",
                      },
                      {
                        title: "Growth Deficiency",
                      },
                      {
                        title: "Infectious Disease Assays",
                      },
                      {
                        title: "Others",
                      },
                      {
                        title: "Steroid Assays",
                      },
                      {
                        title: "Thyroid Assays",
                      },
                      {
                        title: "Tumour Marker Assays",
                      },
                    ],
                  },
                ],
              },
              {
                id: "eliza-systems",
                title: "ELIZA Systems",
                sections: [
                  {
                    id: "eliza-fully-automated-systems",
                    title: "Fully Automated Systems",
                    sections: [
                      {
                        title: "YHLO UNION ELIZA SYSTEM",
                      },
                      {
                        title: "ERBAH MANGO 4 ELIZA SYSTEM",
                      },
                      {
                        title: "Erba LisaXL ELIZA SYSTEM",
                      },
                      {
                        title: "Erba ELAN 30s ELIZA SYSTEM",
                      },
                      {
                        title: "Bio-2+ ELIZA SYSTEM",
                      },
                    ],
                  },
                  {
                    id: "eliza-semi-automated-systems",
                    title: "Semi-Automated Systems",
                    sections: [
                      {
                        title: "SFRI IRE ELISA Microplate Reader",
                      },
                      {
                        title: "Erba LisaScan II Microplate Reader",
                      },
                      {
                        title: "Microscan Microplate Reader",
                      },
                      {
                        title: "PKL PPC 142 Microplate Reader",
                      },
                      {
                        title: "URIT-660 Microplate Reader",
                      },
                      {
                        title: "SFRI IW ELISA Microplate Washer",
                      },
                      {
                        title: "BK-EL10C ELISA Microplate Washer",
                      },
                      {
                        title: "PKL PPC 152 ELISA Microplate Washer",
                      },
                      {
                        title: "Erba LisaWash ELISA Microplate Washer",
                      },
                      {
                        title: "Innowash Microplate Washer",
                      },
                    ],
                  },
                  {
                    id: "eliza-kits",
                    title: "ELIZA Kits",
                    sections: [
                      {
                        title: "Anaemia ELISA kits",
                      },
                      {
                        title: "Allergy ELISA kits",
                      },
                      {
                        title: "Autoimmune Disease kits",
                      },
                      {
                        title: "Bone Metabolism ELISA kits",
                      },
                      {
                        title: "Blood bank ELISA kits",
                      },
                      {
                        title: "Cancer ELISA kits",
                      },
                      {
                        title: "Cardiac Markers ELISA kits",
                      },
                      {
                        title: "Diabetes Assays ELISA kits",
                      },
                      {
                        title: "Drug test ELISA kits",
                      },
                      {
                        title: "Fertility ELISA kits",
                      },
                      {
                        title: "Food ELISA kits",
                      },
                      {
                        title: "Food Adulterants ELISA kits",
                      },
                      {
                        title: "Food Toxins ELISA kits",
                      },
                      {
                        title: "Food Nutrients ELISA kits",
                      },
                      {
                        title: "Infectious Disease ELISA kits",
                      },
                      {
                        title: "Hepatitis ELISA kits",
                      },
                      {
                        title: "TORCH Panel",
                      },
                      {
                        title: "HIV ELISA kit",
                      },
                      {
                        title: "Other ELISA Kits",
                      },
                      {
                        title: "Parasitology ELISA kits",
                      },
                      {
                        title: "Steroid ELISA kits",
                      },
                      {
                        title: "Thyroid ELISA kits",
                      },
                    ],
                  },
                ],
              },
              {
                id: "latex-serology-tests",
                title: "Latex Serology Tests",
                sections: [
                  {
                    title: "Febrile Antigens",
                  },
                  {
                    title: "Syphilis Markers",
                  },
                  {
                    title: "Other Serology Markers",
                  },
                ],
              },
            ],
          },
          {
            id: "microbiology",
            title: "Microbiology Solutions",
            path: "/products-and-solutions/laboratory-solutions/microbiology",
            icon: <FaMicroscope />,
            sections: [
              {
                id: "equipment-and-accessories",
                title: "Equipment and Accessories",
                sections: [
                  {
                    id: "blood-culture-systems",
                    title: "Blood Culture System",
                    sections: [
                      {
                        title: "TDR Automated Blood Culture System",
                      },
                      {
                        title: "Autobio BC60 Blood Culture Machine.",
                      },
                      {
                        title: "TDR-X030 Automated Blood Culture Systems",
                      },
                      {
                        title: "Labstar 50 Automated Blood Culture System",
                      },
                      {
                        title: "Labstar 60 Automated Blood Culture System",
                      },
                      {
                        title: "Labstar 100 Automated Blood Culture System",
                      },
                      {
                        title: "Labstar 120 Automated Blood Culture System",
                      },
                      {
                        title: "Labstar EX Automated Blood Culture System",
                      },
                      {
                        title: "Blood Enrichment Culture Bottle",
                      },
                      {
                        title: "Floresent Blood Enrichment Culture Bottle",
                      },
                    ],
                  },
                  {
                    id: "anaerobic-culture-systems",
                    title: "Anaerobic Culture System",
                    sections: [
                      {
                        title: "Anaerobic Container",
                      },
                      {
                        title: "Anaerobic Culture Jar",
                      },
                      {
                        title: "Anaerobic Culture Jar II",
                      },
                      {
                        title: "Anaerobic Gas Pack",
                      },
                      {
                        title: "Anaerobic Indicator Strip",
                      },
                      {
                        title: "Anaerobic Test Tube Rack",
                      },
                      {
                        title: "Catalyst for Anaerobic Jar",
                      },
                    ],
                  },
                  {
                    id: "sample-preparation-systems",
                    title: "Sample Preparation System",
                    sections: [
                      {
                        title: "Nephelometer",
                      },
                      {
                        title: "Liquid Handling System",
                      },
                      {
                        title: "Colony Spreader",
                      },
                      {
                        title: "Automated Liquid Handling System",
                      },
                      {
                        title: "Automated Staining System",
                      },
                    ],
                  },
                  {
                    id: "microbial-idast-systems",
                    title: "Microbial ID/AST System",
                    sections: [
                      {
                        title:
                          "ALIFAX SIDECAR AUTOMATED STREAKING CULTURE SYSTEMS",
                      },
                      {
                        title: "TDR-300B Plus Microorganism Analysis System",
                      },
                      {
                        title: "ALFRED 60 AUTOMATED BACTERIAL C/S SYSTEM",
                      },
                      {
                        title: "XK Microbial ID/AST System",
                      },
                      {
                        title: "XK-II Microbial ID/AST System",
                      },
                      {
                        title: "Automated Rapid AST System",
                      },
                      {
                        title: "Formula Rapid AST System",
                      },
                      {
                        title: "ID/AST Combo Panel",
                      },
                      {
                        title: "AST Panel",
                      },
                      {
                        title: "ID Panel",
                      },
                    ],
                  },
                  {
                    id: "automated-platers",
                    title: "Automated Platers",
                    sections: [
                      {
                        title: "Easy Spiral Automatic plater",
                      },
                      {
                        title: "Easy Spiral Pro Automatic plater",
                      },
                      {
                        title: "Easy Spiral Pro Milk Automatic plater",
                      },
                      {
                        title: "Easy Spiral Automatic dilutor and plater",
                      },
                    ],
                  },
                  {
                    id: "colony-counters",
                    title: "Colony counters",
                    sections: [
                      {
                        title: "Scan 50 Manual colony counter",
                      },
                      {
                        title: "Scan 50pro Manual colony counter",
                      },
                      {
                        title: "Scan 100 Manual colony counter",
                      },
                      {
                        title: "Scan 300 automated colony counter",
                      },
                      {
                        title: "Scan 500 automated colony counter",
                      },
                      {
                        title: "Scan 1200 HD automated colony counter",
                      },
                      {
                        title: "Scan 4000 Ultra-HD automated colony counter",
                      },
                    ],
                  },
                  {
                    id: "inhibition-zone-readers",
                    title: "Inhibition zone readers",
                    sections: [
                      {
                        title: "Scan 500 Inhibition zone reader",
                      },
                      {
                        title: "Scan 1200 HD inhibition zone reader",
                      },
                      {
                        title: "Scan 4000 Ultra HD inhibition zone reader",
                      },
                    ],
                  },
                  {
                    id: "real-time-incubators",
                    title: "Real-time incubator and colony counter",
                    sections: [
                      {
                        title:
                          "Scan Station 100 Real-time incubator and colony counter",
                      },
                      {
                        title:
                          "Scan Station 200 Real-time incubator and colony counter",
                      },
                      {
                        title:
                          "Scan Station 300 Real-time incubator and colony counter",
                      },
                    ],
                  },
                ],
              },
              {
                title: "Bunsen burner",
              },
              {
                title: "Bacti-cinerator Sterilizer",
              },
              {
                title: "Inoculation Loop & Wire",
              },
              {
                title: "Sterilization Pouch",
              },
              {
                title: "Autoclave Indicator Tape",
              },
              {
                title: "Media dispensers",
              },
              {
                title: "Cell Counters",
              },
              {
                title: "Cytometers",
              },
              {
                id: "culture-media",
                title: "Culture Media",
                sections: [
                  {
                    title: "Dehydrated Culture Media",
                  },
                  {
                    title: "Media Supplements",
                  },
                  {
                    title: "Media Bases",
                  },
                  {
                    title: "Blood culture",
                  },
                  {
                    title: "Agents and Enrichments",
                  },
                  {
                    title: "Sterile Ready Prepared Plates",
                    sections: [
                      {
                        title: "Sterile Ready Prepared Plates (55 mm)",
                      },
                      {
                        title: "Sterile Ready Prepared Plates (90 mm)",
                      },
                      {
                        title: "Ready-to-use 90mm agar plates",
                      },
                      {
                        title: "Ready-to-use 140mm agar plates",
                      },
                      {
                        title: "Ready-to-use 2-3 sectors agar plates",
                      },
                    ],
                  },
                ],
              },
              {
                id: "microbial-idast-systems",
                title: "Microbial ID/AST systems",
                sections: [
                  {
                    id: "antimicrobial-resistance-management",
                    title: "Antimicrobial Resistance Management",
                    sections: [
                      {
                        title: "MTS™ (MIC Test Strip)",
                      },
                      {
                        title: "MTS™ Synergy Application System",
                      },
                      {
                        title: "Antibiotic Discs",
                      },
                      {
                        title: "Agar Dilution panels",
                      },
                      {
                        title: "ComASP™",
                      },
                      {
                        title: "NP tests",
                      },
                      {
                        title: "Chromogenic media for ART",
                      },
                      {
                        title: "HEAR",
                      },
                    ],
                  },
                  {
                    id: "microbial-identification-systems",
                    title: "Microbial Identification systems",
                    sections: [
                      {
                        title: "ID Systems",
                      },
                      {
                        title: "Biochemical tests for microbial ID",
                      },
                      {
                        title: "Chromogenic media for microbial ID",
                      },
                      {
                        title: "Sugar Fermentation",
                      },
                    ],
                  },
                  {
                    id: "antimicrobial-susceptibility-discs",
                    title: "Antimicrobial Susceptibility Discs",
                    sections: [
                      {
                        title: "Amino Acid Discs",
                      },
                      {
                        title: "Antifungal Discs as per CLSI",
                      },
                      {
                        title: "Antifungal Discs Customized Concentrations",
                      },
                      {
                        title: "Antimicrobial Susceptibility Discs as per CLSI",
                      },
                      {
                        title:
                          "Antimicrobial Susceptibility Discs Customized Concentrations",
                      },
                      {
                        title: "Carbohydrate Fermentation Discs",
                      },
                      {
                        title: "Differential Discs",
                      },
                    ],
                  },
                  {
                    id: "micropro-systems",
                    title: "Micropro® System",
                    sections: [
                      {
                        title: "Micropro® - AST",
                      },
                      {
                        title: "Micropro® - BMD Kit",
                      },
                      {
                        title: "Micropro® - Broth Culture System",
                      },
                      {
                        title: "Micropro® - MIC",
                      },
                      {
                        title: "Micropro® - ValiD",
                      },
                    ],
                  },
                  {
                    id: "urine-analysis",
                    title: "Urine analysis",
                    sections: [
                      {
                        title: "Dip-slide",
                      },
                      {
                        title: "Direct ID-AST systems",
                      },
                      {
                        title: "Chromatic detection",
                      },
                    ],
                  },
                ],
              },
              {
                id: "transport-media",
                title: "Transport media",
                sections: [
                  {
                    title: "VTM",
                  },
                  {
                    title: "Mycoplasma",
                  },
                  {
                    title: "Bio-Cult",
                  },
                ],
              },
              {
                id: "ready-to-use-products",
                title: "Ready to Use Products",
                sections: [
                  {
                    title: "Biochemical Identification Kits",
                  },
                  {
                    title: "Blood Culturing Systems",
                  },
                  {
                    title: "EMswabTM (Environmental Monitoring Swab)",
                  },
                  {
                    title: "Instaprep®Range",
                  },
                  {
                    title: "Microbial Limit Test",
                  },
                  {
                    title: "Mycobacteriology",
                  },
                  {
                    title: "Presumptive Identification Tests",
                  },
                  {
                    title: "Ready Prepared Bottle Media",
                  },
                  {
                    title: "Ready Prepared Slant",
                  },
                  {
                    title: "Sterility Test Media",
                  },
                  {
                    title: "Transport Medium",
                  },
                  {
                    title: "Urine Culture",
                  },
                  {
                    title: "Viral Transport Media",
                  },
                  {
                    title: "Wash Solutions",
                  },
                  {
                    title: "Water Quality Testing Kits",
                  },
                ],
              },
              {
                id: "sterile-disinfectants",
                title: "Sterile Disinfectants",
                sections: [
                  {
                    title: "Environment and Surface Disinfection",
                  },
                  {
                    title: "Hand Disinfection",
                  },
                ],
              },
              {
                id: "stains-analytical-reagents-indicators",
                title: "Stains, Analytical Reagents & Indicators",
                sections: [
                  {
                    title: "Analytical Reagents and Indicators",
                  },
                  {
                    title: "AutoKrom™",
                  },
                  {
                    title: "Other Analytical Reagents",
                  },
                  {
                    title: "Stain Available in Ready to Use Kit",
                  },
                  {
                    title: "Staining Solutions for Microbiology",
                  },
                  {
                    title: "Stains for Cytology and Histology",
                  },
                  {
                    title: "Stains for Haematology",
                  },
                ],
              },
              {
                id: "quality-control-organisms",
                title: "Quality Control organisms",
                sections: [
                  {
                    title: "Lyophilized organisms",
                  },
                ],
              },
              {
                id: "urinalysis-systems",
                title: "Urinalysis Systems",
                sections: [
                  {
                    id: "complete-automated-urinalysis-systems",
                    title: "Complete Automated Urinalysis Systems",
                    sections: [
                      {
                        title: "FUS-1000 Urinalysis Hybrid",
                      },
                      {
                        title: "FUS-2000 Urinalysis Hybrid",
                      },
                      {
                        title: "FUS-3000Plus Urinalysis Hybrid",
                      },
                      {
                        title: "MUS-3600 Urinalysis Hybrid",
                      },
                      {
                        title: "MUS-9600 Urinalysis Hybrid",
                      },
                      {
                        title: "LAURA XL Systems",
                      },
                    ],
                  },
                  {
                    id: "urine-sediment-urinalysis-systems",
                    title: "Urine Sediment Urinalysis Systems",
                    sections: [
                      {
                        title: "FUS-360 Urine Sediment System",
                      },
                    ],
                  },
                  {
                    id: "urine-chemistry-urinalysis-systems",
                    title: "Urine Chemistry Urinalysis Systems",
                    sections: [
                      {
                        title: "Ultrona TM Urine Analyzer",
                      },
                      {
                        title: "EZCHEK TM Urine Analyzer",
                      },
                      {
                        title: "Oriana TM Urine Analyzer",
                      },
                      {
                        title: "HC-300 Urine Analyzer",
                      },
                      {
                        title: "HC-500 Urine Analyzer",
                      },
                      {
                        title: "HC-800 Urine Analyzer",
                      },
                      {
                        title: "LAURA Smart",
                      },
                      {
                        title: "LAURA",
                      },
                    ],
                  },
                  {
                    id: "urinalysis-kits-system",
                    title: "Urinalysis kits System",
                    sections: [
                      {
                        title: "Allele Urinalysis Strips",
                      },
                      {
                        title: "Erbah Urinalysis Strips",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "sampling",
            title: "Sampling Management",
            path: "/products-and-solutions/laboratory-solutions/sampling-management",
            icon: <RiFilter2Fill />,
            sections: [],
          },
          {
            id: "molecular",
            title: "Molecular Biology",
            path: "/products-and-solutions/laboratory-solutions/molecular-biology",
            icon: <FaAtom />,
            sections: [],
          },
          {
            id: "pathology",
            title: "Pathology Solutions",
            path: "/products-and-solutions/laboratory-solutions/pathology-solutions",
            icon: <FaBone />,
            sections: [],
          },
          {
            id: "general",
            title: "General Lab Equipment",
            path: "/products-and-solutions/laboratory-solutions/general-lab-equipment",
            icon: <FaMicroscope />,
            sections: [],
          },
          {
            id: "laboratoryI",
            title: "Laboratory Infrastructure",
            path: "/products-and-solutions/laboratory-solutions/laboratory-infrastructure",
            icon: <FaRadiationAlt />,
            sections: [],
          },
        ],
      },
      {
        id: "medical",
        title: "Medical Solutions",
        path: "/products-and-solutions/medical-solutions",
        icon: <FaStethoscope />,
        sections: [
          {
            id: "critical",
            title: "Critical Care",
            path: "/products-and-solutions/medical-solutions/critical-care",
            icon: (
              <span
                className="medical-icon-i-intensive-care"
                aria-hidden="true"
              />
            ),
            sections: [],
          },
          {
            id: "primary",
            title: "Primary Care",
            path: "/products-and-solutions/medical-solutions/primary-care",
            icon: (
              <span className="medical-icon-i-inpatient" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "surgical",
            title: "Surgical Care",
            path: "/products-and-solutions/medical-solutions/surgical-care",
            icon: (
              <span className="medical-icon-i-surgery" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "home-care",
            title: "Home Care",
            path: "/products-and-solutions/medical-solutions/home-care",
            icon: (
              <span className="medical-icon-i-inpatient" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "specialist",
            title: "Specialist Care",
            path: "/products-and-solutions/medical-solutions/specialist-care",
            icon: (
              <span
                className="medical-icon-i-intensive-care"
                aria-hidden="true"
              />
            ),
            sections: [],
          },
          {
            id: "medicalI",
            title: "Medical Infrastructure",
            path: "/products-and-solutions/medical-solutions/medical-infrastructure",
            icon: (
              <span className="medical-icon-i-hospital" aria-hidden="true" />
            ),
            sections: [],
          },
        ],
      },
      {
        id: "imaging",
        title: "Imaging Solutions",
        path: "/products-and-solutions/imaging-solutions",
        icon: <FaXRay />,
        sections: [
          {
            id: "radiology",
            title: "Radiology",
            path: "/products-and-solutions/imaging-solutions/radiology",
            icon: (
              <span className="medical-icon-i-radiology" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "ultrasonography",
            title: "Ultrasonography",
            path: "/products-and-solutions/imaging-solutions/ultrasonography",
            icon: (
              <span className="medical-icon-i-ultrasound" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "decg",
            title: "Diagnostic ECG",
            path: "/products-and-solutions/imaging-solutions/diagnostic-ecg",
            icon: (
              <span
                className="medical-icon-i-alternative-complementary"
                aria-hidden="true"
              />
            ),
            sections: [],
          },
          {
            id: "maternal",
            title: "Maternal Infant Care",
            path: "/products-and-solutions/imaging-solutions/maternal-infant-care",
            icon: (
              <span
                className="medical-icon-i-labor-delivery"
                aria-hidden="true"
              />
            ),
            sections: [],
          },
          {
            id: "monitoring",
            title: "Monitoring System",
            path: "/products-and-solutions/imaging-solutions/monitoring-system",
            icon: <TbHeartRateMonitor />,
            sections: [],
          },
          {
            id: "radiationProtection",
            title: "Radition Protection Safety & Dosimetry",
            path: "/products-and-solutions/imaging-solutions/radiation-protection-safety-and-dosimetry",
            icon: <FaRadiationAlt />,
            sections: [],
          },
        ],
      },
      {
        id: "dental",
        title: "Dental Solutions",
        path: "/products-and-solutions/dental-solutions",
        icon: <FaTooth />,
        sections: [
          {
            id: "dentalImaging",
            title: "Dental Imaging",
            path: "/products-and-solutions/dental-solutions/dental-imaging",
            icon: <FaTooth />,
            sections: [],
          },
          {
            id: "dentalChair",
            title: "Dental Chair",
            path: "/products-and-solutions/dental-solutions/dental-chair",
            icon: <GiOfficeChair />,
            sections: [],
          },
          {
            id: "dentalLab",
            title: "Dental Laboratory",
            path: "/products-and-solutions/dental-solutions/dental-laboratory",
            icon: (
              <span className="medical-icon-i-laboratory" aria-hidden="true" />
            ),
            sections: [],
          },
          {
            id: "dentalAcc",
            title: "Dental Accessories",
            path: "/products-and-solutions/dental-solutions/dental-accessories",
            icon: <FaTooth />,
            sections: [],
          },
          {
            id: "dentalHandpiece",
            title: "Dental Handpiece",
            path: "/products-and-solutions/dental-solutions/dental-handpiece",
            icon: <FaTooth />,
            sections: [],
          },
          {
            id: "dentalEndo",
            title: "Dental Endodontic",
            path: "/products-and-solutions/dental-solutions/dental-endodontic",
            icon: <FaTooth />,
            sections: [],
          },
          {
            id: "orthodontic",
            title: "Orthodontic",
            path: "/products-and-solutions/dental-solutions/orthodontic",
            icon: <FaTooth />,
            sections: [],
          },
          {
            id: "dentalSurgery",
            title: "Dental Surgery",
            path: "/products-and-solutions/dental-solutions/dental-surgery",
            icon: <FaTooth />,
            sections: [],
          },
        ],
      },
      {
        id: "research",
        title: "Research Solutions",
        path: "/products-and-solutions/research-solutions",
        icon: <GiArchiveResearch />,
        sections: [],
      },
      {
        id: "teaching",
        title: "Teaching Solutions",
        path: "/products-and-solutions/teaching-solutions",
        icon: <FaUserGraduate />,
        sections: [],
      },
      {
        id: "veterinary",
        title: "Veterinary Solutions",
        path: "/products-and-solutions/veterinary-solutions",
        icon: <FaDog />,
        sections: [],
      },
    ],
  },
  {
    id: "services-and-support",
    title: "Services & Support",
    path: "/services-and-support",
    sections: [
      {
        id: "service",
        title: "Service Solutions",
        path: "/services-and-support/service-solutions",
        sections: [
          {
            id: "consultancy",
            title: "Consultancy Services",
            path: "/services-and-support/service-solutions/consultancy-services",
            icon: <FaDotCircle />,
          },
          {
            id: "training",
            title: "Training Services",
            path: "/services-and-support/service-solutions/training-services",
            icon: <FaDotCircle />,
          },
          {
            id: "qcqa",
            title: "QC/QA Services",
            path: "/services-and-support/service-solutions/qcqa-services",
            icon: <FaDotCircle />,
          },
          {
            id: "oem",
            title: "OEM Production",
            path: "/services-and-support/service-solutions/oem-production",
            icon: <FaDotCircle />,
          },
          {
            id: "contract",
            title: "Contract Manufacturing",
            path: "/services-and-support/service-solutions/contract-manufacturing",
            icon: <FaDotCircle />,
          },
        ],
      },
      {
        id: "support",
        title: "Support Solutions",
        path: "/services-and-support/support-solutions",
        sections: [
          {
            id: "equipment-placement",
            title: "Equipment Placement Supports",
            path: "/services-and-support/support-solutions/equipment-placement-support",
            icon: <FaDotCircle />,
          },
          {
            id: "partnership",
            title: "Partnership (PPP/PPP)",
            path: "/services-and-support/support-solutions/partnership",
            icon: <FaDotCircle />,
          },
          {
            id: "installations",
            title: "Installations Support",
            path: "/services-and-support/support-solutions/installations",
            icon: <FaDotCircle />,
          },
          {
            id: "maintenance",
            title: "Maintenance Support",
            path: "/services-and-support/support-solutions/maintenance-support",
            icon: <FaDotCircle />,
          },
        ],
      },
    ],
  },
  {
    id: "cantact-us",
    title: "Contact Us",
    path: "/contact-us",
  },
];

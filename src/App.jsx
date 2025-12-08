import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Competitions from './components/Competitions';
import Certificates from './components/Certificates';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

// Import Images
import mediMirrorImg from './assets/medi_mirror.png';
import technoImg from './assets/TechnoUdhabhav2025.jpeg';
import kapdayImg from './assets/Kapday-AcademicProject.jpeg';
import sihImg from './assets/SIH-2023_Finals.png';
import geenovateImg from './assets/geenovate2k25.png';
import deenovateImg from './assets/deenovate.jpg';
import smartDocImg from './assets/SmartDoc.png';
import nspImg from './assets/nsp.png';
import burnoutImg from './assets/burnout-datathoon.png';
import galleryImg1 from './assets/gallery/SIH-2023/sih1.jpg';
import galleryImg2 from './assets/gallery/SIH-2023/sih2.jpg';
import galleryImg3 from './assets/gallery/SIH-2023/sih3.jpg';
import galleryImg4 from './assets/gallery/SIH-2023/sih4.jpg';
import galleryImg5 from './assets/gallery/SIH-2023/sih5.png';
import galleryImg6 from './assets/gallery/SIH-2025/sih6.jpg';
import galleryImg7 from './assets/gallery/SIH-2025/sih7.jpg';
import galleryImg8 from './assets/gallery/SIH-2025/sih8.jpg';
import galleryImg9 from './assets/gallery/SIH-2025/sih9.jpg';
import galleryImg10 from './assets/gallery/SIH-2025/sih10.jpg';
import galleryImg11 from './assets/gallery/SIH-2025/sih11.jpg';
import galleryImg12 from './assets/gallery/SIH-2025/sih12.jpg';
import galleryImg13 from './assets/gallery/SIH-2025/sih13.png';

// Import Videos
import sihVideo5 from './assets/gallery/SIH-2025/sih5.mp4';
import sihVideo1 from './assets/gallery/SIH-2025/sihv1.mp4';
import sihVideo2 from './assets/gallery/SIH-2025/sihv2.mp4';
import sihVideo3 from './assets/gallery/SIH-2025/sihv3.mp4';
import sihVideo4 from './assets/gallery/SIH-2025/sihv4.mp4';
import sihVideo5_2 from './assets/gallery/SIH-2025/sihv5.mp4';
import sihVideo6 from './assets/gallery/SIH-2025/sihv6.mp4';
import { title } from 'framer-motion/client';

function App() {
  // ==============================================================================================
  // 🚀 PORTFOLIO DATA CONFIGURATION
  // ----------------------------------------------------------------------------------------------
  // Update the information below to customize your portfolio.
  // This object contains all the data used across the website.
  // ==============================================================================================
  const resumeData = {
    // 1. PERSONAL DETAILS
    // --------------------------------------------------------------------------------------------
    name: "C.R.DHARUN TEJA",
    role: "Full Stack Developer | Python Programmer",
    tagline: "Crafting Code & Breaking Limits",
    // 2. CONTACT INFORMATION
    // --------------------------------------------------------------------------------------------
    contact: {
      email: "dharunteja23@gmail.com",
      linkedin: "https://www.linkedin.com/in/dharun-teja",
      github: "https://github.com/DharunTeja-2023",
      googleForm: "https://forms.gle/1zJVkXYDteXZsGNc9",
      instagram: "https://www.instagram.com/dharunteja_29"
    },
    // 3. WORK EXPERIENCE
    // --------------------------------------------------------------------------------------------
    // Add your internships and jobs here.
    experience: [
      {
        title: "Web Development Intern",
        company: "Cognifyz Technologies",
        duration: "October 2025 – November 2025",
        description: [
          "During this internship, I gained hands-on experience in front-end web development by building dynamic and responsive web pages using HTML, CSS, and JavaScript. I successfully developed various user interface components, such as interactive forms and navigation menus, and utilized CSS media queries to ensure optimal viewing experiences across different device sizes.",
          "I approached these projects with dedication and a strong attention to detail, consistently meeting project requirements and deadlines. Throughout the program, I demonstrated effective communication and coordination skills while refining my technical abilities, ultimately delivering a comprehensive landing page as a final capstone project."
        ],
        certificate: "https://drive.google.com/file/d/1NAPNwWbfd8XBIabFDtYBZr1u8HOsX802/view?usp=sharing" // Add certificate URL here (optional - only if certificate exists)
      },
      {
        title: "Web Developer Intern",
        company: "Inspiring Wave DigiTech Pvt. Ltd.",
        duration: "April 2025 – October 2025",
        description: [
          "Developed and maintained multiple responsive websites using HTML, CSS, JavaScript, and WordPress. Collaborated on projects like WedMantra, Biryani House, and Sugandh Gold, focusing on modern UI design and seamless user experience.",
          "Conducted web scraping and debugging using HTTrack to optimize client websites and improve performance across platforms. Worked closely with the design team in Figma to transform wireframes into production-ready interfaces, ensuring consistency and accessibility."
        ],
        // certificate: "https://drive.google.com/file/d/1NAPNwWbfd8XBIabFDtYBZr1u8HOsX802/view?usp=sharing" // Add certificate URL here (optional - only if certificate exists)
      }
    ],
    // 4. PROJECTS
    // --------------------------------------------------------------------------------------------
    // Add your projects here. Ensure images are imported at the top.
    projects: [
      {
        title: "Smart Doc Checker",
        description: "Smart Doc Checker is a web application that allows users to upload up to three documents (PDF, DOCX, or TXT) and analyzes them for contradictions in key information such as budget, deadlines, and other project details. The app highlights inconsistencies between documents, helping teams ensure alignment and avoid costly mistakes.",
        image: smartDocImg,
        tech: ["Python", "JavaScript", "HTML", "CSS"],
        github: "https://github.com/DharunTeja/Smart-Doc-Checker",
        demo: "https://smart-doc-checker-o357.onrender.com/"
      },
      {
        title: "MediMirror AI",
        description: "MediMirror is designed to help users understand medical prescriptions and basic health instructions through voice guidance, OCR-based text extraction, and AR-based visual explanations.",
        image: mediMirrorImg,
        tech: ["React", "Node.js", "Firebase", "AI/AR"],
        github: "https://github.com/DharunTeja/MediMirrors",
        demo: "https://medi-mirrors.vercel.app/"
      },
      {
        title: "Techno Udhbhav 2025",
        description: "Designed and developed the official Techno Udhbhav 2025 website, creating a clean multi-page layout with event details, schedules and registration links. Ensured responsive design, smooth navigation and a consistent UI for the entire fest.",
        image: technoImg,
        tech: ["HTML", "CSS", "JS"],
        github: "https://github.com/DharunTeja/TECHNO-UDHBHAV/tree/main/SVIT%20FEST%20WEB%20PAGE",
        demo: "https://techno-udhbhav.vercel.app/"
      },
      {
        title: "KAPDAY",
        description: ["KAPDAY is a modern online clothing store website designed to showcase and sell fashion products.",
        "The project includes product listings, categories, cart functionality and a clean UI tailored for a smooth shopping experience.Fully functional online clothing store."
        ],
        image: kapdayImg,
        tech: ["HTML", "CSS", "JS"],
        github: "https://github.com/DharunTeja/KAPDAY",
        demo: "https://kapday.vercel.app/"
      },
      {
        title: "Nitya Stotra Parayanam",
        description: "NSP is a devotional platform designed to help users learn and recite daily stotras with ease. It provides structured stotra text, audio, meanings and class details, along with FAQs and a clean, user-friendly interface for a smooth spiritual learning experience.",
        image: nspImg,
        tech: ["HTML", "CSS", "JS"],
        github: "https://github.com/DharunTeja/Nitya-Stotra-Parayanam",
        demo: "https://nitya-stotra-parayanam.vercel.app/"
      }
    ],
    // 5. COMPETITIONS
    // --------------------------------------------------------------------------------------------
    competitions: [
      {
        title: "Hack with Hyderabad - Deenovate Hackathon (Microsoft Partner)",
        description: "Hack with Hyderabad is a prestigious hackathon, often hosted in partnership with Microsoft or its ecosystem partners, bringing together top innovators to build impactful tech solutions using cutting-edge cloud and AI technologies. It showcases engineering talent in Hyderabad and beyond.",
        image: deenovateImg,
        tech: ["Python", "JavaScript", "HTML", "CSS"],
        year: "2025"
      },
      {
        title: "Geenovate 2K25",
        description: "Geenovate 2K25 is a 36-hour national-level hackathon focused on solving real-time problems using innovation, AI and engineering skills. Teams work continuously to design and present a working prototype within the given timeframe.",
        image: geenovateImg,
        tech: ["React", "Node.js", "Firebase", "AI/AR"],
        year: "2025"
      },
      {
        title: "Burnout Datathon",
        description: "Participated in the MotoGP Datathon (Burnout Prediction Model using machine learning algorithms), working on data analysis and predictive insights to identify burnout patterns. Focused on building clean models, preprocessing datasets and presenting clear results within the event’s time constraints.",
        image: burnoutImg,
        tech: ["Python", "XGBoost", "Pandas"],
        demo: "https://www.kaggle.com/competitions/burnout-datathon-ieeecsmuj/overview",
        year: "2024"
      },
      {
        title: "SIH 2023 Solution",
        description: "Finalist at SIH 2023 with a hardware-software solution for traffic congestion. Worked on drone mechanism, flight controller setup and vehicle identification using CCTV and drone footage to support automated challan generation and emergency route clearance.",
        image: sihImg,
        tech: ["Python", "OpenCV", "Drone"],
        year: "2023"
      }
    ],
    // 6. EDUCATION
    // --------------------------------------------------------------------------------------------
    education: [
      {
        school: "Swami Vivekananda Institute of Technology",
        degree: "B.Tech in CSE (AI & ML)",
        duration: "Sept 2023 - Aug 2027"
      },
      {
        school: "Sri Chaitanya Junior College",
        degree: "Intermediate (MPC)",
        duration: "2021 - 2023"
      },
      {
        school: "Sri Chaitanya Techno School",
        degree: "SSC (10th grade)",
        duration: "2020 - 2021"
      }
    ],
    // 7. SKILLS
    // --------------------------------------------------------------------------------------------
    // Skills organized by categories
    skills: {
      languages: ["C", "Python", "JavaScript"],
      frontend: ["HTML", "CSS", "React.js"],
      tools: ["Git", "GitHub"],
      backend: ["Firebase", "Supabase"]
    },
    // 8. CERTIFICATIONS
    // --------------------------------------------------------------------------------------------
    certifications: [
      {
        name: "SIH 2025 Internal College Round Finals",
        link: "https://drive.google.com/file/d/1ISQlp4GFhEfWpjBaLqIgTen1OWPKgfPt/view?usp=sharing"
      },
      {
        name: "Deenovate Hackathon 2025 (Microsoft Partner)",
        link: "https://drive.google.com/file/d/1-aPLFWp_HB8pZkjh_GHtzPMjQlf0IxbH/view?usp=sharing"
      },
      {
        name: "Geenovate 2K25 - 36 Hour Hackathon",
        link: "https://drive.google.com/file/d/1JwQxzzpjLalNE6ni6x3ftAiRiq03cjH5/view?usp=sharing" // Add your certificate link here
      },
      {
        name: "Web Design Course (Beginner to Advanced)",
        link: "https://drive.google.com/file/d/1PYTuVAwOn8c5uoXoVilV4_XVG8arCL1E/view?usp=sharing" // Add your certificate link here
      },
      {
        name: "Internship Common Aptitude Test",
        link: "https://drive.google.com/file/d/1JeJaEvvUlV_g_QI0isxuqtZH0Kh87E1r/view?usp=sharing" // Add your certificate link here
      },
      {
        name: "Datathon of Burnout - MotoGP",
        link: "https://drive.google.com/file/d/1OD8w-J18RsmSv7zlI90ahJTZ5otPv8yU/view?usp=sharing" // Add your certificate link here
      },
      {
        name: "Deloitte Australia - Data Analytics",
        link: "https://drive.google.com/file/d/1-s5XDE0FnIrsiJ_Hp7Z3NyGU4oI7kG6v/view?usp=sharing" // Add your certificate link here
      },
      {
        name: "Prompt Engineering Workshop",
        link: "https://drive.google.com/file/d/1GuhiqaxsOaED9bWbVSBI_2qiCg9fFea9/view?usp=sharing" // Add your certificate link here
      },
      {
        name: "SkillsBuild - Artificial Intelligence Fundamentals",
        link: "https://drive.google.com/file/d/1nTkPrI1p51IyTTm0RRz08G7skEYb3hYw/view?usp=sharing" // Add your certificate link here
      },
      {
        name: "SkillsBuild - Customer Engagement: Problem Solving and Process Controls",
        link: "https://drive.google.com/file/d/1nUnRcaFSvDuvbSWLji5U9hMOA2OX2xCN/view?usp=sharing" // Add your certificate link here
      },
      {
        name: "SIH 2023 National Finale Round",
        link: "https://drive.google.com/file/d/1C0TxKVp7AOKwQiKahGloDiypb79z8D_D/view?usp=sharing" // Add your certificate link here
      },
    ],
    // 9. GALLERY
    // --------------------------------------------------------------------------------------------
    gallery: [
      {
        name: "SIH 2023 Finals - LNCT,Bhopal",
        images: [galleryImg1, galleryImg2, galleryImg3, galleryImg4,galleryImg5]
      },
      {
        name: "SIH 2025 Internal Finals - SVIT,Secunderabad",
        images: [galleryImg6, galleryImg7, galleryImg8, galleryImg9, galleryImg10, galleryImg11, galleryImg12, galleryImg13,sihVideo1, sihVideo2, sihVideo3, sihVideo4, sihVideo5, sihVideo5_2, sihVideo6]
      }
      // Add more albums as needed:
      // { name: "Another Album", images: [imgA, imgB, imgC] }
    ]
  };

  return (
    <div className="antialiased text-gray-200">
      <Navbar />
      <Hero data={resumeData} />
      <About data={resumeData} />
      <Stats data={resumeData} />
      <Skills data={resumeData} />
      <Experience data={resumeData.experience} />
      <Projects data={resumeData.projects} />
      <Competitions data={resumeData.competitions} />
      <Education data={resumeData.education} />
      <Certificates data={resumeData.certifications} />
      <Gallery data={resumeData.gallery} />
      <Contact data={resumeData.contact} />
      <ScrollToTop />
      <footer className="py-8 text-center text-gray-600 text-sm bg-black">
        <p>© 2025 Dharun Teja | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

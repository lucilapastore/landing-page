import { Icons } from "@/components/icons";

export const DATA = {
  name: "Lucila Pastore",
  initials: "LP",
  url: "https://lucilapastore.com",
  location: "Palermo, CABA",
  locationLink: "https://maps.app.goo.gl/SByenyPs3sjPS4Jp7",
  description:
    "Marketing graduate turned Developer. I love building user-friendly applications that make a difference.",
  summary:
    "I earned a double degree in [marketing and journalism](/#education), worked in [financial services and technical support](/#experience), and completed several [blockchain certifications](/#projects). As programming curator & organizer for ZK Track at [Aleph](https://www.aleph.crecimiento.build/), I led a week-long event focused on zero-knowledge and privacy.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "React",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Framer Motion",
    "shadcn",
  ],
  navbar: [
    /*  { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#contact", icon: PencilLine, label: "Contact" }, */
  ],
  contact: {
    email: "lucilapastore@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lucilapastore",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pastorelucila/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/lucilajuliana",
        icon: Icons.x,

        navbar: true,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/lucilajulianaa",
        icon: Icons.telegram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Web3Privacy Now",
      href: "https://web3privacy.info/",
      badges: [],
      location: "Buenos Aires",
      title: "Event Manager at Ethereum Cypherpunk Congress #2",
      logoUrl: "/w3pn-logo.png",
      start: "May 2025",
      end: "Nov 2025",
      description:
        "Oversee all logistical coordination for Ethereum Cypherpunk Congress (November 16, 2025). I am responsible for transforming their vision into reality on the ground, managing complex venue logistics, vendor relationships, and ensuring exceptional participant experiences.",
    },
    {
      company: "Privacy Stewards of Ethereum",
      href: "https://pse.dev/en",
      badges: [],
      location: "Buenos Aires",
      title: "Coordinator at Programmable Cryptography Bootcamp",
      logoUrl: "/pse.jpg",
      start: "Apr 2024",
      end: "Oct 2024",
      description:
        "The Privacy Stewards of Ethereum trusted me to lead an 8-week Contribution Program focused on zero-knowledge proof technologies. This position involved significant local engagement alongside online coordination.",
    },
    {
      company: "Wallbit Pay",
      badges: [],
      href: "https://wallbit.io/",
      location: "Remote",
      title: "Technical Support Lead",
      logoUrl: "/wallbit_logo.png",
      start: "Apr 2023",
      end: "Jul 2024",
      description:
        "Wallbit is a Neobank for global remote workers that provides non-US residents access to a US bank account where they can receive their income, save money, and invest. I was the escalation point for complex user issues and worked with product and engineering teams to resolve bugs and incidents.",
    },
    {
      company: "Ethereum Argentina",
      href: "https://x.com/EtherArgentina",
      badges: [],
      location: "Buenos Aires, AR",
      title: "Content Creator & CM (Volunteering)",
      logoUrl: "/ethereumargentina_logo.jpeg",
      start: "Apr 2023",
      end: "Sep 2023",
      description:
        "I was in charge of the Social Media Strategy, Content Creation, Community Engagement, Cross-functional Team Collaboration. During that period, we grew our Twitter presence from 900 to 5000 followers, demonstrating a significant increase in engagement and visibility.",
    },
    {
      company: "DeFi Argentina",
      href: "https://x.com/DefiArgentina",
      badges: [],
      location: "Buenos Aires, AR",
      title: "Community Builder (Volunteering)",
      logoUrl: "/defiargentina_logo.jpg",
      start: "May 2023",
      end: "Dec 2023",
      description:
        "DeFi Argentina is a non-profit project focused on helping children foodbanks in Argentina, by collecting donations in cryptocurrencies.",
    },
    {
      company: "PayRetailers",
      href: "https://splunk.com",
      badges: [],
      location: "Remote",
      title: "Technical Support and Integrations Analyst",
      logoUrl: "/pay_retailers_logo.jpeg",
      start: "Feb 2022",
      end: "Jan 2023",
      description:
        "PayRetailers offers payment solutions for online services in LATAM region. I gave B2B technical support and advice to merchants. I focused on providing integration support as well as technical support to merchants.",
    },
    {
      company: "Compre Ahora",
      href: "https://www.compreahora.com.ar/",
      badges: [],
      location: "Buenos Aires, AR",
      title: "Incident Management Lead",
      logoUrl: "/compre_ahora.jpeg",
      start: "Feb 2020",
      end: "Jul 2021",
      description:
        "Was responsible for ensuring the correct functioning of the Magento platform, managing bugs and generating quick solutions. Validated issues reported by the entire team. Assigned priorities to bugs according to the impact on the business. Looked for solutions together with the IT support team and I followed up the bugs until they were solved.",
    },
  ],
  education: [
    /*
    {
      school: "Cyfrin Updraft",
      href: "https://updraft.cyfrin.io/",
      degree: "Solidity Smart Contract Development",
      logoUrl: "/cyfrin_updraft.jpeg",
      start: "2024",
      end: "Present",
    }, */
    {
      school: "Udemy",
      href: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      degree: "React - The Complete Guide (incl. Next.js, Redux)",
      logoUrl: "/udemy_logo.jpeg",
      start: "2023",
      end: "2024",
    },
    /*
    {
      school: "Alchemy University",
      href: "https://www.alchemy.com/university",
      degree: "Ethereum Developer Bootcamp",
      logoUrl: "/alchemy_university_logo.jpeg",
      start: "2023",
      end: "2024",
    }, */

    {
      school: "Microverse",
      href: "https://www.microverse.org/full-stack-program",
      degree: "Full-Stack Web Development Program",
      logoUrl: "/microverseinc_logo.jpeg",
      start: "2019",
      end: "2020",
    },
    {
      school: "National University of the North-East",
      href: "https://www.unne.edu.ar/",
      degree: "Bachelor's Degree in Social Communication",
      logoUrl: "/universidad_nacional_del_nordeste_logo.jpeg",
      start: "2010",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Web3Privacy Now Explorer",
      href: "https://explorer.web3privacy.info/",
      dates: "May 2025 - Jul 2025",
      active: true,
      description:
        "Developed a web application that allows users to explore and showcase privacy-focused projects in the Web3 ecosystem.",
      technologies: ["React", "Next.js", "Typescript", "Tailwind", "shadcn"],
      links: [
        {
          type: "Website",
          href: "https://explorer.web3privacy.info/",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/web3privacy/explorer-new-ui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/explorer.jpg",
      video: undefined,
    },
    /*
    {
      title: "Ethereum Cypherpunk Congress 2",
      href: "https://congress.web3privacy.info/",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "Developed a landing page for the largest freedom & privacy activism gathering, facilitated by the Web3Privacy Now collective.",
      technologies: ["HTML", "CSS", "Tailwind"],
      links: [
        {
          type: "Website",
          href: "https://congress.web3privacy.info/",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/web3privacy/c25bue",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cypherpunk-congress.jpg",
      video: undefined,
    },
    */
    {
      title: "Catapulta Landing Page",
      href: "https://catapulta-landing.vercel.app/",
      dates: "Mar 2025 - Apr 2025",
      active: true,
      description:
        "A modern landing page for a platform that simplifies smart contract deployment across multiple blockchain networks.",
      technologies: ["React", "Next.js", "Typescript", "Tailwind", "shadcn"],
      links: [
        {
          type: "Website",
          href: "https://catapulta-landing.vercel.app/",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/lucilapastore/catapulta-landing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/landing_catapulta.png",
      video: undefined,
    },

    {
      title: "The Onchain Builder School",
      href: "https://my-dev3pack.vercel.app/",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Developed a modern landing page for Dev3Pack. They offer a program designed for women developers transitioning from Web2.",
      technologies: ["Next.js", "Typescript", "shadcn", "Tailwind"],
      links: [
        {
          type: "Website",
          href: "https://my-dev3pack.vercel.app/",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/lucilapastore/dev3pack-landing-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "dev3pack.jpg",
      video: undefined,
    },
    {
      title: "Investment Calculator",
      href: "https://calcuinvest.vercel.app/",
      dates: "Oct 2023 - Present",
      active: true,
      description:
        "The website visitors can use this web application to calculate multiple future values for given investment parameters.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://calcuinvest.vercel.app/",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/lucilapastore/investment-calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
      video: undefined,
    },
    /* {
      title: "SurfyPal",
      href: "https://surfypal.vercel.app/",
      dates: "Mar 2025 - Apr 2025",
      active: true,
      description:
        "A Web3-based decentralized travel platform that connects travelers with local Hosts who offer accommodations.",
      technologies: ["React", "Next.js", "Tailwind", "shadcn"],
      links: [
        {
          type: "Website",
          href: "https://surfypal.vercel.app/",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/lucilapastore/surfypal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/surfypal.png",
      video: undefined,
    }, */
    /* {
      title: "Investment Calculator",
      href: "https://calcuinvest.vercel.app/",
      dates: "Oct 2023 - Present",
      active: true,
      description:
        "The website visitors can use this web application to calculate multiple future values for given investment parameters.",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://calcuinvest.vercel.app/",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/lucilapastore/investment-calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
      video: undefined,
    }, */
  ],
  activities: [
    {
      title: "Ethereum Cypherpunk Congress 2",
      href: "https://congress.web3privacy.info/",
      dates: "Nov 2025",
      active: true,
      description:
        "The largest freedom & privacy activism gathering, facilitated by the Web3Privacy Now collective.",

      links: [
        {
          type: "About Event",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Social Media",
          href: "https://luma.com/u2sw5kpv",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/ecc2.jpg",
      video: undefined,
    },
    {
      title: "Ethereum Privacy Stack",
      href: "https://eps25.web3privacy.info/",
      dates: "Nov 2025",
      active: true,
      description:
        "Ethereum Privacy-focused event of the year featuring 50 speakers from Vitalik Buterin to Kevin Owocki.",

      links: [
        {
          type: "About Event",
          href: "https://eps25.web3privacy.info/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Social Media",
          href: "https://luma.com/dvxblpgp",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/eps25.jpg",
      video: undefined,
    },
    {
      title: "Blockchain Learning Day",
      href: "https://luma.com/fwp0esvq",
      dates: "Mar 2025",
      active: true,
      description:
        "We gathered university students to learn about blockchain and how to get involved, featuring top voices from the Web3 ecosystem.",

      links: [
        {
          type: "About Event",
          href: "https://luma.com/fwp0esvq",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Social Media",
          href: "https://x.com/lucilajuliana/status/1906807121053651165",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/university-day.jpg",
      video: undefined,
    },
    {
      title: "Brunch at ETHDenver",
      href: "https://luma.com/111ma08n",
      dates: "Aug 2025 - Present",
      active: true,
      description:
        "We organized a pre-conference brunch and cozy campfire retreat, 8 minutes from the ETHDenver main venue.",

      links: [
        {
          type: "About Event",
          href: "https://luma.com/111ma08n",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Social Media",
          href: "https://x.com/lucilajuliana/status/1896530911438757968",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/crypto-girls.jpeg",
      video: undefined,
    },
    {
      title: "ZK Week",
      href: "https://x.com/lucilajuliana/status/1857503308904280240",
      dates: "Mar 2025 - Apr 2025",
      active: true,
      description:
        "I organized a week-long event focused on ZKPs, MPC, FHE, and privacy-preserving technologies.",

      links: [
        {
          type: "About Event",
          href: "https://luma.com/l5cx58vt?tk=LEGgit",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Social Media",
          href: "https://x.com/lucilajuliana/status/1857503308904280240",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/zkweek.jpg",
      video: undefined,
    },

    {
      title: "Women in Web3 Meetup",
      href: "",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "We gathered women in the Web3 ecosystem to discuss the challenges they face and how to overcome them.",

      links: [
        {
          type: "About Event",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Social Media",
          href: "",
          icon: <Icons.x className="size-3" />,
        },
      ],
      image: "/crecimiento-femenino.jpeg",
      video: undefined,
    },
  ],
  hackathons: [
    {
      title: "Aleph Hackathon",
      dates: "March 21 - 23, 2025",
      location: "Buenos Aires, Argentina",
      description:
        "We built a Web3 travel app to make peer-to-peer accommodation safer, more affordable, and trustworthy for everyone.",
      image: "/aleph_hackathon.png",
      links: [
        {
          title: "Project Details",
          icon: <Icons.globe className="size-4" />,
          href: "https://dorahacks.io/buidl/24594",
        },
      ],
    },
    {
      title: "ETHGlobal Bangkok",
      dates: "November 15 - 17, 2024",
      location: "Bangkok, Thailand",
      description:
        "We built a daily checkin app to expand female health data by building a global female-specific data lake.",
      image:
        "https://ethglobal.b-cdn.net/events/bangkok/square-logo/default.png",
      links: [
        {
          title: "Project Details",
          icon: <Icons.globe className="size-4" />,
          href: "https://ethglobal.com/showcase/asterisk-daily-check-h1b84",
        },
      ],
    },
    {
      title: "Invisible Garden Hackathon",
      dates: "September 30 - November 10, 2024",
      location: "Chiang Mai, Thailand",
      description:
        "Participated in a ZKP pop-up dev city, dedicated to fostering the synergy of technology, culture, and community.",
      image: "/ig_logo.jpg",
      links: [
        {
          title: "Event Details",
          icon: <Icons.globe className="size-4" />,
          href: "https://mirror.xyz/0x8f43115B07B3cAa2eeE72989E8c206Ec8E10FB92/dQ54VVgQg91V4Pv6Ee3iVi0KAFEP0ON2OIZwhbMJdsQ",
        },
      ],
    },
  ],
} as const;

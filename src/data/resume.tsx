import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Lucila Pastore",
  initials: "LP",
  url: "https://lucilapastore.com",
  location: "Palermo, CABA",
  locationLink: "https://maps.app.goo.gl/SByenyPs3sjPS4Jp7",
  description:
    "Marketing graduate turned DevRel. I love building trust and social connections. Very active on Twitter.",
  summary:
    "At the end of july, I quit my job at a fintech to pursue a full-time position in the crypto industry. In the past, [I earned a double degree in social communication and journalism](/#education), [worked in financial services advisory, technical support, and integrations analysis](/#experience), and [completed several blockchain certifications](/#projects). I was also the programming curator & organizer for ZK Track, a week-long event at [Aleph](https://www.aleph.crecimiento.build/) focused on zero-knowledge and privacy.",
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
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@lucilajuliana",
      icon: NotebookIcon,
      label: "Blog",
    },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#contact", icon: PencilLine, label: "Contact" },
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
      company: "Privacy + Scaling Explorations",
      href: "https://pse.dev/en",
      badges: [],
      location: "Buenos Aires",
      title: "Coordinator at Programmable Cryptography Bootcamp",
      logoUrl: "/atomic.png",
      start: "Apr 2024",
      end: "Oct 2024",
      description:
        "The Privacy and Scaling Explorations team at the Ethereum Foundation trusted me to lead an 8-week Contribution Program focused on zero-knowledge proof technologies. This position involved significant local engagement alongside online coordination.",
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
    {
      school: "Cyfrin Updraft",
      href: "https://updraft.cyfrin.io/",
      degree: "Solidity Smart Contract Development",
      logoUrl: "/cyfrin_updraft.jpeg",
      start: "2024",
      end: "Present",
    },
    {
      school: "Alchemy University",
      href: "https://www.alchemy.com/university",
      degree: "Ethereum Developer Bootcamp",
      logoUrl: "/alchemy_university_logo.jpeg",
      start: "2023",
      end: "2024",
    },

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
      title: "Conventional Emoji Commits",
      href: "https://conventional-emoji-commits.site",
      dates: "Oct 2023 - Present",
      active: true,
      description:
        "A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈",
      technologies: ["git", "emoji", "commit", "conventional", "nuxt"],
      links: [
        {
          type: "Website",
          href: "https://conventional-emoji-commits.site",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/conventional-emoji-commits/conventional-emoji-commits.site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.nyxbui.design/conventional-emoji-commits.mp4",
    },
    {
      title: "Conventional Emoji Commits",
      href: "https://conventional-emoji-commits.site",
      dates: "Oct 2023 - Present",
      active: true,
      description:
        "A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈",
      technologies: ["git", "emoji", "commit", "conventional", "nuxt"],
      links: [
        {
          type: "Website",
          href: "https://conventional-emoji-commits.site",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/conventional-emoji-commits/conventional-emoji-commits.site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.nyxbui.design/conventional-emoji-commits.mp4",
    },
    {
      title: "Conventional Emoji Commits",
      href: "https://conventional-emoji-commits.site",
      dates: "Oct 2023 - Present",
      active: true,
      description:
        "A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈",
      technologies: ["git", "emoji", "commit", "conventional", "nuxt"],
      links: [
        {
          type: "Website",
          href: "https://conventional-emoji-commits.site",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/conventional-emoji-commits/conventional-emoji-commits.site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.nyxbui.design/conventional-emoji-commits.mp4",
    },
    {
      title: "Conventional Emoji Commits",
      href: "https://conventional-emoji-commits.site",
      dates: "Oct 2023 - Present",
      active: true,
      description:
        "A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈",
      technologies: ["git", "emoji", "commit", "conventional", "nuxt"],
      links: [
        {
          type: "Website",
          href: "https://conventional-emoji-commits.site",
          icon: <Icons.openai className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/conventional-emoji-commits/conventional-emoji-commits.site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.nyxbui.design/conventional-emoji-commits.mp4",
    },
  ],
  hackathons: [
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
          title: "Event Details",
          icon: <Icons.globe className="size-4" />,
          href: "https://ethglobal.com/events/bangkok",
        },
      ],
    },
    {
      title: "Invisible Garden Hackathon",
      dates: "September 30 - November 10, 2024",
      location: "Chiang Mai, Thailand",
      description:
        "Participated in a ZKP pop-up dev city, dedicated to fostering the synergy of technology, culture, and community.",
      image: "https://x.com/invisiblgarden/photo",
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

import {
  Home,
  BookOpenText,
  Heart,
  Star,
  LifeBuoy,
  Send,
  Settings2,
  GitBranch
} from "lucide-react"

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: Home,
    },
    {
      title: "Graph",
      url: "/graph",
      icon: GitBranch,
    },
    {
      title: "Mis historias",
      url: "#",
      icon: BookOpenText,
    },
    {
      title: "Me gusta",
      url: "#",
      icon: Heart,
    },
    {
      title: "Favoritos",
      url: "#",
      icon: Star,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}
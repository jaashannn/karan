export interface NavItem {
  title: string;
  href: string;
}

export interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface DevelopmentalDomain {
  ageGroup: string;
  opportunities: {
    title: string;
    description: string;
  }[];
}
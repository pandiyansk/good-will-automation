export interface NavLink {
  name: string;
  path: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProductCategory {
  category_name: string;
  products: string[];
}

export interface IndustrySolution {
  icon: string;
  iconBgColor: string;
  title: string;
  description: string;
}

export interface Brand {
  logo: string;
  name: string;
  description: string;
}

export interface CoreValue {
  icon: string;
  iconBgColor: string;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
}

export interface ProductLine {
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  id: number;
  image: string;
  category: string;
  year: number;
  location: string;
  title: string;
  description: string;
  tags: string[];
}

export interface FoundationPillar {
  icon: string;
  title: string;
  description: string;
}

export interface Certification {
  icon: string;
  title: string;
  description: string;
  subtitle?: string;
}

export interface IndustryService {
  icon: string;
  title: string;
  description: string;
  keyApplications: string[];
}

export interface Partner {
  logo: string;
  name: string;
}

export interface DeltaProductSubCategory {
  title: string;
  items: string[];
}

export interface DeltaProduct {
  name: string;
  fullName: string;
  image: string;
  models?: string[];
  subCategories?: DeltaProductSubCategory[];
  description?: string;
}

export interface NavBrand {
  id: string;
  name: string;
  logo: string;
  products: DeltaProduct[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}
// Interface automatically generated by schemas-to-ts

export interface Language {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    iconName?: string;
    slug?: string;
    languageName: string;
    proficiencyLevel: string;
  };
}
export interface Language_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  iconName?: string;
  slug?: string;
  languageName: string;
  proficiencyLevel: string;
}

export interface Language_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  iconName?: string;
  slug?: string;
  languageName: string;
  proficiencyLevel: string;
}

export interface Language_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  iconName?: string;
  slug?: string;
  languageName: string;
  proficiencyLevel: string;
}

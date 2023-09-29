// Interface automatically generated by schemas-to-ts

import { Skill } from '../../../skill/content-types/skill/skill';
import { Language } from '../../../language/content-types/language/language';
import { WebLink } from '../../../web-link/content-types/web-link/web-link';
import { Media } from '../../../../common/schemas-to-ts/Media';
import { Skill_Plain } from '../../../skill/content-types/skill/skill';
import { Language_Plain } from '../../../language/content-types/language/language';
import { WebLink_Plain } from '../../../web-link/content-types/web-link/web-link';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export enum ProjectType {
  Frontend = 'Frontend',
  Backend = 'Backend',
  DevOps = 'DevOps',
  Design = 'Design',
  MobileAppDevelopment = 'Mobile App Development',
  DataScience = 'Data Science',
  MachineLearning = 'Machine Learning',
  ArtificialIntelligence = 'Artificial Intelligence',
  IoTInternetOfThings = 'IoT (Internet of Things)',
  GameDevelopment = 'Game Development',
  Blockchain = 'Blockchain',
  Cybersecurity = 'Cybersecurity',
  CloudComputing = 'Cloud Computing',
  WebDevelopment = 'Web Development',
  UiUx = 'UI&UX',}
export enum DifficultyLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert',}

export interface Project {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    primaryStack: { data: Skill[] };
    secondaryStack: { data: Language[] };
    externalLinks: { data: WebLink[] };
    projectName: string;
    shortDescription?: string;
    description?: string;
    projectType?: ProjectType;
    codeRepositoryUrl?: { data: WebLink };
    previewUrl?: { data: WebLink };
    coverImage?: { data: Media };
    additionalImages?: { data: Media[] };
    difficultyLevel?: DifficultyLevel;
    onPortfolio?: boolean;
    onCv?: boolean;
    locale: string;
    localizations?: { data: Project[] };
  };
}
export interface Project_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  primaryStack: Skill_Plain[];
  secondaryStack: Language_Plain[];
  externalLinks: WebLink_Plain[];
  projectName: string;
  shortDescription?: string;
  description?: string;
  projectType?: ProjectType;
  codeRepositoryUrl?: WebLink_Plain;
  previewUrl?: WebLink_Plain;
  coverImage?: Media;
  additionalImages?: Media[];
  difficultyLevel?: DifficultyLevel;
  onPortfolio?: boolean;
  onCv?: boolean;
  locale: string;
  localizations?: Project[];
}

export interface Project_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  primaryStack: number[];
  secondaryStack: number[];
  externalLinks: number[];
  projectName: string;
  shortDescription?: string;
  description?: string;
  projectType?: ProjectType;
  codeRepositoryUrl?: number;
  previewUrl?: number;
  coverImage?: number;
  additionalImages?: number[];
  difficultyLevel?: DifficultyLevel;
  onPortfolio?: boolean;
  onCv?: boolean;
  locale: string;
  localizations?: Project[];
}

export interface Project_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  primaryStack: AdminPanelRelationPropertyModification<Skill_Plain>;
  secondaryStack: AdminPanelRelationPropertyModification<Language_Plain>;
  externalLinks: AdminPanelRelationPropertyModification<WebLink_Plain>;
  projectName: string;
  shortDescription?: string;
  description?: string;
  projectType?: ProjectType;
  codeRepositoryUrl?: AdminPanelRelationPropertyModification<WebLink_Plain>;
  previewUrl?: AdminPanelRelationPropertyModification<WebLink_Plain>;
  coverImage?: AdminPanelRelationPropertyModification<Media>;
  additionalImages?: AdminPanelRelationPropertyModification<Media>[];
  difficultyLevel?: DifficultyLevel;
  onPortfolio?: boolean;
  onCv?: boolean;
  locale: string;
  localizations?: Project[];
}

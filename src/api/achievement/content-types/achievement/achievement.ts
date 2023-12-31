// Interface automatically generated by schemas-to-ts

import { LinkedEntity } from '../../../linked-entity/content-types/linked-entity/linked-entity';
import { Media } from '../../../../common/schemas-to-ts/Media';
import { AchievementCategory } from '../../../achievement-category/content-types/achievement-category/achievement-category';
import { ModalityCategory } from '../../../modality-category/content-types/modality-category/modality-category';
import { LinkedEntity_Plain } from '../../../linked-entity/content-types/linked-entity/linked-entity';
import { AchievementCategory_Plain } from '../../../achievement-category/content-types/achievement-category/achievement-category';
import { ModalityCategory_Plain } from '../../../modality-category/content-types/modality-category/modality-category';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Achievement {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    institution?: { data: LinkedEntity };
    startDate?: Date;
    endDate?: Date;
    certificateImage?: { data: Media };
    achievementLogo?: { data: Media };
    shortDescription?: string;
    description?: string;
    noExpiration?: boolean;
    onPortfolio?: boolean;
    onCv?: boolean;
    achieveLocation?: any;
    achievementType?: { data: AchievementCategory };
    modalityType?: { data: ModalityCategory };
    validationUrl?: string;
    locale: string;
    localizations?: { data: Achievement[] };
  };
}
export interface Achievement_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  institution?: LinkedEntity_Plain;
  startDate?: Date;
  endDate?: Date;
  certificateImage?: Media;
  achievementLogo?: Media;
  shortDescription?: string;
  description?: string;
  noExpiration?: boolean;
  onPortfolio?: boolean;
  onCv?: boolean;
  achieveLocation?: any;
  achievementType?: AchievementCategory_Plain;
  modalityType?: ModalityCategory_Plain;
  validationUrl?: string;
  locale: string;
  localizations?: Achievement[];
}

export interface Achievement_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  institution?: number;
  startDate?: Date;
  endDate?: Date;
  certificateImage?: number;
  achievementLogo?: number;
  shortDescription?: string;
  description?: string;
  noExpiration?: boolean;
  onPortfolio?: boolean;
  onCv?: boolean;
  achieveLocation?: any;
  achievementType?: number;
  modalityType?: number;
  validationUrl?: string;
  locale: string;
  localizations?: Achievement[];
}

export interface Achievement_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  institution?: AdminPanelRelationPropertyModification<LinkedEntity_Plain>;
  startDate?: Date;
  endDate?: Date;
  certificateImage?: AdminPanelRelationPropertyModification<Media>;
  achievementLogo?: AdminPanelRelationPropertyModification<Media>;
  shortDescription?: string;
  description?: string;
  noExpiration?: boolean;
  onPortfolio?: boolean;
  onCv?: boolean;
  achieveLocation?: any;
  achievementType?: AdminPanelRelationPropertyModification<AchievementCategory_Plain>;
  modalityType?: AdminPanelRelationPropertyModification<ModalityCategory_Plain>;
  validationUrl?: string;
  locale: string;
  localizations?: Achievement[];
}

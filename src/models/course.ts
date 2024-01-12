import { ButtonType } from '../app/components/index.model';

export interface Course {
  id: number;
  courseName: string;
  author: string;
  actualPrice: string;
  discountPercentage: string;
  tags: string[];
}

export interface CourseButton {
  text: string;
  type?: ButtonType;
  action?: (event: any) => any;
}

import {
  Bug,
  Boxes,
  Database,
  Smartphone,
  Workflow,
} from "lucide-react";

import { Category } from "@/types/Category";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Selenium",
    lessons: 32,
    level: "Beginner",
    icon: Bug,
  },
  {
    id: 2,
    title: "Playwright",
    lessons: 41,
    level: "Intermediate",
    icon: Boxes,
  },
  {
    id: 3,
    title: "API Testing",
    lessons: 20,
    level: "Beginner",
    icon: Database,
  },
  {
    id: 4,
    title: "Appium",
    lessons: 18,
    level: "Advanced",
    icon: Smartphone,
  },
  {
    id: 5,
    title: "CI/CD",
    lessons: 12,
    level: "Intermediate",
    icon: Workflow,
  },
];
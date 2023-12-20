import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateStaticParams() {
  return [{locale:"en"},{locale:"ar"},{locale:"fr"},{locale:"zh"},{locale:"es"},{locale:"de"}];
}

export const loadMessages = async (locale: string) => {
  const url = `https://api.i18nexus.com/project_resources/translations/${locale}.json?api_key=${process.env.I18NEXUS_API_KEY}`;

  const res = await fetch(url, {
    next: { revalidate: false }
  });

  return res.json();
};
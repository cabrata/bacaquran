import fs from 'node:fs';
import path from 'node:path';

// Parse current path assuming script runs from standard roots
const dataDir = path.resolve(process.cwd(), 'data');

export function getSurahs() {
  const surahsPath = path.join(dataDir, 'surahs.json');
  return JSON.parse(fs.readFileSync(surahsPath, 'utf8'));
}

export function getSurahById(id: number | string) {
  const paddedId = String(id).padStart(3, '0');
  const surahPath = path.join(dataDir, `surah_${paddedId}.json`);
  if (!fs.existsSync(surahPath)) return null;
  return JSON.parse(fs.readFileSync(surahPath, 'utf8'));
}

export function getAllJuz() {
  // Since we don't have a juz.json, we can generate a basic list of Juz 1-30.
  // Real implementation of Juz View would aggregate Ayahs by Juz id.
  const juzList = [];
  for (let i = 1; i <= 30; i++) {
    juzList.push({ id: i, label: `Juz ${i}` });
  }
  return juzList;
}

export function getJuzById(juzId: number) {
  // Read through all surahs to find ayahs belonging to this juz
  const ayahs = [];
  
  // A naive approach: iterate over all surahs.
  // Optimization: we could only read surahs that overlap with the juz.
  // For now, since SSG or SSR runs this on server, reading all 114 files takes a few ms.
  for (let i = 1; i <= 114; i++) {
    const surahData = getSurahById(i);
    if (surahData) {
      const matchAyahs = surahData.ayahs.filter((a: any) => a.juz === Number(juzId));
      if (matchAyahs.length > 0) {
        ayahs.push(...matchAyahs);
      }
    }
  }
  return ayahs;
}

let cachedTafsir: any = null;
export function getAllTafsir() {
  if (cachedTafsir) return cachedTafsir;
  const tafsirPath = path.join(dataDir, 'tafsir_by_surah.json');
  if (!fs.existsSync(tafsirPath)) return null;
  cachedTafsir = JSON.parse(fs.readFileSync(tafsirPath, 'utf8'));
  return cachedTafsir;
}

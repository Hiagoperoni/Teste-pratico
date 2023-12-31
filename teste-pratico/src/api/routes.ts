import { Character, ApiResponse } from "@/DTOS/api.dto";

const getCharacters = async (offset: number): Promise<Character[]> => {
  const pular = offset === 1 ? offset : ((offset - 1) * 10)
  const url = `http://gateway.marvel.com/v1/public/characters?limit=10&offset=${pular}&ts=1&apikey=af12e1f09eb734505e0d35a0b4386a44&hash=9c0558fe0ccf905829eee902917efcd8`;
  try {
    const response = await fetch(url);
    const { data: { results } }: ApiResponse = await response.json();
    return results;
  } catch (err) {
    return [];
  }
}

const getCharacterByName = async (name: string): Promise<Character[]> => {
  try {
    const urlByName = `http://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=af12e1f09eb734505e0d35a0b4386a44&hash=9c0558fe0ccf905829eee902917efcd8`
    const response = await fetch(urlByName);
    const { data: { results } }: ApiResponse = await response.json();
    return results;
  } catch(err) {
    return [];
  }
}

export {
  getCharacters,
  getCharacterByName,
}
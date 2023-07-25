export interface Character {
  id: number;
  name: string;
  thumbnail: string;
}

export interface ApiResponse {
  data: {
    results: Character[];
  };
}
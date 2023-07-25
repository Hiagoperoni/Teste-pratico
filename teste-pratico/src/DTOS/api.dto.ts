export interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ApiResponse {
  data: {
    results: Character[];
  };
}
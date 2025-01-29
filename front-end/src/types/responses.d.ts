declare namespace Responses {
  type ResponseList<T> = {
    detail?: string;
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<T>;
  };

  type CharactersResponse = ResponseList<Entity.Character>;

  type CharacterDetailResponse = (Entity.Character & { detail: string }) | null;
}

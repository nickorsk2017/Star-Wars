declare namespace Responses {
  type Response<T> = {
    detail?: string;
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<T>;
  };

  type CharactersResponse = Entity.Response<Entity.Character>;

  type CharacterDetailResponse = Entity.Response<
    Entity.Character | { detail: string }
  >;
}

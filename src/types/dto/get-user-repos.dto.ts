import { RepoEntity } from "@/types/repo.entity";

export interface GetUserReposDTO {
  total_count: number;
  incomplete_results: boolean;
  items: RepoEntity[];
}

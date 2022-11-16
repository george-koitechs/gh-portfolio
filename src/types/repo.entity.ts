export interface RepoEntity {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: null | string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

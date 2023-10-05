export interface Comment {
    id?: string;
    nombre: string;
    comments: [];
    msg: string;
    createdAt: string;
    mg: number;
  }
  
export interface CommentsState {
    currentUser: string;
    data: Comment[];
    isLoading: boolean;
    error: string | unknown;
  }
  
export interface ResComment {

}
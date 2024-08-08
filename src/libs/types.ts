import internal from "stream";

// You can define interfaces for all React components here.
interface comment {
userImagePath:string;
  username:string;
  commentText:string;
  likeNum?:number;
  replies?:string;
  postowenerText:string;
}export type {comment};

interface replies {
    userImagePath:string;
    username: string;
    replyText:string;
    likeNum :number;
}export type {replies};
interface postonwner {
    userImagePath:string;
    username:string;
     postowenerText:string;
     likeNum:number;

}export type {postonwner};


// Do not forget to export properly.

interface ReplyProps {}
export type { ReplyProps };

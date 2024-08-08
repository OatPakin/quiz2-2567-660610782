"use client";

import { comment } from "@/libs/types";
import { comments } from "@/libs/comments";
import {postonwner} from "@/libs/types";

export default function PostOwnner({
  userImagePath,
   username,
    postowenerText,
    likeNum,
}:postonwner) {
 return   (     <div className="vstack gap-3">
  <div className="d-flex align-items-center gap-3">
    <img
      src="userImagePath"
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5 text-white">
      {username}
    </span>
  </div>

  <span className="text-white">
    {postowenerText}
  </span>
  {likeNum} 
  </div>
  )

}
 
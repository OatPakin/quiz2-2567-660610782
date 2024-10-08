"use client";

import PostOwnner  from "@/components/PostOwnner";
import Comment from "@/components/Comment";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwnner userImagePath ={"public/profileImages/morehandsome"} username={"Pakin Niramitsima 660610782"} postowenerText={"Quiz ง่ายจังเลยครับ ขอยากๆ กว่านี้ได้ไหม #261207"} likeNum={100}/>

        {/* <Comment /> */}

        {/* Comment Example */}
        <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/lisa.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              Lisa
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>จริงค่า</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>999 คน</span>
            </div>
          </div>
        </div>

        

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}

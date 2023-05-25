import React from "react";
import Page from "./Page";
import { BiPencil } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import ProfileImg from "../img/Jerick.jpg";

function ViewSinglePost() {
  return (
    <Page title="Post">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-3xl">Example Post Title</h2>
        <span className="flex">
          <a href="/">
            <BiPencil size={22} />
          </a>
          <a href="/">
            <BiTrash size={22} />
          </a>
        </span>
      </div>

      <p className="flex items-center">
        <a href="/" className="mr-3">
          <img
            src={ProfileImg}
            alt="profile"
            className="h-10 w-10 rounded-full"
          />
        </a>
        Posted by&nbsp;<a href="/">Jerick</a>&nbsp;on 5/24/2023
      </p>

      <div className="mt-4">
        <p className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla
          eum officia impedit doloribus ab.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid autem
          sint, eveniet iusto, explicabo pariatur inventore molestiae ipsam nam
          quas ea odio cupiditate soluta ipsum tenetur magnam quod. Obcaecati
          sapiente totam repellendus voluptatem laudantium, atque rem cupiditate
          impedit! Dolores, assumenda?
        </p>
      </div>
    </Page>
  );
}

export default ViewSinglePost;

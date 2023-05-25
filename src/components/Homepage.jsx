import React from "react";
import Page from "./Page";

function Homepage() {
  return (
    <Page title="Home">
      <div className="flex flex-col items-center justify-center text-center min-h-[500px] text-gray-700">
        <h2 className="text-4xl p-4">
          Hello{" "}
          <strong className="font-bold">
            {localStorage.getItem("jrkmUsername")}
          </strong>
          , your feed is empty.
        </h2>
        <p className="max-w-[700px] leading-8">
          Your feed displays the latest posts from the people you follow. If you
          don&rsquo;t have any friends to follow, that&rsquo;s okay; you can use
          the &ldquo;Search&rdquo; feature in the top menu bar to find the
          content written by people with similar interests and then follow them
          back.
        </p>
      </div>
    </Page>
  );
}

export default Homepage;

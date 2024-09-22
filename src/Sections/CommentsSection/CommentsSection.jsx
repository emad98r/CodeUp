import Title from "../../Components/Titles/Title";
import "./comments-section.scss";
import { DiscussionEmbed } from "disqus-react";
const PostPage = ({ post }) => {
  // Fallback values in case the `post` prop is not passed correctly
  const disqusShortname = "codeupagency"; // Replace with your Disqus shortname
  const disqusConfig = {
    url: `https://yourwebsite.com/posts/${post?.id || "default-id"}`, // Make sure you construct a consistent URL for the post
    identifier: post?.id || "default-id", // Unique identifier for the post, fallback if undefined
    title: post?.title || "Default Title", // Post title, with fallback
  };

  return (
    <div className="comment-section">
      <div className="container">
        <Title title="شارك برأيك " />

        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    </div>
  );
};

export default PostPage;

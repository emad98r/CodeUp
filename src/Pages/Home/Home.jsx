import Section1 from "../../Sections/Section1/Section1";
import Section6 from "../../Sections/Section6/Section6";
import Section2 from "../../Sections/Section2/Section2";
import Section3 from "../../Sections/Section3/Section3";
import Section4 from "../../Sections/Section4/Section4";
import Section5 from "../../Sections/Section5/Section5";
// import CommentsSection from "../../Sections/CommentsSection/CommentsSection";
import PostPage from "../../Sections/CommentsSection/CommentsSection";
import Section7 from "../../Sections/Section7/Section7";

function Home() {
  const samplePost = {
    id: "unique-post-id",
    title: "Sample Post Title",
    content: "This is the content of the sample post.",
  };
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <PostPage post={samplePost} />
    </>
  );
}

export default Home;

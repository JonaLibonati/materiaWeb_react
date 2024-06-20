import { PostContainer } from "../../src/components/post/PostContainer/PostContainer";
import { PostBookSection } from "../../src/components/post/PostBookSection/PostBookSection";
import { GlobalNav } from "../../src/components/global/GlobalNav/GlobalNav";
import { GlobalFooter } from "../../src/components/global/GlobalFooter/GlobalFooter";
import { PopUpProvider } from "../../src/contexts/PopUpContext";

export const Publicaciones = () => {
  return (
    <>
      <GlobalNav />
      <main>
        <PopUpProvider>
          <PostBookSection />
          <PostContainer />
        </PopUpProvider>
      </main>
      <GlobalFooter />
    </>
  );
};

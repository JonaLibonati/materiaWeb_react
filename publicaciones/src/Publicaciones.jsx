
import { PostContainer } from "../../src/components/post/PostContainer/PostContainer";
import { GlobalNav } from '../../src/components/global/GlobalNav/GlobalNav';
import { GlobalFooter } from '../../src/components/global/GlobalFooter/GlobalFooter';

export const Publicaciones = () => {
    return (
        <>
            <GlobalNav />
            <main>
                <PostContainer />
            </main>
            <GlobalFooter />
        </>
    )
}

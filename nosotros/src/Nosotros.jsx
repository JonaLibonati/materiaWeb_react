
import { GlobalNav } from '../../src/components/global/GlobalNav/GlobalNav';
import { GlobalFooter } from '../../src/components/global/GlobalFooter/GlobalFooter';
import { AboutUs } from "../../src/components/aboutUs/aboutUs";

export const Nosotros = () => {
    return (
        <>
            <GlobalNav />
            <main>
                <AboutUs />
            </main>
            <GlobalFooter />
        </>
    )
}


import { useState, useEffect, useMemo } from "react";
import { GlobalNav } from './components/global/GlobalNav/GlobalNav';
import { HomeSection } from './components/overview/HomeSection/HomeSection';
import { AboutSection } from './components/overview/AboutSection/AboutSection';
import { PostSection } from './components/overview/PostSection/PostSection';
import { ProjectSection } from './components/overview/ProjectSection/ProjectSection';
import { ContactSection } from './components/overview/ContactSection/ContactSection';
import { GlobalFooter } from './components/global/GlobalFooter/GlobalFooter';
import { FirstRender } from './contexts/FirstRender';
import { BookSection } from "./components/overview/BookSection/BookSection";

export const Index = () => {

    const [firstRender, setFirstRender] = useState(true);
    const value = useMemo(
        () => ({ firstRender, setFirstRender }),
        [firstRender]
    );

    useEffect(() => {

        const hash = window.location.hash ;

        if (hash.includes('#')) {
            window.location.href = hash;
        }

    }, [])

    return (
        <FirstRender.Provider value={value}>
            <GlobalNav />
            <main>
                <HomeSection />
                <BookSection />
                <AboutSection />
                <PostSection />
                <ProjectSection />
                <ContactSection />
            </main>
            <GlobalFooter />
        </FirstRender.Provider>
    )
}

import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import FeaturedParts from "../components/FeaturedParts/FeaturedParts";
import PopularCategories from "../components/PopularCategories/PopularCategories";
import PageContainer from "../components/Layout/PageContainer/PageContainer";

interface HomeProps {
    onSearch: (query: string) => void;
}

function Home({ onSearch }: HomeProps) {
    return (
        <>
            <Hero onSearch={onSearch} />

            <main>
                <PageContainer>
                    <Categories />
                    <FeaturedParts />
                    <PopularCategories />
                </PageContainer>
            </main>
        </>
    );
}

export default Home;
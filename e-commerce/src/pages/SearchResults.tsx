import ProductListing from "../components/ProductListing/ProductListing";
import PageContainer from "../components/Layout/PageContainer/PageContainer";

interface SearchResultsProps {
    searchQuery: string;
}

function SearchResults({ searchQuery }: SearchResultsProps) {
    return (
        <main>
            <PageContainer>
                <ProductListing initialSearch={searchQuery} />
            </PageContainer>
        </main>
    );
}

export default SearchResults;
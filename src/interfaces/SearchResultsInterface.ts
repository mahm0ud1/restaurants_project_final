interface SearchResultsSectionInterface {
    sectionTitle: string
    sectionResults: string[]
}

interface SearchResultsInterface {
    searchResultsSections:SearchResultsSectionInterface[]
}

export default SearchResultsInterface;
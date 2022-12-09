interface sectionResult {
    url: string,
    value: string,
}

interface SearchResultsSectionInterface {
    sectionTitle: string
    sectionResults: sectionResult[]
}

interface SearchResultsInterface {
    searchResultsSections:SearchResultsSectionInterface[]
}

export default SearchResultsInterface;
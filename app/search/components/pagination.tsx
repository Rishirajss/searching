import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
  visiblePages?: number;
}

export const PaginationComponent: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  handlePageChange,
  visiblePages = 3,
}) => {
  const renderPaginationLinks = () => {
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    const paginationItems = [];

    // Ellipsis (before the "Previous" button)
    // if (startPage > 1) {
    //   paginationItems.push(
    //     <PaginationItem key="start-ellipsis">
    //       <PaginationEllipsis />
    //     </PaginationItem>,
    //   );
    // }

    // Previous button
    if (currentPage > 1) {
      paginationItems.push(
        <PaginationItem key="prev">
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>,
      );
    }

    // Page links
    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    // Ellipsis (after the page links)
    if (endPage < totalPages) {
      paginationItems.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>,
      );
    }

    // Next button
    if (currentPage < totalPages) {
      paginationItems.push(
        <PaginationItem key="next">
          <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
        </PaginationItem>,
      );
    }

    return paginationItems;
  };

  return (
    <Pagination>
      <PaginationContent>{renderPaginationLinks()}</PaginationContent>
    </Pagination>
  );
};

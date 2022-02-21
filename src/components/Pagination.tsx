import KommyLink from './Link';

interface PaginationProps {
  totalPages: any;
  currentPage: any;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const prevPage = parseInt(currentPage) - 1 > 0;
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages);

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            type="button"
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <KommyLink
            href={
              currentPage - 1 === 1
                ? `/posts/`
                : `/posts/page/${currentPage - 1}`
            }
          >
            <button type="button">Previous</button>
          </KommyLink>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            type="button"
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <KommyLink href={`/posts/page/${currentPage + 1}`}>
            <button type="button">Next</button>
          </KommyLink>
        )}
      </nav>
    </div>
  );
}

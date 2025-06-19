// src/utils/pagination.js
export function initPagination({ data = [], itemsPerPage = 12, onRenderPage, paginationContainer }) {
  let currentPage = 1;
  let totalPages = Math.ceil(data.length / itemsPerPage);

  function renderPagination() {
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.className = `px-4 py-2 rounded border text-sm transition ${
        i === currentPage
          ? "bg-[var(--color-3)] text-white border-[var(--color-3)]"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
      }`;
      button.addEventListener("click", () => changePage(i));
      paginationContainer.appendChild(button);
    }
  }

  function changePage(page) {
    currentPage = page;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = data.slice(start, end);
    onRenderPage(pageData);
    renderPagination();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return {
    render(newData) {
      data = newData;
      totalPages = Math.ceil(data.length / itemsPerPage);
      changePage(1);
    },
    goToPage: changePage,
  };
}

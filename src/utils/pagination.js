// src/utils/pagination.js
export function initPagination({ data = [], itemsPerPage = 12, onRenderPage, paginationContainer }) {
  let currentPage = 1;
  let totalPages = Math.ceil(data.length / itemsPerPage);

  function renderPagination() {
  paginationContainer.innerHTML = "";

  const maxVisibleButtons = 5; // số lượng nút trang hiển thị chính giữa
  const pages = [];

  if (totalPages <= maxVisibleButtons + 2) {
    // Hiển thị tất cả nếu ít trang
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    pages.push(1);

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  pages.forEach((p) => {
    const button = document.createElement("button");

    if (p === "...") {
      button.textContent = "...";
      button.disabled = true;
      button.className =
        "px-4 py-2 text-gray-400 border border-gray-200 cursor-default";
    } else {
      button.textContent = p;
      button.className = `px-4 py-2 rounded border text-sm transition ${
        p === currentPage
          ? "bg-[var(--color-3)] text-white border-[var(--color-3)]"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
      }`;
      button.addEventListener("click", () => changePage(p));
    }

    paginationContainer.appendChild(button);
  });
}


  function changePage(page) {
    currentPage = page;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = data.slice(start, end);
    onRenderPage(pageData, page);
    renderPagination();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return {
    render(newData) {
      data = newData;
      totalPages = Math.ceil(data.length / itemsPerPage);
      changePage(1);
    },
    updateData(newData) {
      data = newData;
      totalPages = Math.ceil(data.length / itemsPerPage);
    },
    goToPage: changePage,
  };
}

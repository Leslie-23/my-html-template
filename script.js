document.addEventListener("DOMContentLoaded", function () {
  const files = [
    { name: "Morning Prayer", url: "path/to/morning-prayer.pdf" },
    { name: "Evening Prayer", url: "path/to/evening-prayer.pdf" },
    { name: "Sunday Service", url: "path/to/sunday-service.pdf" },
  ];

  const fileList = document.getElementById("file-list");

  files.forEach((file) => {
    const listItem = document.createElement("li");
    const downloadButton = document.createElement("button");

    downloadButton.textContent = `Download ${file.name}`;
    downloadButton.addEventListener("click", () => {
      window.location.href = file.url;
    });

    listItem.appendChild(downloadButton);
    fileList.appendChild(listItem);
  });
});

const url =
  "https://api.unsplash.com/search/photos?query=cars&per_page=20&client_id=nLM4Hq-rLb931DiT6toUYJdw6g2I-A9wGdZyc4i2YOI";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const container = document.querySelector(".container");

    for (let i = 0; i < data.results.length - 1; i++) {
      const img = document.createElement("img");

      img.setAttribute("src", data.results[i].urls.thumb);

      container.append(img);
    }
  });

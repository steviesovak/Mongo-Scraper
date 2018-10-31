// require axios & cheerio
var axios = require("axios");
var cheerio = require("cheerio");

// function to scrape
var scrape = function() {
  // Scrape NYT
  return axios.get("http://www.nytimes.com").then(function(res) {
    var $ = cheerio.load(res.data);
    // empty array to save our articles
    var articles = [];

    $("article.css-180b3ld").each(function(i, element) {

      var head = $(this)
        .find("h2")
        .text()
        .trim();

      // grab URL for article
      var url = $(this)
        .find("a")
        .attr("href");

      var sum = $(this)
        .find("p")
        .text()
        .trim();

      if (head && sum && url) {
        var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

        var dataToAdd = {
          headline: headNeat,
          summary: sumNeat,
          url: "https://www.nytimes.com" + url
        };

        articles.push(dataToAdd);
      }
    });
    return articles;
  });
};

module.exports = scrape;

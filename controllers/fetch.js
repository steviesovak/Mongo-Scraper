var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    // scrape NYT
    return scrape()
      .then(function(articles) {
        // insert articles into db
        return db.Headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No new articles . Try again later!!"
          });
        }
        else {
          res.json({
            message: "Added " + dbHeadline.length + " new articles!!"
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "Scrape is complete!!"
        });
      });
  }
};

// task.js
const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const cron = require("node-cron");

const fetchSignals = async () => {
  const url = "https://cryptoqualitysignals.com/latest-free-signals/";
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const signals = [];

    $(".wp-show-posts-inner").each((index, section) => {
      const paragraphs = $(section).find("p");

      paragraphs.each((i, paragraph) => {
        const text = $(paragraph).text().trim();
        if (text.includes("FREE signal")) {
          let signalDetails = text;

          const nextParagraph = paragraphs.eq(i + 1);
          const nextText = nextParagraph.text().trim();
          if (nextText.includes("Exchange:")) {
            signalDetails += "\n" + nextText;
          } else {
            const secondNextParagraph = paragraphs.eq(i + 2);
            const secondNextText = secondNextParagraph.text().trim();
            if (secondNextText.includes("Exchange:")) {
              signalDetails += "\n" + secondNextText;
            }
          }

          // Extract and format the exchange name and coin details
          const exchangeMatch = signalDetails.match(/Exchange: (\w+)/);
          if (exchangeMatch) {
            const exchangeName = exchangeMatch[1];
            signalDetails = signalDetails.replace(/Exchange: \w+/, ""); // Remove the Exchange part from details

            // Remove the "FREE signal" part and associated details
            signalDetails = signalDetails.replace(/FREE signal.*?UTC\n\n/, "");

            signalDetails = signalDetails.replace(/\t/g, ""); // Remove tabs
            signalDetails = signalDetails.replace("ChartBuy", "\nBuy"); // Replace ChartBuy with newline and Buy
            signalDetails = signalDetails.replace(" – \nBuy", "\nBuy"); // Remove hyphen before Buy
            signalDetails = `Exchange: ${exchangeName}\n${signalDetails.trim()}`; // Add the exchange heading
            signals.push(signalDetails);
          }
        }
      });
    });

    // Save signals to a JSON file
    fs.writeFile(
      "public/signals.json",
      JSON.stringify(signals, null, 2),
      (err) => {
        if (err) {
          console.error("Error saving signals to file:", err);
        } else {
          console.log("Signals saved to signals.json");
        }
      },
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Schedule the task to run every 30 seconds
cron.schedule('0 * * * *', fetchSignals);


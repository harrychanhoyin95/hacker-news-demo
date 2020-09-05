import axios from 'axios';
import cheerio from 'cheerio';
import _ from "lodash";

const NewsQueries = {
  news: async (parents, args, context) => {
    try {
      const news = []

      const data = await axios.get('https://news.ycombinator.com/news')
        .then(res => res.data)
        .catch(err => {
          throw err
        })

      const $ = cheerio.load(data);
      const heading = $('a.storylink');
      heading.each(function(this: CheerioElement, index, element) {
        _.set(news, `[${index}].title`, $(this).text())
        _.set(news, `[${index}].link`, $(this).attr("href"));
      })

      const subtext = $('td.subtext');
      subtext.each(function(this: CheerioElement, index, element) {
        let numberOfComments

        _.set(news, `[${index}].score`, Number($(this).find('.score').text().replace(" points", "")))
        _.set(news, `[${index}].author`, $(this).find('a.hnuser').text())
        _.set(news, `[${index}].age`, $(this).find('span.age a').text())

        const commentsText = $(this).children().last().text()
        if (commentsText.includes("comments")) {
          numberOfComments = Number(commentsText.replace(" comments", ""))
        } else {
          numberOfComments = 0
        }
        _.set(news, `[${index}].numberOfComments`, numberOfComments)
      })

      const descendingNewsByCommentsCount = news.sort((a, b) => b.numberOfComments - a.numberOfComments)

      return descendingNewsByCommentsCount;
    } catch (err) {
      throw err;
    }
  }
}

export { NewsQueries };
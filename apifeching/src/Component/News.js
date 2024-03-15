import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {
  articles=[
    {
      "source": {
        "id": null,
        "name": "CNBC"
      },
      "author": "Hugh Son",
      "title": "Some NYCB deposits may be a flight risk after Moody’s downgrades ratings again - CNBC",
      "description": "Moody's slashed one of New York Community Bank's key ratings for the second time in a month.",
      "url": "https://www.cnbc.com/2024/03/04/some-nycb-deposits-may-be-at-risk-after-another-moodys-downgrade.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107370521-17073441702024-02-07t011117z_181388254_rc25t5a5jhqn_rtrmadp_0_ny-cmnty-bancp-moody-s.jpeg?v=1707344314&w=1920&h=1080",
      "publishedAt": "2024-03-04T20:24:27Z",
      "content": "Regional lender New York Community Bank may have to pay more to retain deposits after one of the company's key ratings was slashed for the second time in a month.\r\nLate Friday, Moody's Investors Serv… [+2961 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Joshua Berlinger, Xiaofei Xu",
      "title": "France becomes world’s first country to enshrine abortion rights in constitution - CNN",
      "description": "The historic decision is the culmination of an effort that began in direct response to the US Supreme Court’s decision to overturn Roe v. Wade.",
      "url": "https://www.cnn.com/2024/03/04/europe/france-abortion-constitution-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2039806910.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-03-04T19:45:00Z",
      "content": "France became the worlds first countryto enshrine abortion rights in its constitution on Monday, the culmination of an effort that began in direct response to the US Supreme Courts decision to overtu… [+3416 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Melissa Rudy",
      "title": "Protest of CDC’s new COVID guidance planned for this month in Washington, DC: ‘Urgent need’ - Fox News",
      "description": "A community of \"long COVID\" activists has planned a march in Washington, D.C., to protest a recent announcement from the CDC. One of the organizers speaks to Fox News Digital about the event.",
      "url": "https://www.foxnews.com/health/protest-cdcs-covid-guidance-planned-washington-dc-urgent-need",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/03/lincoln-memorial.jpg",
      "publishedAt": "2024-03-04T19:30:00Z",
      "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+6300 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "EDITH M. LEDERER",
      "title": "UN envoy says 'reasonable grounds' to believe Hamas committed sexual violence on Oct. 7 - The Associated Press",
      "description": "The U.N. envoy focusing on sexual violence in conflict says there are “reasonable grounds” to believe Hamas committed rape, “sexualized torture,” and other cruel and inhuman treatment of women during its surprise attack in southern Israel on Oct. 7 that left …",
      "url": "https://apnews.com/article/israel-palestinians-un-rape-oct7-hamas-gaza-fe1a35767a63666fe4dc1c97e397177e",
      "urlToImage": "https://dims.apnews.com/dims4/default/9c0e66e/2147483647/strip/true/crop/5616x3159+0+293/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fea%2Fc8%2F9d06bfd12571a2f993def7d6bdcb%2F338295857d3c4a05864a0ed94953c01a",
      "publishedAt": "2024-03-04T19:24:22Z",
      "content": "UNITED NATIONS (AP) The U.N. envoy focusing on sexual violence in conflict said in a new report Monday that there are reasonable grounds to believe Hamas committed rape, sexualized torture, and other… [+3365 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "John Fritze, Devan Cole, Marshall Cohen",
      "title": "Supreme Court keeps Trump on Colorado ballot, rejecting 14th Amendment push - CNN",
      "description": "The Supreme Court ruled Monday that former President Donald Trump should appear on the ballot in Colorado in a decision that follows months of debate over whether the frontrunner for the GOP nomination violated the “insurrectionist clause” included in the 14t…",
      "url": "https://www.cnn.com/2024/03/04/politics/trump-supreme-court-colorado-14th-amendment/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1995694336-20240304014552715.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-03-04T19:22:00Z",
      "content": "The Supreme Court ruled Monday that former President Donald Trump should appear on the ballot in Colorado in a decision that follows months of debate over whether the frontrunner for the GOP nominati… [+8359 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": null,
      "title": "Kate Middleton spotted for first time since January hospitalization - Fox News",
      "description": null,
      "url": "https://www.foxnews.com/entertainment/kate-middleton-spotted-for-first-time-since-january-hospitalization",
      "urlToImage": null,
      "publishedAt": "2024-03-04T19:19:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Caitlin Clark saluted by LeBron James for breaking college basketball record - BBC.com",
      "description": "With 3,685 points, Ms Clark became the all-time leading scorer in men's and women's college basketball.",
      "url": "https://www.bbc.com/news/world-us-canada-68468912",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16209/production/_132833609_gettyimages-2049061659.jpg",
      "publishedAt": "2024-03-04T19:07:17Z",
      "content": "Ms Clark has broken several records in her time as an Iowa Hawkeyes player\r\nWomen's basketball star Caitlin Clark earned praise from President Joe Biden and LeBron James after she became the NCAA's a… [+2077 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Lawrence Bonk",
      "title": "Pixel phones just got next-gen call screening - Engadget",
      "description": "Google just rolled out next-gen call screening to some Pixel phone models. This tool employs Google Assistant to find out why the person on the other end...",
      "url": "https://www.engadget.com/pixel-phones-just-got-next-gen-call-screening-190034396.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/psaO7KbjrnAq5ioixCCD3Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/4ad41870-d7f4-11ee-bcba-8744e7682299",
      "publishedAt": "2024-03-04T19:00:34Z",
      "content": "Google just announced that some Pixel phones are getting next-gen call screening. This improves on the pre-existing Call Screen feature by implementing a new Hello button. Once tapped, the system wil… [+1353 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Juli Clover",
      "title": "M3 MacBook Pro to Get Multi-Display Support With Software Update - MacRumors",
      "description": "Apple is planning a software update that will add multi-display support to the 14-inch M3 MacBook Pro model, the company confirmed to 9to5Mac. The M3...",
      "url": "https://www.macrumors.com/2024/03/04/m3-macbook-pro-multi-display-support/",
      "urlToImage": "https://images.macrumors.com/t/oJJ29_JDaeK4p98oIB-4rkIiPs8=/2500x/article-new/2023/10/m3-macbook-pro-blue.jpg",
      "publishedAt": "2024-03-04T18:47:40Z",
      "content": "Apple is planning a software update that will add multi-display support to the 14-inch M3 MacBook Pro model, the company confirmed to 9to5Mac. The M3 MacBook Air models that were introduced today inc… [+1179 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "VALERIE GONZALEZ",
      "title": "Influx of firefighters, cooler weather in Texas Panhandle helps keep wildfires in check - The Associated Press",
      "description": "An influx of hundreds of firefighters and more favorable weather conditions are helping authorities in the Texas Panhandle keep the largest wildfire in state history from threatening more homes and communities. A cluster of fires has burned across more than 1…",
      "url": "https://apnews.com/article/texas-wildfire-panhandle-hutchinson-united-way-donations-d61f26c6686ae62e855bd2075453651b",
      "urlToImage": "https://dims.apnews.com/dims4/default/5358dc1/2147483647/strip/true/crop/1745x982+0+93/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb0%2Faa%2Fb4af2d42dc11c0dfbf95b772c740%2F26c88d99279e47729069eb17e53516cc",
      "publishedAt": "2024-03-04T18:46:00Z",
      "content": "McALLEN, Texas (AP) An influx of hundreds of firefighters and more favorable weather conditions on Monday helped authorities in the Texas Panhandle keep the largest wildfire in state history from thr… [+3798 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "Aaron Katersky",
      "title": "Pentagon leaker Jack Teixeira agrees to accept 16-year prison sentence - ABC News",
      "description": "Teixeira, 22, agreed to plead guilty to all six counts against him.",
      "url": "https://abcnews.go.com/US/pentagon-leak-suspect-jack-teixeira-agrees-accept-16/story?id=107772933",
      "urlToImage": "https://i.abcnewsfe.com/a/0b9b6782-b91e-4abc-bc3e-5dcc017d5a2e/Jack-Teixeira-rt-jm-240304_1709564827728_hpMain_16x9.jpg?w=1600",
      "publishedAt": "2024-03-04T18:45:00Z",
      "content": "Massachusetts Air National Guardsman Jack Teixeira agreed Monday that he caused one of the most extraordinary leaks of national defense secrets in years and agreed to accept a prison sentence of 16 y… [+5646 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Tim McManus",
      "title": "Eagles' Jason Kelce announces retirement after 13 seasons - ESPN",
      "description": "The Eagles' Jason Kelce, the only center since 1970 to have won a Super Bowl and been named first-team All-Pro six times, has retired after 13 seasons.",
      "url": "https://www.espn.com/nfl/story/_/id/39653213/eagles-jason-kelce-announces-retirement-13-seasons",
      "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0116%2Fr1278161_1296x729_16%2D9.jpg",
      "publishedAt": "2024-03-04T18:05:00Z",
      "content": "PHILADELPHIA -- Eagles star center Jason Kelce, one of the key leaders for a team that has made six postseason appearances and two Super Bowl trips over the past seven seasons, announced his retireme… [+3988 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "San Francisco Chronicle"
      },
      "author": "Anthony Edwards, Kate Galbraith",
      "title": "How California's snowpack has changed after massive storm - San Francisco Chronicle",
      "description": "Cailfornia's snowpack has jumped to above normal levels after the weekend blizzard. It's a dramatic turnaround from just two months ago.",
      "url": "https://www.sfchronicle.com/weather/article/california-snow-totals-18703088.php",
      "urlToImage": "https://s.hdnux.com/photos/01/36/41/42/24778941/3/rawImage.jpg",
      "publishedAt": "2024-03-04T18:00:21Z",
      "content": "A man skis with his dog as heavy snow falls in South Lake Tahoe on Sunday. Snow totals across the Sierra soared after the storm.\r\nNoah Berger/Special to the Chronicle\r\nAfter a multi-day blizzard drop… [+2857 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "Bruce Feldman",
      "title": "NFL Scouting Combine takeaways: Michael Penix and the QBs, a loaded WR class and more - The Athletic",
      "description": "What did we learn from the NFL Scouting Combine and who stood out? Let's break down what we heard.",
      "url": "https://theathletic.com/5314788/2024/03/04/nfl-scouting-combine-takeaways-quarterbacks/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/03/04085842/0304_CombineTakeaways.jpg",
      "publishedAt": "2024-03-04T17:50:28Z",
      "content": "The draft process is always fascinating, but when you have this deep of a quarterback crop, thats when things get juicy. I have never been this curious to see how things unfold as I am with this quar… [+10167 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CoinDesk"
      },
      "author": "Lyllah Ledesma",
      "title": "Bitcoin Price Action Will 'Astonish' This Week: Analyst - CoinDesk",
      "description": "The cryptocurrency hit an all-time high against the euro on Monday and is nearing a record in U.S. dollar terms.",
      "url": "https://www.coindesk.com/markets/2024/03/04/bitcoin-price-action-will-astonish-this-week-analyst/",
      "urlToImage": "https://www.coindesk.com/resizer/fy8XJUNcAkEZfeLqPf9tyXPSMUE=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/F4AMMZ26WFCCPGGNTZ3C7QKMFI.jpg",
      "publishedAt": "2024-03-04T17:46:00Z",
      "content": "Bitcoin (BTC) will reach an all-time high before the week ends, according to Markus Thielen, head of research at 10x.\r\nPrice action during the weekend is always important to follow and while attempts… [+1455 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Variety"
      },
      "author": "Rebecca Rubin",
      "title": "‘Dune 2’ Box Office: 5 Takeaways From the Sequel’s Heroic Opening Weekend - Variety",
      "description": "Here are five takeaways from \"Dune: Part Two's\" mighty box office debut.",
      "url": "https://variety.com/2024/film/news/dune-2-box-office-analysis-opening-weekend-timothee-chalamet-1235928762/",
      "urlToImage": "https://variety.com/wp-content/uploads/2024/02/dune-6.jpg?w=1000&h=563&crop=1",
      "publishedAt": "2024-03-04T17:46:00Z",
      "content": "Not even the prophetic visions of Timothée Chalamet’s Paul Atreides, the messianic protagonist of “Dune,” could have predicted the commercial appeal of director Denis Villeneuve’s ambitious interplan… [+7236 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "KABC-TV"
      },
      "author": null,
      "title": "Texas-based company claims to have new evidence in search for missing Malaysia Airlines Flight MH370 - KABC-TV",
      "description": "It's been nearly 10 years to the day since Malaysia Airlines Flight MH370 disappeared from radar and is believed to have plunged into the Indian Ocean.",
      "url": "https://abc7.com/malaysia-airlines-flight-mh370-missing-plane-ocean-infinity-370/14490516/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/14490547_030424-wpvi-n1-mh-370-search-pkg-video-vid.jpg?w=1600",
      "publishedAt": "2024-03-04T17:38:24Z",
      "content": "There is new hope in the disappearance of the Malaysia Airlines flight that vanished 10 years ago.\r\nThe Texas-based company, Ocean Infinity, claims to have scientific evidence of the plane's final re… [+1403 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Kristine Parks",
      "title": "Democratic lawyer taunting Trump's 'tough jury pool' in DC sparks backlash from right on social media - Fox News",
      "description": "Democratic lawyer Marc Elias was criticized after mocking former President Trump's ability to get a fair trial in Washington D.C. after losing the GOP primary in the district.",
      "url": "https://www.foxnews.com/media/democratic-lawyer-taunting-trumps-tough-jury-pool-dc-sparks-backlash-right-social-media",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/01/AP24011073565402.jpg",
      "publishedAt": "2024-03-04T17:30:00Z",
      "content": "Top Democratic lawyer Marc Elias sparked fierce reaction on Sunday for appearing to taunt former President Trump's ability to get a fair trial in Washington, D.C. following his primary loss in the di… [+3244 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jeff Dunn",
      "title": "Samsung's Galaxy S24 phones are up to $150 off at Amazon and Best Buy - Engadget",
      "description": "Samsung's Galaxy S24 smartphones are up to $150 at Amazon and Best Buy after new sales.",
      "url": "https://www.engadget.com/samsungs-galaxy-s24-phones-are-up-to-150-off-at-amazon-and-best-buy-164520013.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/BjHifshRK.0KUogsU_Hz.A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjA-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/8918c140-bed0-11ee-9bf6-8a3e196f28ea",
      "publishedAt": "2024-03-04T16:45:20Z",
      "content": "Both Amazon and Best Buy have kicked off new sales on Samsung's Galaxy S24 lineup, taking up to $150 off the unlocked versions of the recently released smartphones. The 6.8-inch Galaxy S24 Ultra and … [+2248 chars]"
    }
  ]

constructor(){
  super();
  this.state={
   articles :this.articles
  }
}

  render() {
    return (
      <div>
        <h1>This is my news channel</h1>
       
<div class='row'>
 {  this.state.articles.map((element)=>
   {
   return <div class='col-sm-3'>
    <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage}></NewsItem>
    </div>
   }
   )}
  
  </div>
      </div>
    )
  }
}

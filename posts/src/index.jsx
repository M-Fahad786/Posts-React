import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// First Component
const NewsPost = ({ description, news_url, image_url }) => (
  <div className="post">
    <h1 className="post-head">Description:</h1>
    <p>{description}</p>
    <img className="post-pic" src={image_url} alt="news" />
    <a className="orig-link" href={news_url} rel="noreferrer">
      Read More
    </a>
  </div>
);

const NewsPage = () => (
  <div className="page">
    <h1 className="page-head">Facebook Posts</h1>
    <div className="main">
      {/* // Reusing First Component */}
      <NewsPost
        description="Musk says SpaceX is burning through almost $20 million a month providing Star link access to Ukraine."
        news_url="https://www.marketwatch.com/story/elon-musk-says-spacex-cant-afford-to-give-ukraine-free-starlink-access-anymore-11665765712"
        image_url="https://images.mktw.net/im-551514/social"
      />
      <NewsPost
        description="By Steve Gor man (Reuters) -   The fourth long-duration astronaut team launched by SpaceX to the International Space Station (ISS) for NASA departed the orbiting outpost on Friday to begin their flight back to Earth, capping a science mission of nearly six mon…"
        news_url="https://www.fxempire.com/news/article/spacex-capsule-leaves-space-station-to-bring-4-astronauts-back-to-earth-1162927"
        image_url="https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2022/10/tagreuters.com2022newsml_LYNXMPEI9D0W71.jpg"
      />
      <NewsPost
        description="The U.S. Supreme Court on Thursday rejected former President Donald Trump's bid to have an independent arbiter vet classified documents that were seized by the FBI from his Florida home as part of his legal battle against investigators probing his handling of…"
        news_url="https://www.reuters.com/legal/us-supreme-court-rejects-trump-request-over-seized-documents-2022-10-13/"
        image-url="https://www.reuters.com/resizer/Y9JFiv5HNREmJ4dYImTw61rU6mE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SERA632KI5POHAAFVG7FOEI5V4.jpg"
      />

      <NewsPost
        description="Moscow's deadly strikes on civilian targets have continued through the week, and the Ukrainian President has reiterated his plea to NATO for more air defense capacities. Follow live updates here."
        news_url="https://www.cnn.com/europe/live-news/russia-ukraine-war-news-10-14-22/index.html"
        image_url="https://media.cnn.com/api/v1/images/stellar/prod/221013162927-01-kherson-evacuation.jpg?c=16x9&q=w_800,c_fill"
      />

      <NewsPost
        description="DUBAI, United Arab Emirates (AP) — Saudi Arabia said Thursday that the U.S. had urged it to postpone a decision by OPEC and its allies — including Russia — to cut oil production by a month. Such a delay could have helped reduce the risk of a spike in gas price…"
        news_url="https://apnews.com/article/russia-ukraine-biden-inflation-business-elections-a359717a7edd2e609701d03328b55418"
        image_url="https://storage.googleapis.com/afs-prod/media/c3612113fb054603a0d20f1514a364be/2912.jpeg"
      />

      <NewsPost
        description="Shares of Nio Inc. sank to the lowest prices seen in more than two years, to disappoint not only bulls, but also likely the many bears who have just covered their short positions"
        news_url="https://www.marketwatch.com/story/nio-shorts-may-have-covered-too-soon-as-ev-makers-stock-sinks-to-more-than-2-year-low-11665765236"
        image_url="https://images.mktw.net/im-644513/social"
      />
    </div>
  </div>
);

ReactDOM.render(<NewsPage />, document.querySelector("#root"));

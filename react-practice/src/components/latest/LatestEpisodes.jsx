import React from "react";
import "./latest.css";
import LatestCardList from "./subcomponents/LatestCardList";
import LatestCard from "./subcomponents/LatestCard";
export default function LatestEpisodes() {
  return (
    <>
      <div className="wrapper__latest">
        <div className="container">
          <section className="latest__header">
            <article className="latest__header-h1">Latest episodes</article>
            <article className="latest__header-btn">
              <button>View all episodes</button>
            </article>
          </section>
          <section className="latest__cards">
            {LatestCardList.map((v) => {
              return (
                <LatestCard
                  key = {v.ep}
                  img={v.img}
                  ep={v.ep}
                  title={v.title}
                  desc={v.desc}
                  caption={v.caption}
                />
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}

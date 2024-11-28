import Link from "next/link";

const NewsItem = ({ image }) => {
  return (
    <div className="col-4">
      <div className="news-card to-top show-on-scroll">
        <Link href="#" className="news-card-img">
          <div className="img-wrapper">
            <div
              className="img"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        </Link>
        <h3 className="news-title">
          <Link href="#">
            Cycling On Your Period: Harness The Power Of Your Hormones
          </Link>
        </h3>
        <p className="news-preview">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          exercitationem reprehenderit assumenda similique debitis consequuntur
          aliquid eum temporibus tempora, error qui in iusto ducimus expedita
          earum aspernatur dignissimos, porro dolores!
        </p>
        <Link href="#" className="btn">
          read more
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;

import Image from "next/image";
import { portfolio } from "@/data/site";

const categoryLabels: Record<string, string> = {
  Color: "染髮",
  Cut: "剪髮",
  Perm: "燙髮"
};

export function PortfolioFilter() {
  return (
    <div className="portfolioExperience">
      <div className="portfolioGrid">
        {portfolio.map((item) => (
          <article className={`portfolioCard tone-${item.tone}`} data-reveal data-tilt key={`${item.category}-${item.title}`}>
            <div className="portfolioImage" data-image-reveal>
              <Image alt={item.title} height={900} src={item.image} width={720} />
              <span>{categoryLabels[item.category] ?? item.category}</span>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

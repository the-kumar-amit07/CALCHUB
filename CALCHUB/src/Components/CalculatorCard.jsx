import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getIndustryById } from "../Data/Industries";

const CalculatorCard = ({ calculator }) => {
  const industry = getIndustryById(calculator.industryId);

  return (
    <Link
      to={`/calculator/${calculator.id}`}
      className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
    >
      <div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {calculator.tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
          {calculator.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          {calculator.description}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{industry?.name}</span>
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </Link>
  );
};

export default CalculatorCard;
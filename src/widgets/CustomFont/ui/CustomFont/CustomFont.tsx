import { FC } from "react";
import { CustomFont } from "../../model/types";

const CustomFont: FC<CustomFont> = ({ children,
    title = false,
    highlightedTitle = false,
    description = false,
    highlightedDescription = false,
    numeric = false
    }) => {
    let className = numeric
        ? "font-primary font-bold "
        : title || highlightedTitle
            ? "font-secondary "
            : "font-tertiary ";

    className += description
        ? "font-regular "
        : highlightedDescription
            ? "font-extrabold "
            : "";


    if (title)
        className +=
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap text-secondary";
    else if (highlightedTitle)
        className +=
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap text-primary whitespace-nowrap";
    else if (description)
        className += "text-md md:text-xl lg:text-2xl text-justify text-secondary";
    else if (highlightedDescription)
        className += "text-md md:text-xl lg:text-2xl text-justify text-primary";
    else if (numeric)
        className += "text-2xl sm:text-4xl md:text-4xl lg:text-5xl text-justify text-primary";

    return (
        <span className={className}>
            {children}
        </span>
    );
};

export default CustomFont;

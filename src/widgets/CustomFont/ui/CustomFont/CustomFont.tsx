import { FC } from "react";
import { CustomFont } from "../../model/types";

const CustomFont: FC<CustomFont> = ({ children,
    title = false,
    highlightedTitle = false,
    description = false,
    highlightedDescription = false,
    numeric = false,
    border = false }) => {
    let className = numeric
        ? "font-secondary font-extrabold "
        : title || highlightedTitle
            ? "font-primary "
            : "font-secondary ";

    className += description
        ? "font-regular "
        : highlightedDescription
            ? "font-extrabold "
            : "";

    className += border ? "border-[1px] border-white bg-transparent" : "";

    if (title)
        className +=
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap text-secondary";
    else if (highlightedTitle)
        className +=
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:max-w-[95%] xl:max-w-[80%] leading-tight tracking-wide lowercase flex flex-wrap text-primary whitespace-nowrap";
    else if (description || highlightedDescription || border)
        className += "text-md md:text-xl lg:text-2xl text-justify text-secondary";

    return (
        <span className={className}>
            {children}
        </span>
    );
};

export default CustomFont;

import { ReactNode } from "react";
import clsx from "clsx";
import "@/app/index.css";

interface SectionProps {
    children: ReactNode;
    full?: boolean;
    float?: boolean;
    explorable?: boolean;
    transparent?: boolean;
    glassMorphism?: boolean;
    navbar?: boolean;
    noVerticalLines?: boolean;
    blurred?: boolean;
    hero?: boolean;
    imageContent?: boolean;
}

const SectionLayout = ({
    children,
    full = false,
    float = false,
    explorable = false,
    transparent = false,
    glassMorphism = false,
    navbar = false,
    noVerticalLines = false,
    blurred = false,
    hero = false,
    imageContent = false,
}: SectionProps) => {

    return (
        <div
            className={clsx(
                "w-screen min-w-80 overflow-x-clip border border-x-0 border-t-0 border-quarternary px-6 sm:px-12",
                {
                    "fixed left-0 right-0 top-0 z-10": float,
                    "bg-tertiary": !transparent,
                    "bg-transparent": transparent,
                    "backdrop-blur-3xl": glassMorphism,
                    "backdrop-blur-md": blurred,
                },
            )}
        >
            <div
                className={clsx("relative w-full border-y-0 border-quarternary", {
                    border: !noVerticalLines,
                    "px-4 sm:px-8 lg:px-16": !full,
                    "py-2 sm:py-4 lg:py-9": !full && !navbar,
                    "py-2 sm:py-4": navbar,
                    "pb-10": explorable && !imageContent,
                    "backdrop-brightness-50": hero,
                })}
            >
                <div
                    className={clsx("mx-auto w-full", {
                        "max-w-[1440px]": !imageContent,
                    })}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SectionLayout;

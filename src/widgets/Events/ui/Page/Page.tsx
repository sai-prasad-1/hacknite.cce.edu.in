import { CustomFont } from "@/widgets/CustomFont";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import '../components/carousel/embla.css'

const Events: FC = () => {

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


    return (
        <>
            <SectionLayout>
                <CustomFont>
                    <div className="flex items-start justify-center flex-col">
                        <CustomFont description>More <span className="text-4xl">Events</span></CustomFont>
                        <span className="text-2xl">Explore more events conducted by</span>
                        <span className="text-4xl last:lowercase uppercase">CODe</span>
                    </div>
                </CustomFont>
                <div>
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                </div>
            </SectionLayout>
        </>
    );
};

export default Events;

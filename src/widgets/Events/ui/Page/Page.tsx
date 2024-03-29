import { CustomFont } from "@/widgets/CustomFont";
import { FC } from "react";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import '../components/carousel/embla.css'

const Events: FC = () => {

    const OPTIONS: EmblaOptionsType = { loop: true }


    return (
        <>
            <div className="flex items-center justify-center gap-5 flex-col">
                <CustomFont title>More Events</CustomFont>
                <CustomFont description>Explore more events conducted by<span className="text-[#55FFFF]">&nbsp;CODe</span></CustomFont>
            </div>
            <div>
                <EmblaCarousel options={OPTIONS} />
            </div>
        </>
    );
};

export default Events;

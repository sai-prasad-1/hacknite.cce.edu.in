import { CustomFont } from "@/widgets/CustomFont";
import { FC } from "react";

const Theme: FC = () => {
    const [startOffset, setStartOffset] = useState("1200px");
    const textPathRef = useRef<SVGTextPathElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement;
            const b = document.body;
            const st = 'scrollTop';
            const sh = 'scrollHeight';
            const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            setStartOffset((-percent * 40 + 1200) + "px");
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <SectionLayout>
                <CustomFont description>
                    <div className="flex items-center justify-center flex-col gap-5">
                        <span className="text-5xl">Our Theme</span>
                        <span className="text-5xl">Open Innovation</span>
                        <p className="text-justify text-3xl">
                            Participants have the freedom to choose their own problem statement based on their interests and expertise.
                        </p>
                    </div>
                </CustomFont>
            </SectionLayout>
        </>
    );
};

export default Theme;

import { CustomFont } from "@/widgets/CustomFont";
import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";

const Theme: FC = () => {
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

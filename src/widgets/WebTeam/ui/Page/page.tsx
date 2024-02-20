import SectionLayout from "@/widgets/SectionLayout/ui/SectionLayout/SectionLayout";
import { FC } from "react";
import { ProfileDetail } from "../../model/types";
import { CustomFont } from "@/widgets/CustomFont";

const WebsiteTeam: FC = () => {
    return (
        <>
            <SectionLayout>
                <div className="mb-6 sm:mb-12 lg:mb-0 bg-center items-center justify-center flex-col p-10">
                    <div className="flex items-center p-5 justify-center w-full">
                        <span className="font-secondary text-5xl capitalize">Website Team</span>
                    </div>
                    <div className="grid  grid-cols-5 gap-3">
                        <div></div>
                        <div className="col-span-2">
                            <ProfileCard name="Alfrin Paulose" role="Developer" imgUrl="/images/webteam/alfrin-pic.png" />
                        </div>
                        <div className="col-span-2">
                            <ProfileCard name="Sai Prasad" role="Developer" imgUrl="/images/webteam/sai-pic.png" />
                        </div>
                        <div className="row-start-2 col-span-2">
                            <ProfileCard name="Francis Gigi" role="UI/UX Designer" imgUrl="/images/webteam/francis-pic.png" />
                        </div>
                        <div className="col-span-2">
                            <ProfileCard name="Alina Pauly" role="UI/UX Designer" imgUrl="/images/webteam/alina-pic.png" />
                        </div>
                        <div></div>
                        <div className="row-start-3 col-start-2 col-span-2">
                            <ProfileCard name="Aisac Jose" role="Developer" imgUrl="/images/webteam/aisac-pic.png" />
                        </div>
                        <div className="col-span-2">
                            <ProfileCard name="Amal Manoj" role="Developer" imgUrl="/images/webteam/amal-pic.png" />
                        </div>
                        <div className="row-start-3 col-span-2">
                            <ProfileCard name="Mick Suraj" role="Developer" imgUrl="/images/webteam/mick-pic.png" />
                        </div>

                        <div className="col-span-2">
                            <ProfileCard name="Rinto Joseph T R" role="Developer" imgUrl="/images/webteam/rinto-pic.png" />
                        </div>
                    </div>
                </div>
            </SectionLayout >
        </>
    )
}


const ProfileCard: FC<ProfileDetail> = ({ name, role, imgUrl }: ProfileDetail) => {
    return (
        <>
            <div className="card card-side rounded-none">
                <figure className=""><img src={imgUrl} className="bg-gradient-to-r from-blue-300 to-blue-400 object-cover w-[260px] h-[260px] grayscale hover:grayscale-0 transition duration-300 ease-in-out" /></figure>
                <div className="card-body ">
                    <div className="m-auto text-left w-full">
                        <CustomFont>
                        <h2 className="card-title">{name}</h2>
                        <p className="text-sm uppercase">{role}</p>
                        </CustomFont>
                    </div>
                </div>
            </div>
        </>
    )
}


export default WebsiteTeam
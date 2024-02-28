import { FC } from "react";
import { ProfileDetail } from "../../model/types";
import { CustomFont } from "@/widgets/CustomFont";

const WebsiteTeam: FC = () => {
    return (
        <>
            <div className="mb-6 sm:mb-12 lg:mb-0 bg-center items-center justify-center flex-col p-10">
                <div className="flex items-center p-5 justify-center w-full">
                    <span className="font-secondary text-5xl capitalize">Website Team</span>
                </div>
                <div className="grid-cols-5 gap-3 hidden xl:grid">
                    <div></div>
                    <div className="col-span-2">
                        <ProfileCard name="Alfrin Poulose" role="Developer" imgUrl="/images/webteam/alfrin-pic.png" />
                    </div>
                    <div className="col-span-2">
                        <ProfileCard name="Mihraj P S" role="Website Supervisor" imgUrl="/images/webteam/mihraj-pic.png" />
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
                <div className="flex items-center justify-center gap-10 flex-col xl:hidden">
                    <div className="flex items-center justify-center gap-5 flex-wrap lg:flex-nowrap">
                        <ProfileCard name="Alfrin Poulose" role="Developer" imgUrl="/images/webteam/alfrin-pic.png" />
                        <ProfileCard name="Mihraj P S" role="Website Supervisor" imgUrl="/images/webteam/mihraj-pic.png" />
                    </div>
                    <div className="flex items-center justify-center gap-5 flex-wrap lg:flex-nowrap">
                        <ProfileCard name="Francis Gigi" role="UI/UX Designer" imgUrl="/images/webteam/francis-pic.png" />
                        <ProfileCard name="Alina Pauly" role="UI/UX Designer" imgUrl="/images/webteam/alina-pic.png" />
                    </div>

                    <div className="col-start-2 flex items-center justify-center gap-5 flex-wrap lg:flex-nowrap">
                        <ProfileCard name="Aisac Jose" role="Developer" imgUrl="/images/webteam/aisac-pic.png" />
                        <ProfileCard name="Amal Manoj" role="Developer" imgUrl="/images/webteam/amal-pic.png" />
                    </div>
                    <div className="flex items-center justify-center gap-5 flex-wrap lg:flex-nowrap">
                        <ProfileCard name="Mick Suraj" role="Developer" imgUrl="/images/webteam/mick-pic.png" />
                        <ProfileCard name="Rinto Joseph T R" role="Developer" imgUrl="/images/webteam/rinto-pic.png" />
                    </div>
                </div>
            </div>
        </>
    )
}


const ProfileCard: FC<ProfileDetail> = ({ name, role, imgUrl }: ProfileDetail) => {
    return (
        <>
            <div className="card card-side group rounded-none flex-col sm:flex-row items-center justify-center">
                <figure className=""><img src={imgUrl} className="bg-[#55FFFF] object-cover block w-[260px] h-[260px] flex-1 grayscale group-hover:grayscale-0 transition duration-300 ease-in-out" /></figure>
                <div className="card-body flex-none ">
                    <div className="m-auto text-center sm:text-left w-full">
                        <CustomFont>
                            <h2 className="card-title justify-center sm:justify-start">{name}</h2>
                            <p className="text-sm uppercase group-hover:text-[#55FFFF]">{role}</p>
                        </CustomFont>
                    </div>
                </div>
            </div>
        </>
    )
}


export default WebsiteTeam
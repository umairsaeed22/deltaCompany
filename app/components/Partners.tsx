import React from 'react';
import { InfiniteMovingCards } from './ui/MovingCards';

const Partners = () => {
    const projects = [
        { id: 1, name: "Sindhala Island Neom", imgUrl: "https://neom.scene7.com/is/image/neom/logo-neom-en-spaced?fmt=png-alpha&scl=1", url: "https://www.neom.com/en-us/regions/sindalah" },
        { id: 2, name: "Baylasun Hotel KAEC", imgUrl: "https://image-tc.galaxy.tf/wipng-7vas5ksd4n61qgbdkaqn5vsvi/logo.png?width=500", url: "https://www.baylasunhotel.com/" },
        { id: 3, name: "Rosewood Hotel", imgUrl: "https://www.rosewoodhotels.com/content/dam/rosewoodhotels/brand/en/logo/00_RW_rosewood.svg", url: "https://www.rosewoodhotels.com/en/default" },
        { id: 4, name: "Park Hyatt", imgUrl: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/05/25/1428/Park-Hyatt-L006c-TM-rev-RGB.png/Park-Hyatt-L006c-TM-rev-RGB.DLOGO.png", url: "https://www.hyatt.com/en-US/hotel/saudi-arabia/park-hyatt-jeddah-marina-club-and-spa/jedph"  },
        { id: 5, name: "Al Tazaj", imgUrl: "//www.taza.com.sa/cdn/shop/files/Logo_1000x1000-01_1445x.png?v=1641382330", url: "https://www.taza.com.sa/en"},
        { id: 6, name: "Jeddah Management Company", imgUrl: "https://jed-sa.com/wp-content/uploads/elementor/thumbs/Q50kca6i_400x400-q0hrzaf9kj4yzudixciantyzbqcg50so84uthcteig.jpg", url: "https://jed-sa.com/" },
        { id: 7, name: "Zahid Group", imgUrl: "https://www.zahid.com/wp-content/uploads/2022/04/Zahid-Group-Logo-final-10-07-24-02-1.png", url: "https://www.zahid.com/" },
        { id: 8, name: "Danube", imgUrl: "https://danube.sa/assets/logo/danube-logo-sa-en-white-ece537d3778fe7756ef0d4b47cfe662a89109739ba5edc1b0e14f5f02a404372.svg", url: "https://danube.sa/en" },
        { id: 9, name: "Formula 1 Jeddah Grand Prix", imgUrl: "https://d3tw2v68rmxuj7.cloudfront.net/qng/v1-1/f1/f1e-wht-logo-5b3537b6a8c495a30947054a6070f1f550b13c624013815e6f9a54f17dedcc8c.svg", url: "https://f1experiences.com/" },
        { id: 10, name: "Social Bakery & Kitchen", imgUrl: "https://static.wixstatic.com/media/82213d_c8b2154ff35e48a0a2cd409ce2e186ab~mv2.png/v1/fill/w_232,h_30,al_c,q_85,usm_1.20_1.00_0.01,enc_avif,quality_auto/Artboard%2040.png", url: "https://www.wearesocial-sa.com/the-social-bakery" },
        { id: 11, name: "Movenpick Hotel Jeddah", imgUrl: "https://movenpick.accor.com/content/dam/movenpick/header/HeaderLogo280X96.svg", url: "https://movenpick.accor.com/en/middle-east/saudi-arabia/jeddah.html" },
        { id: 12, name: "MDL Beast Riyadh", imgUrl: "https://mma.prnewswire.com/media/1036737/MDL_Beast_Logo.jpg?w=200", url: "https://mdlbeast.com/" },
        { id: 13, name: "America's Cup Preliminary Regatta | Jeddah", imgUrl: "https://www.americascup.com/assets/img/site-logo-LV.png", url: "https://www.americascup.com/jeddah" },
        { id: 14, name: "Fifa Club World Cup Saudi Arabia 2023", imgUrl: "/FIFA.png", url: "" },
        { id: 15, name: "Jeddah Yacht Club & Marina", imgUrl: "https://static.wixstatic.com/media/1c8aea_bd504f3cdfa74f059e056e84cda08362~mv2.png/v1/crop/x_0,y_547,w_8000,h_3407/fill/w_209,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MicrosoftTeams-imagec2467e3ea4b7852ed827a1216016171fc0bce0ac3fb8e0919285639a626eb861.png", url: "https://www.jeddahyachtclubandmarina.com/" },
        { id: 17, name: "Aysh Academy", imgUrl: "asy.jpg", url: "https://hayyjameel.org/residents/aysh/" },
        { id: 18, name: "Radisson Blu Hotels", imgUrl: "https://statics.radissonhotels.com/main/img/logo/radisson/rhg-imagotype.svg", url: "https://www.radissonhotels.com/en-us/brand/radisson-blu" },
        { id: 19, name: "Ejar", imgUrl: "https://static.wixstatic.com/media/026a0d_56a065f70ba644eba76128ddeaaff27d~mv2.jpg/v1/fill/w_148,h_50,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/026a0d_56a065f70ba644eba76128ddeaaff27d~mv2.jpg", url: "https://www.ejar-crs.com/" },
        { id: 20, name: "Hwadi Company Ltd", imgUrl: "https://cdn.prod.website-files.com/6501fdc10e3f30b95ac8b5fe/65252e9396832c06c168522e_Hwadi_logo_english_white.svg", url: "https://www.hwadi.com/" },
        { id: 21, name: "Saudi Iwaa", imgUrl: "https://www.saudiiwaa.com/assets/images/icons/logo.png", url: "https://www.saudiiwaa.com/" },
        { id: 22, name: "Khalila Jeddah", imgUrl: "https://static.wixstatic.com/media/14853e_6c55a8a74f444f1796bb7623bf49caab~mv2.png/v1/crop/x_126,y_25,w_3887,h_4248/fill/w_59,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image.png", url: "https://www.khalila.co/blank" },
        { id: 22, name: "Jameel Square", imgUrl: "https://jameelsquare.com/wp-content/uploads/2019/04/sqr_JS-Logo-15050.png", url: "https://www.jameelsquare.com/" },
        { id: 23, name: "Red Sea Global", imgUrl: "https://www.redseaglobal.com/o/red-sea-global-theme/images/logo-hero.svg", url: "https://www.redseaglobal.com/en/" },
        { id: 24, name: "AMAALA", imgUrl: "https://www.amaala.com/o/red-sea-amaala-theme/images/../crafton-frontend/public/images/logo.svg", url: "https://www.amaala.com/en/" },
        { id: 25, name: "Alieia", imgUrl: "https://static.wixstatic.com/media/14853e_1605a6941e08471ba750e6e521de3263~mv2.png/v1/crop/x_4,y_26,w_3931,h_1680/fill/w_118,h_50,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/14853e_1605a6941e08471ba750e6e521de3263~mv2.png", url: "https://www.alieia.co/" },
    ];

    const items = projects.map((project) => ({
        quote: project.name,
        name: project.name,
        imgUrl: project.imgUrl,
        url: project.url || "#",
    }));

    return (
        <div className="w-full text-center overflow-hidden" id="portfolio">
            <span className="text-[rgb(61,61,78)] text-[25px] md:text-[35px] font-bold block ">
                Who Do We Work With?
            </span>

            <p className="text-gray-500 text-xs md:text-sm leading-5 font-normal text-center mt-1">
                We take pride in partnering with industry leaders and pioneers. Our collaborations reflect a commitment to delivering innovative solutions <br/>and creating value for our clients,
                enabling them to excel in their respective fields. Together, we shape a future of excellence and shared success.
            </p>


            <div className="gap-6 px-4">
                <InfiniteMovingCards
                    items={items}
                    direction="left"
                    speed="normal"
                    pauseOnHover={true}
                />
            </div>
        </div>
    );
};

export default Partners;

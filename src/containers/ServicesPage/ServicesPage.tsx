import { ServiceCard } from "@/components/ServicesPage/ServiceCard";
import React from "react";

import serviceImg01 from '@/assets/image/service01.png'
import serviceImg02 from '@/assets/image/service02.png'
import serviceImg03 from '@/assets/image/service03.png'
import serviceImg04 from '@/assets/image/service04.png'

export const ServicesPage: React.FC = () => {
  return (
    <>
      <div className="flex bg-services-bg bg-cover bg-center bg-no-repeat h-[50%] lg:h-[800px] lg:items-center justify-center lg:pt-32 pt-16">
        <h2 className="text-white font-sans text-4xl lg:text-8xl">
          <span className="lg:text-black">Ус</span>луги
        </h2>
      </div>
      <div className="flex lg:flex-row gap-10 container mx-auto text-white pt-10 flex-wrap justify-center">
        <div className="flex flex-col gap-16">
        <ServiceCard
          img={serviceImg01}
          refTo=""
          title="ШУМОИЗОЛЯЦИЯ ДВЕРЕЙ"
        />
        <ServiceCard
          img={serviceImg03}
          refTo=""
          title="РЕМОНТ ДВЕРЕЙ"
        />
        <ServiceCard
          img={serviceImg01}
          refTo=""
          title="ОБТЯЖКА ГВОЗДЕЙ И ПУГОВИЦ"
        />
        </div>
        <div className="flex flex-col gap-16">
        <ServiceCard
          img={serviceImg02}
          refTo=""
          title="ЗАМЕНА ЗАМКОВ"
        />
        <ServiceCard
          img={serviceImg03}
          refTo=""
          title="РЕМОНТ ДВЕРЕЙ"
        />
        <ServiceCard
          img={serviceImg04}
          refTo=""
          title="ОФОРМЛЕНИЕ ДВЕРНЫХ ПРОЕМОВ"
        />
        </div>
        <div className="flex flex-col gap-16">
        <ServiceCard
          img={serviceImg01}
          refTo=""
          title="ЛАМИНИРОВАННЫЕ ПАНЕЛИ"
        />
        <ServiceCard
          img={serviceImg04}
          refTo=""
          title="ПЕРЕТЯЖКА
          ДВЕРЕЙ"
        />
        </div>
        
        
        
        
      </div>
    </>
  );
};

import { SVGProps } from "react";

// Utilizando as logos enviadas pelo usuário - UP e UP Soluções
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="w-[120px] h-[50px] relative" {...props}>
      <img 
        src="/attached_assets/logo up-Photoroom.png" 
        alt="UP Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function FullLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="w-[180px] h-[50px] relative" {...props}>
      <img 
        src="/attached_assets/logo up soluçoes-Photoroom.png" 
        alt="UP Soluções Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import des from "../../../public/images/description.png";

const Description = () => {
  return (
    <section className="flex bg-black justify-between">
      <div className=" py-14 pl-26">
        <h3 className="font-mont text-3xl font-bold text-white">IT BERRIES</h3>
        <p className="max-w-[1150px] font-sans text-base text-white pt-16 pb-6.5">Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros. </p>
        <Link href="#">|  Read more  |</Link>
      </div>
     <div>
      
     </div>
    </section>
  );
};

export default Description;

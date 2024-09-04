import { Member } from "@/types/member";
import Image from "next/image";

const SingleMember = ({ member }: { member: Member }) => {
  const { name, image, designation } = member;

  return (

     <div className="w-full">
      <div className="rounded-lg bg-white p-4 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <div className="flex items-center">
          <div className="relative mr-4 h-[100px] w-full max-w-[100px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
    

  );
};

export default SingleMember;

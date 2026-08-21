import Image from 'next/image'
import React from 'react'

const HomeMenu = () => {
  return (
    <section className="">
      <div className="text-center">
        {/* <div className="h-48 relative">
            <Image src={""} alt='salad' layout='fill' objectFit='contain' />
        </div> */}
        <h3 className="text-gray-600 font-semibold">مشاهده کنید</h3>
        <h2 className="text-prime font-bold text-4xl ">منو</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-300 p-4 rounded-md">
          <img src="/images/pizza/pepperoni.jpg" alt="pepperoni pizza" />
          <h4 className="">پیتزا پپرونی</h4>
          <p className="">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و استفاده
            طراحان گرافیک است
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeMenu
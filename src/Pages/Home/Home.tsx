import React from "react";
import HeroImage from "@/assets/HeroImage.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/shad/ui/card";
import CustomerIcon from "@/assets/CustomerIcon.svg";
import SupportIcon from "@/assets/SupportIcon.svg";
import PainsIcon from "@/assets/PainsIcon.svg";
import GoogleIcon from "@/assets/Google.svg";
import AtlassianIcon from "@/assets/Atlassian.svg";
import CanonIcon from "@/assets/Canon.svg";
import WalmartIcon from "@/assets/Walmart.svg";
import AmazonIcon from "@/assets/Amazon.svg";
import SalesImage from "@/assets/SalesImage.png";
import MarketingImage from "@/assets/MarketingImage.png";
import ServicesImage from "@/assets/ServicesImage.png";
import Icon1 from "@/assets/Icon1.png";
import Icon2 from "@/assets/Icon2.png";
import Icon3 from "@/assets/Icon3.png";
import Icon4 from "@/assets/Icon4.png";
import Icon5 from "@/assets/Icon5.png";
import { Check, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shad/ui/avatar";
const Home: React.FC = () => {
  return (
    <>
      <div className="bg-[#F4F4F4]">
        <div className="relative flex max-md:flex-col items-center justify-center gap-10 py-20 max-md:py-20">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto my-auto bg-[#f4f4f4] px-4">
            <div className="max-w-3xl">
              <div className="mb-20">
                <h1 className="text-[80px] max-md:text-3xl leading-[74px] font-bold mb-10">
                  Bringing companies and customers together, anywhere
                </h1>
                <p className="text-2xl">
                  An awesome & powefull tools for your business, increase
                  business revenue with enterprise-grade links built to acquire
                  and engage cutomers.
                </p>
              </div>
              <div>
                <form action="" className="max-w-md">
                  <div className="relative">
                    <input
                      type="text"
                      className="bg-white border border-[#DCDCDC] rounded-xl p-4 w-full"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="bg-[#00CC61] rounded-lg px-5 p-2 absolute top-2/4 -translate-y-2/4 right-2"
                    >
                      Try for Free
                    </button>
                  </div>
                  <div className="ms-4">
                    Full access. No credit card required.
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={HeroImage}
              // className="absolute max-md:relative top-2/4 max-md:top-0 max-md:translate-y-2/4 -translate-y-2/4 right-0"
              className="relative max-md:ps-8"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-screen-xl px-4 mx-auto py-12 grid grid-cols-3 gap-8 items-center max-md:grid-cols-1">
          <h6 className="text-lg text-start">Trusted by 1,000+ customers</h6>
          <div className="col-span-2 grid grid-cols-5 gap-6 max-md:gap-2 items-center justify-between text-center">
            <div className="mx-auto">
              <img src={GoogleIcon} alt="Google Icon" />
            </div>
            <div className="mx-auto">
              <img src={AtlassianIcon} alt="Atlassian Icon" />
            </div>
            <div className="mx-auto">
              <img src={CanonIcon} alt="Canon Icon" />
            </div>
            <div className="mx-auto">
              <img src={WalmartIcon} alt="Walmart Icon" />
            </div>
            <div className="mx-auto">
              <img src={AmazonIcon} alt="Amazon Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#004050] px-4 py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1 items-center justify-start text-start text-white mb-16">
            <h1 className="text-6xl font-bold">
              Here's how Yoora can benefit your business
            </h1>
            <p className="text-xl">
              Build more meaningful and lasting relationships — better
              understand their needs, identify new opportunities to help,
              address any problems faster.
            </p>
          </div>
          <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-8 items-start justify-start">
            <Card className="bg-[#FFE377] border-0 rounded-xl p-4 pb-10">
              <CardHeader>
                <CardTitle>
                  <img src={CustomerIcon} alt="" />
                </CardTitle>
              </CardHeader>
              <hr className="border border-black m-5 mt-0" />
              <CardContent>
                <h1 className="text-xl font-bold mb-3">
                  Lead customers to happiness
                </h1>
                <p className="text-lg leading-8">
                  Card Yoora Support helps you provide personalized support when
                  and where customers need it, so customers stay happy.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-0 rounded-xl p-4 pb-10 mt-6 text-white">
              <CardHeader>
                <CardTitle>
                  <img src={SupportIcon} alt="Support Icon" />
                </CardTitle>
              </CardHeader>
              <hr className="border border-white/25 m-5 mt-3" />
              <CardContent>
                <h1 className="text-xl font-bold mb-3">Support your support</h1>
                <p className="text-lg leading-8">
                  Productive agents are happy agents. Give them all the support
                  tools and information they need to best serve your customers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-0 rounded-xl p-4 pb-10 mt-6 text-white">
              <CardHeader>
                <CardTitle>
                  <img src={PainsIcon} alt="Pains Icon" />
                </CardTitle>
              </CardHeader>
              <hr className="border border-white/25 m-5 mt-3" />
              <CardContent>
                <h1 className="text-xl font-bold mb-3">
                  Grow without growing pains
                </h1>
                <p className="text-lg leading-8">
                  Our software is powerful enough to handle the most complex
                  business, yet flexible enough to scale with you as you grow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 px-4 grid grid-cols-1 gap-16">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-32 max-md:gap-12 items-center">
          <div>
            <span className="badge px-2 py-1 bg-[#FFE377] text-sm rounded-lg uppercase mb-3 inline-block">
              Sales
            </span>
            <h1 className="text-3xl font-bold mb-4">
              Increase company revenue up to 65%
            </h1>
            <p className="mb-4">
              Automate your sales, marketing, and service in one platform. Avoid
              data leaks and enable consistent messaging.
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-2 space-x-3 rtl:space-x-reverse">
                <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>
                  Close more deals with single-page contact management
                </span>
              </li>
              <li className="flex items-center gap-2 space-x-3 rtl:space-x-reverse">
                <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>
                  Enjoy one-click calling, call scripts and voicemail automation
                </span>
              </li>
              <li className="flex items-center gap-2 space-x-3 rtl:space-x-reverse">
                <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>
                  Track stages and milestones of your deals to keep the sales
                  process on track
                </span>
              </li>
            </ul>
          </div>
          <div>
            <img src={SalesImage} alt="" />
          </div>
        </div>
        <div className="bg-[#787878]/25 w-full h-[1px]"></div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-32 max-md:gap-12 items-center max-md:flex-col-reverse">
          <div>
            <img src={MarketingImage} alt="" />
          </div>
          <div>
            <span className="badge px-2 py-1 bg-[#FFE377] text-sm rounded-lg uppercase mb-3 inline-block">
              Marketing
            </span>
            <h1 className="text-3xl font-bold mb-4">Marketing Automation</h1>
            <p className="mb-4">
              Market like the most successful companies in the world with Agile
              CRM's marketing automation software.
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-2 space-x-3 rtl:space-x-reverse">
                <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>
                  Marketing workflows with an easy drag-and-drop designer
                </span>
              </li>
              <li className="flex items-center gap-2 space-x-3 rtl:space-x-reverse">
                <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>
                  Use our templates to create high converting, mobile responsive
                  landing pages
                </span>
              </li>
              <li className="flex items-center gap-2 space-x-3 rtl:space-x-reverse">
                <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>
                  Integrate social media easily into your marketing campaigns &
                  contact views
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#787878]/25 w-full h-[1px]"></div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-32 max-md:gap-12 items-center">
          <div>
            <span className="badge px-2 py-1 bg-[#FFE377] text-sm rounded-lg uppercase mb-3 inline-block">
              Service
            </span>
            <h1 className="text-3xl font-bold mb-4">Help Desk Software</h1>
            <p className="mb-4">
              Great customer support separates decent companies from excellent
              companies. A positive customer support experience is a crucially
              important piece of the customer journey.
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-2 space-x-3 rtl:space-x-reverse">
                <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>
                  Resolve every issue in the shortest possible time with
                  powerful ticketing features
                </span>
              </li>
              <li className="flex items-center gap-2 space-x-3 rtl:space-x-reverse">
                <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>
                  Categorize tickets according to the issue and route them to
                  the appropriate group (e.g. sales or support)
                </span>
              </li>
              <li className="flex items-center gap-2 space-x-3 rtl:space-x-reverse">
                <Check className="flex-shrink-0 w-5 h-5 text-green-500" />
                <span>
                  Enjoy at-a-glance views of important data—such as ticket
                  priority—on your dashboard
                </span>
              </li>
            </ul>
          </div>
          <div>
            <img src={ServicesImage} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4]">
        <div className="max-w-screen-xl mx-auto py-20 px-4 grid grid-cols-1 gap-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Over 300+ integrations</h1>
            <p>
              Expand the capabilities of Yoora with hundreds of apps and
              integrations
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="grid grid-cols-8 gap-4">
                <div className="rounded-lg h-28 bg-white">
                  <img
                    className="w-full h-full object-contain"
                    src={Icon1}
                    alt=""
                  />
                </div>
                <div className="col-span-2 rounded-lg w-full h-28 bg-white">
                  <img
                    className="w-full h-full object-contain"
                    src={Icon2}
                    alt=""
                  />
                </div>
                <div className="col-span-2 rounded-lg w-full h-28 bg-white">
                  <img
                    className="w-full h-full object-contain"
                    src={Icon3}
                    alt=""
                  />
                </div>
                <div className="rounded-lg h-28 bg-white">
                  <img
                    className="w-full h-full object-contain"
                    src={Icon4}
                    alt=""
                  />
                </div>
                <div className="col-span-2 rounded-lg w-full h-28 bg-white">
                  <img
                    className="w-full h-full object-contain"
                    src={Icon5}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center justify-center gap-2 font-medium hover:underline"
          >
            <span>See all apps and extensions</span>
            <ChevronRight className="w-4 h-4 text-[#00CC61]" />
          </a>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 px-4 grid grid-cols-1 gap-16">
        <div className="flex items-end justify-between">
          <h1 className="text-4xl font-bold mb-4">What’s new at Yoora?</h1>
          <a
            href="#"
            className="flex items-center justify-center gap-2 font-medium hover:underline"
          >
            <span>See all</span>
            <ChevronRight className="w-4 h-4 text-[#00CC61]" />
          </a>
        </div>
        <div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16">
            <div className="w-full">
              <div className="border-b border-b-[#787878] text-[#787878] uppercase font-medium pb-4 mb-6">
                Service
              </div>
              <div className="grid gap-5">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-96 rounded-none object-cover"
                  alt=""
                />
                <h1 className="text-3xl font-bold">
                  How To Deliver a Successful Product Launch
                </h1>
                <p className="text-[#787878]">
                  <span className="text-black font-medium">05 Sep 2022,</span>{" "}
                  by Joshua Nash
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="border-b border-b-[#787878] text-[#787878] uppercase font-medium pb-4 mb-6">
                Service
              </div>
              <div className="grid gap-5">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-96 rounded-none object-cover"
                  alt=""
                />
                <h1 className="text-3xl font-bold">
                  What Makes an Authentic Employee Profile, and Why Does It
                  Matter?
                </h1>
                <p className="text-[#787878]">
                  <span className="text-black font-medium">05 Sep 2022,</span>{" "}
                  by Joshua Nash
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 px-4 grid grid-cols-1 gap-16">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-4xl font-bold mb-1">
            Real-life results and revenue
          </h1>
          <h6 className="text-lg text-[#3B3A40]">
            See how companies like yours have smashed their sales success goals
          </h6>
        </div>
        <div>
          <div className="grid grid-cols-1">
            <div className="w-full border-t border-t-[#787878] py-14">
              <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
                <div className="font-bold">
                  <h1 className="text-6xl">$2.5 M</h1>
                  <p>Generate sales</p>
                </div>
                <div className="col-span-2 flex flex-col gap-6">
                  <h1 className="text-3xl font-bold">
                    Using Yoora CRM is one of the best decisions we’ve ever
                    made. We’ve seen our annual revenue explode, and the outlook
                    just keeps getting sunnier.
                  </h1>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-14 h-14">
                      <AvatarImage
                        className="object-cover"
                        src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                      <AvatarFallback>Nellie Foster</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-black font-bold">Nellie Foster</h6>
                      <p className="text-[#404040]">
                        Founder & CEO, Foster Business Strategies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-t border-t-[#787878] py-14">
              <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
                <div className="font-bold">
                  <h1 className="text-6xl">45%</h1>
                  <p>Grew revenue</p>
                </div>
                <div className="col-span-2 flex flex-col gap-6">
                  <h1 className="text-3xl font-bold">
                    Yoora is created for sales people. It’s the kind of software
                    that just works. I don’t have to try to make it work. It
                    already does. It’s just perfect.
                  </h1>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-14 h-14">
                      <AvatarImage
                        className="object-cover"
                        src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                      <AvatarFallback>Lawrence Gibbs</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-black font-bold">Lawrence Gibbs</h6>
                      <p className="text-[#404040]">
                        Digital Marketing Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4]">
        <div className="max-w-screen-xl mx-auto py-20 px-4 grid grid-cols-1 gap-16">
          <div className="flex max-md:flex-col max-md:text-center items-end justify-between">
            <h1 className="text-4xl font-bold mb-4">
              We love our Customers and They love us too
            </h1>
            <a
              href="#"
              className="flex items-center justify-center gap-2 font-medium hover:underline"
            >
              <span>See all</span>
              <ChevronRight className="w-4 h-4 text-[#00CC61]" />
            </a>
          </div>
          <div>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-16 max-md:gap-10">
              <div className="w-full">
                <div className="border-b border-b-[#787878] uppercase font-medium pb-4 mb-6">
                  <i className="ri-double-quotes-l text-8xl text-[#00CC61]"></i>
                </div>
                <div className="flex flex-col gap-6">
                  <h1 className="text-2xl font-bold">
                    The best thing we love about Yoora is it does two-way sync
                    with Google Apps. It has helped us to better organize and
                    keep everything on track.
                  </h1>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-14 h-14">
                      <AvatarImage
                        className="object-cover"
                        src="https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                      <AvatarFallback>Lola Ross</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-black font-bold">Lola Ross</h6>
                      <p className="text-[#404040]">
                        Digital Marketing Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="border-b border-b-[#787878] uppercase font-medium pb-4 mb-6">
                  <i className="ri-double-quotes-l text-8xl text-[#00CC61]"></i>
                </div>
                <div className="flex flex-col gap-6">
                  <h1 className="text-2xl font-bold">
                    The best thing we love about Yoora is it does two-way sync
                    with Google Apps. It has helped us to better organize and
                    keep everything on track.
                  </h1>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-14 h-14">
                      <AvatarImage
                        className="object-cover"
                        src="https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                      <AvatarFallback>Lola Ross</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-black font-bold">Lola Ross</h6>
                      <p className="text-[#404040]">
                        Digital Marketing Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="border-b border-b-[#787878] uppercase font-medium pb-4 mb-6">
                  <i className="ri-double-quotes-l text-8xl text-[#00CC61]"></i>
                </div>
                <div className="flex flex-col gap-6">
                  <h1 className="text-2xl font-bold">
                    The best thing we love about Yoora is it does two-way sync
                    with Google Apps. It has helped us to better organize and
                    keep everything on track.
                  </h1>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-14 h-14">
                      <AvatarImage
                        className="object-cover"
                        src="https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      />
                      <AvatarFallback>Lola Ross</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-black font-bold">Lola Ross</h6>
                      <p className="text-[#404040]">
                        Digital Marketing Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-20 px-4 grid grid-cols-3 max-md:grid-cols-1 gap-16">
        <div>
          <h4>
            We built an elegant solution. Our team created a fully integrated
            sales and marketing solution for SMBs
          </h4>
        </div>
        <div className="col-span-2 grid grid-cols-4 max-md:grid-cols-1 gap-16">
          <div className="w-full">
            <h6 className="font-bold mb-3">Company</h6>
            <ul className="space-y-6">
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Jobs
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h6 className="font-bold mb-3">Company</h6>
            <ul className="space-y-6">
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Jobs
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h6 className="font-bold mb-3">Company</h6>
            <ul className="space-y-6">
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Jobs
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h6 className="font-bold mb-3">Company</h6>
            <ul className="space-y-6">
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Jobs
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00CC61]" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

'use client';

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote,
} from "@/components/testimonial";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export type TestimonialType = {
  /** URL to the person's profile picture or avatar image */
  authorAvatar: string;
  /** Full display name of the person giving the testimonial */
  authorName: string;
  /** Short tagline, title, or description of the person */
  authorTagline: string;
  /** Link to the person's profile, website, or social media page */
  url: string;
  /** The testimonial text content or recommendation message */
  quote: string;
};

export function TestimonialList({
  direction,
  data,
}: {
  direction?: "right" | "left";
  data: TestimonialType[];
}) {
  return (
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />

      <MarqueeContent direction={direction}>
        {data.map((item) => (
          <MarqueeItem
            key={item.url}
            className="mx-0 h-full w-80 md:w-96 shrink-0"
          >
            <a
              className="block h-full transition-all"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContainer className="w-full h-full">
                <CardBody className="w-full h-full">
                  <TestimonialItem {...item} />
                </CardBody>
              </CardContainer>
            </a>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  );
}

function TestimonialItem({
  authorAvatar,
  authorName,
  authorTagline,
  quote,
}: TestimonialType) {
  return (
    <Testimonial className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 hover:border-blue-500/50 shadow-lg hover:shadow-xl group/card">
      <CardItem translateZ="40">
        <TestimonialQuote className="min-h-14">
          <p>"{quote}"</p>
        </TestimonialQuote>
      </CardItem>

      <CardItem translateZ="30" className="w-full">
        <TestimonialAuthor>
          <TestimonialAvatar>
            <TestimonialAvatarImg src={authorAvatar} alt={authorName} />
            <TestimonialAvatarRing />
          </TestimonialAvatar>

          <div className="flex flex-col">
            <TestimonialAuthorName>{authorName}</TestimonialAuthorName>
            <TestimonialAuthorTagline>{authorTagline}</TestimonialAuthorTagline>
          </div>
        </TestimonialAuthor>
      </CardItem>
    </Testimonial>
  );
}

"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Wind, Waves, Route, Star, DollarSign, Users, HelpCircle, Sparkles, TrendingUp, Package } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="plain"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Experiences", id: "feature" },
            { name: "Lessons", id: "feature-process" },
            { name: "Pricing", id: "pricing" },
            { name: "Instructors", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://pixabay.com/get/gb4a95657253dddeb49e05afe67f3bba2c4900f3354fa9ec94b72030f8af565b7378614b28796ff45e0be4867e513e00864b5ae29a78012c017206087fb9aa69a_1280.jpg"
          logoAlt="Cancun Wind Surfing"
          brandName="WindSurf Cancun"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Master Wind Surfing in Paradise"
          description="Experience the thrill of wind surfing in Cancun's crystal-clear waters. Professional lessons, equipment rental, and unforgettable adventures await."
          tag="Cancun Adventures"
          tagIcon={Wind}
          buttons={[
            { text: "Book Your Lesson", href: "contact" },
            { text: "View Experiences", href: "feature" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g1227a27c7c5ef3b72e3c77a34a5b3812311c534f9016f5a2de434bb068e978310c6527dd9ac1fea2bcc72f0cfa35e90fb8cc22a05e72b49a5986860006e8b3ee_1280.jpg",
              imageAlt: "Wind surfing action in Cancun"
            },
            {
              imageSrc: "https://pixabay.com/get/gb9c2b0ee73eb6bdfcb50c1c802109703906ad55fb1fa0f9b91756e2c83bfcf304639a3d3f3ba7441054fd8d141ff97587fc82c9dc4081e6c95e859fa31448f7a_1280.jpg",
              imageAlt: "Wind surfing lessons on beach"
            },
            {
              imageSrc: "https://pixabay.com/get/g55e9a80cd7b44efb4853965f87909505acd192d3a3066ce6c70babed8a3118387b9fb97410927469c27dc4dff942f3babe94127eb2c081c89282a65d710fb5cb_1280.jpg",
              imageAlt: "Beautiful Cancun beach"
            },
            {
              imageSrc: "https://pixabay.com/get/ged621f3abc952c3a16fda7ff53367f0ee82a1932ac5fc5e258e0e08c2a819552eb70d6958fed66be3bad59cefc848999a613c58dbef237369373a25b0474168c_1280.jpg",
              imageAlt: "Wind surfing equipment"
            },
            {
              imageSrc: "https://pixabay.com/get/g3b8ffeb1abc8090702f1638e3d81297940b97a7706abac06a0680208a85128f6ca59b9d40b75bc2138c12293e760356c611f085e9f3bce48d69b48d43c13a9c6_1280.jpg",
              imageAlt: "Advanced wind surfing"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Wind Surfing Experiences"
          description="Choose from our variety of wind surfing adventures designed for all skill levels"
          tag="Experiences"
          tagIcon={Waves}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          features={[
            {
              title: "Beginner Lessons",
              description: "Perfect for first-time wind surfers. Learn the basics in safe, shallow waters with certified instructors.",
              imageSrc: "https://pixabay.com/get/gb9c2b0ee73eb6bdfcb50c1c802109703906ad55fb1fa0f9b91756e2c83bfcf304639a3d3f3ba7441054fd8d141ff97587fc82c9dc4081e6c95e859fa31448f7a_1280.jpg",
              imageAlt: "Beginner wind surfing lesson",
              button: { text: "Book Now", href: "pricing" }
            },
            {
              title: "Equipment Rental",
              description: "High-quality boards, sails, and gear available for all levels. Daily and weekly rental options available.",
              imageSrc: "https://pixabay.com/get/ged621f3abc952c3a16fda7ff53367f0ee82a1932ac5fc5e258e0e08c2a819552eb70d6958fed66be3bad59cefc848999a613c58dbef237369373a25b0474168c_1280.jpg",
              imageAlt: "Wind surfing equipment rental",
              button: { text: "View Gear", href: "pricing" }
            },
            {
              title: "Advanced Training",
              description: "Take your skills to the next level with advanced techniques, tricks, and freestyle maneuvers.",
              imageSrc: "https://pixabay.com/get/g3b8ffeb1abc8090702f1638e3d81297940b97a7706abac06a0680208a85128f6ca59b9d40b75bc2138c12293e760356c611f085e9f3bce48d69b48d43c13a9c6_1280.jpg",
              imageAlt: "Advanced wind surfing training",
              button: { text: "Learn More", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="feature-process" data-section="feature-process">
        <FeatureCardSeven
          title="Your Wind Surfing Journey"
          description="Master wind surfing step by step with our structured approach"
          tag="Learning Path"
          tagIcon={Route}
          animationType="blur-reveal"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Learn the Basics",
              description: "Start with beach theory, safety procedures, and equipment familiarization. Understand wind patterns and basic sailing principles.",
              imageSrc: "https://pixabay.com/get/g1ca5f19c7d62d6c6cd94354f1e6a1d0e1108d450850634cc138f6c94fa06dae5d9ab63dcac4d82fc5074e73364aa1cc6070e8130f8a094d92c016bcb5895a1dc_1280.jpg",
              imageAlt: "Wind surfing basics and safety"
            },
            {
              id: 2,
              title: "First Time on Water",
              description: "Practice balance, steering, and basic maneuvers in shallow, calm waters with your instructor by your side.",
              imageSrc: "https://pixabay.com/get/g120f31bd0bbd83d5e24d42cee77b64983e74f2ff7e89715e89af02f2c330e24ed081a8c78ae50640e5ed8063c416c5d93edd282409978652c91c575868b2e7bf_1280.jpg",
              imageAlt: "First wind surfing experience on water"
            },
            {
              id: 3,
              title: "Advanced Techniques",
              description: "Master jibing, tacking, and freestyle moves. Learn to read wind and waves for optimal performance.",
              imageSrc: "https://pixabay.com/get/gf5b73804c128abecb3a625da8f6e88f88306832b8615c5c19f8668b48744b456b43e318b6266982228abfe5ff0579f5ab1de8e6eb587e11d10658fb936856769_1280.jpg",
              imageAlt: "Advanced wind surfing techniques"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Students Say"
          description="Hear from wind surfers who learned with us in Cancun"
          tag="Reviews"
          tagIcon={Star}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Adventure Traveler",
              company: "From California",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge253b311419a027155667276ea08164074a488b0c985287e853513a49d26dfef6174b96aab5228ec75f63136892772121dda38f75e636a5bd211c8ab37abe293_1280.jpg",
              imageAlt: "Sarah Johnson testimonial"
            },
            {
              id: "2",
              name: "Miguel Rodriguez",
              role: "Local Enthusiast",
              company: "Cancun Resident",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g0f9c9041a0377e590691489bac1da10cb975a4c010ff89214d6070cf3a596a17786ec2f02c8b1ea1c345f310a0ddab6ce92abd600da18e091b13b3f74f151364_1280.jpg",
              imageAlt: "Miguel Rodriguez testimonial"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Vacation Learner",
              company: "From UK",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g736a8fbee00b22bc6344dfceec5558580fe25c0ba0ea10057c7ed2812e6689f866022867b71f6c59bd107b7f0e6de933117a134402a51e98a14a770780aac7d5_1280.jpg",
              imageAlt: "Emma Thompson testimonial"
            },
            {
              id: "4",
              name: "Carlos Martinez",
              role: "Weekend Warrior",
              company: "Mexico City",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g00d860fd1f25c1ceac5dd41ee9db8572dc8f1b038f8bf5a3256c6c73f110eae85313d8d38900a0f481250ae2989c3aac742f3f5ec4e7ba232037f546eb1c2fe6_1280.jpg",
              imageAlt: "Carlos Martinez testimonial"
            },
            {
              id: "5",
              name: "Lisa Chen",
              role: "Fitness Enthusiast",
              company: "From Canada",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g55a86cb25ceaf5b9d861d7512eaf1c0f496ec84cdf4a0f7a74bf6071e91d75b8b15358653ece6b6b7fbaff0b85fca90488be138514c645fd0c343c1276bf8e0a_1280.jpg",
              imageAlt: "Lisa Chen testimonial"
            },
            {
              id: "6",
              name: "Pablo Hernandez",
              role: "Beach Lover",
              company: "From Spain",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gd701a856ad2eccc0bb5dac117cd5d068897fd89903c210d278c8b54fb0a01555faea0746047662a3ad0e7de0a93c6f2ec877828cd36386350c3832ee5d655e14_1280.jpg",
              imageAlt: "Pablo Hernandez testimonial"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose Your Adventure"
          description="Flexible pricing options for lessons, rentals, and packages"
          tag="Pricing"
          tagIcon={DollarSign}
          animationType="slide-up"
          textboxLayout="default"
          plans={[
            {
              id: "beginner",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$75",
              subtitle: "Perfect for first-time wind surfers",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Ask Questions", href: "contact" }
              ],
              features: [
                "2-hour beginner lesson",
                "Equipment included",
                "Certified instructor",
                "Beach theory session",
                "Safety briefing"
              ]
            },
            {
              id: "intermediate",
              badge: "Great Value",
              badgeIcon: TrendingUp,
              price: "$120",
              subtitle: "For those with some experience",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "feature" }
              ],
              features: [
                "3-hour advanced lesson",
                "Premium equipment",
                "Advanced techniques",
                "Video analysis",
                "Progress certificate"
              ]
            },
            {
              id: "package",
              badge: "Best Deal",
              badgeIcon: Package,
              price: "$299",
              subtitle: "Complete 3-day package",
              buttons: [
                { text: "Book Package", href: "contact" },
                { text: "Customize", href: "contact" }
              ],
              features: [
                "3 lessons over 3 days",
                "Equipment for all days",
                "Photo/video package",
                "Beach transfers",
                "Completion certificate"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Your Instructors"
          description="Professional, certified wind surfing instructors with years of experience"
          tag="Our Team"
          tagIcon={Users}
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          textboxLayout="default"
          members={[
            {
              id: "1",
              name: "Marco Silva",
              role: "Head Instructor",
              imageSrc: "https://pixabay.com/get/g4a7221345f85ec42f6ef6e5dd22de6da815052ac0a367ff34bcc290f00bbdaeecdd44fb3023779beec608e99bf952ec7e72234ceafc120c943fb33f173e63f8a_1280.jpg",
              imageAlt: "Marco Silva - Head Instructor"
            },
            {
              id: "2",
              name: "Ana Rodriguez",
              role: "Beginner Specialist",
              imageSrc: "https://pixabay.com/get/gb3010e5dc95c80fb7dcd99f17bef5019067f597e27dd9d395e3f42bb38f3a19af4a7aa34b36c3e8e816494bd30e1eb6506e67893dc3719c39fbfbfff136d8afd_1280.jpg",
              imageAlt: "Ana Rodriguez - Beginner Specialist"
            },
            {
              id: "3",
              name: "David Martinez",
              role: "Advanced Coach",
              imageSrc: "https://pixabay.com/get/g7ffbd4f71d3fa3ea612fab61e73239573fbbc4f510f2eec575c05820706acf50e84e425c0cb8a7a80394f1b821b4307fb3b99078c3dbaaeeddbebd06a6ce953d_1280.jpg",
              imageAlt: "David Martinez - Advanced Coach"
            },
            {
              id: "4",
              name: "Sofia Lopez",
              role: "Youth Instructor",
              imageSrc: "https://pixabay.com/get/gafac5f960c46991ec7fc1313a72f26098a8680d6bf4fd49d8d6fd306dcc24d02f3c99597a3f1b95d49dd13bd3edb7e0b89e1517eb37de90f58f86dfc3b919890_1280.jpg",
              imageAlt: "Sofia Lopez - Youth Instructor"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about wind surfing in Cancun"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do I need previous experience to start wind surfing?",
              content: "No previous experience is required! Our beginner lessons are designed for complete newcomers. We start with beach theory and safety, then progress to shallow water practice."
            },
            {
              id: "2",
              title: "What should I bring to my lesson?",
              content: "Just bring swimwear, sunscreen, a towel, and water. We provide all wind surfing equipment including board, sail, wetsuit (if needed), and safety gear."
            },
            {
              id: "3",
              title: "What are the best wind conditions for lessons?",
              content: "Cancun offers excellent wind conditions year-round. We conduct lessons in winds from 8-25 knots, adjusting equipment and techniques based on conditions and skill level."
            },
            {
              id: "4",
              title: "How long does it take to learn wind surfing?",
              content: "Most students can sail independently after 2-3 lessons. Our beginner lesson gets you on the water and sailing in your first session, with continued improvement in follow-up lessons."
            },
            {
              id: "5",
              title: "Is wind surfing safe?",
              content: "Yes! We prioritize safety with proper equipment, qualified instructors, and gradual skill progression. All lessons include safety briefings and we only operate in suitable conditions."
            },
            {
              id: "6",
              title: "What age groups can participate?",
              content: "We welcome wind surfers from age 8 and up. We have specialized youth programs and equipment sized for different ages and abilities."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Ride the Wind?"
          description="Contact us to book your wind surfing adventure in Cancun or ask any questions about our lessons and experiences."
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "experience", type: "text", placeholder: "Wind Surfing Experience Level", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your interests, preferred dates, or any questions...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="https://pixabay.com/get/gb4a95657253dddeb49e05afe67f3bba2c4900f3354fa9ec94b72030f8af565b7378614b28796ff45e0be4867e513e00864b5ae29a78012c017206087fb9aa69a_1280.jpg"
          logoAlt="WindSurf Cancun Logo"
          logoText="WindSurf Cancun"
          columns={[
            {
              items: [
                { label: "Experiences", href: "feature" },
                { label: "Beginner Lessons", href: "pricing" },
                { label: "Advanced Training", href: "feature" },
                { label: "Equipment Rental", href: "pricing" }
              ]
            },
            {
              items: [
                { label: "Instructors", href: "team" },
                { label: "Pricing", href: "pricing" },
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Safety Guidelines", href: "faq" },
                { label: "Weather Conditions", href: "contact" },
                { label: "Booking Policy", href: "contact" },
                { label: "Group Discounts", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
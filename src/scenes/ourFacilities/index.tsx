import { SelectedPage, FacilityType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Facility from "./Facilities";

const classes: Array<FacilityType> = [
  {
    name: "Fitness Center",
    description:
      "Our two-story fitness center offers a contemporary and spacious environment with premium exercise equipment, personalized training, and a motivating atmosphere, making it the perfect place to achieve your fitness goals.",
    image: image1,
  },
  {
    name: "Rooftop Turf Area",
    description:
      "Our rooftop turf area provides a unique outdoor space where members can enjoy invigorating workouts in the fresh air. Additionally, this exclusive setting doubles as a venue for special member-only events, creating a sense of community and camaraderie among our fitness enthusiasts.",
    image: image2,
  },
  {
    name: "EvoEats Café",
    description:
      "Our in-house cafe is a space where members can refuel with delicious, wholesome meals and refreshing beverages at discounted prices. Enjoy a relaxing break or catch up on work with our complimentary Wi-Fi, creating the perfect spot to unwind after a rewarding workout session.",
    image: image3,
  },
  {
    name: "Fitness Classes",
    description:
      "Explore an array of diverse, instructor-led classes at our gym, ranging from HIIT and yoga to dance-based workouts and strength training. Led by certified instructors, these classes cater to all fitness levels, ensuring a motivating and enjoyable experience as you work towards your goals.",
    image: image4,
  },
  {
    name: "Infared Saunas",
    description:
      "Experience the epitome of relaxation in our luxurious infrared saunas, utilizing cutting-edge technology for detoxification, muscle recovery, and overall well-being. Escape to a serene oasis for a rejuvenating experience at our gym.",
    image: image5,
  },
  {
    name: "Indoor Basketball Court",
    description:
      "Get your game on in our full-size indoor basketball court, designed for basketball enthusiasts of all skill levels. The spacious court offers ample room to perfect your shots, practice drills, and engage in exciting pickup games with fellow members.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurFacilities = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourfacilities" className="w-full bg-gray-200 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurFacilities)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR FACILITIES</HText>
            <p className="py-5">
              Welcome to EvoGym, where luxury meets fitness. Our
              state-of-the-art facilities are designed to elevate your workout
              experience. Enjoy a moment of relaxation in our stylish café area
              after an invigorating session in our two-story fitness center,
              equipped with cutting-edge exercise machines and expert trainers
              to guide you. At our gym, we cater to your every fitness desire,
              ensuring an unparalleled fitness journey like no other.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: FacilityType, index) => (
              <Facility
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurFacilities;

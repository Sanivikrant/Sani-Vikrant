import { motion } from "framer-motion";

const glimpse = [
  {
    image: "./images/ui-6.jpeg", 
    title: "TEKATHON 2.0(SIH)",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7115392670369247234?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaTzm0B5RfKazxdAbpYV5Qx-5hyAJcf1Ts",
  },
  {
    image: "./images/ui-9.jpg", 
    title: "Secured 1st place in the Science Cluster at the CU Project Expo 2025",
    link: "https://drive.google.com/drive/folders/1ozAVkJQn76qESg9q3NTQOAhnhNpiJMo2?usp=drive_link",
  },
  
  {
    image: "./images/ui-2.jpg", 
    title: "T.A.R.A.S. 2.0 (Tactical Autonomous Recon and Assault System)",
    link: "https://drive.google.com/drive/folders/1kd5mwiM8dddSbe_VWn60c25YqYOK3yyz?usp=drive_link",
  },
  {
    image: "./images/ui-3.jpg", 
    title: "T.A.R.A.S. (Tactical Autonomous Recon and Assault System)",
    link: "https://drive.google.com/drive/folders/1kd5mwiM8dddSbe_VWn60c25YqYOK3yyz?usp=drive_link",
  },
  {
    image: "./images/ui-4.jpg", 
    title: "TECH INVENT 2024 myoelectric prosthetic arm ",
    link: "https://www.linkedin.com/posts/dr-navpreet-kaur-walia-36683922b_projectexposition-innovation-futuretechnologists-activity-7300433999452065794-0G8a?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaTzm0B5RfKazxdAbpYV5Qx-5hyAJcf1Ts",
  },
  {
    image: "./images/ui-5.jpg", 
    title: "CAB 2025 myoelectric prosthetic arm",
    link: "https://drive.google.com/file/d/1cqMaM7z-8ehXE9_OyXGsspxklkWXtXl5/view?usp=drive_link",
  },
  {
    image: "./images/ui-7.jpg", 
    title: "NTP Client-Server Time Clock",
    link: "https://drive.google.com/file/d/1GJhIowv8uasO-8mzfqbe3DxCNernkMy2/view?usp=drive_link",
  },
  {
    image: "./images/ui-8.jpg", 
    title: "Brain-it-on 2.0 PVPIT Soil Monitoring System for Precision Agriculture",
    link: "https://drive.google.com/drive/folders/1kd5mwiM8dddSbe_VWn60c25YqYOK3yyz?usp=drive_link",
  },
  {
    image: "./images/ui-1.jpg", 
    title: "Appreciation of projects in national news paper",
    link: "https://drive.google.com/drive/folders/1ozAVkJQn76qESg9q3NTQOAhnhNpiJMo2?usp=drive_link",
  },
];

const Glimpse = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Glimpse
      </motion.h2>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center"
      >
        {glimpse.map((design, index) => (
          <motion.a
            href={design.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="relative rounded-2xl border-4 border-neutral-800 overflow-hidden"
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.3 }}
          >
            <img
              src={design.image}
              alt={design.title}
              loading="lazy" // Lazy loading for performance
              className="w-full h-full object-cover rounded-lg"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white text-xl font-semibold opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {design.title}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Glimpse;

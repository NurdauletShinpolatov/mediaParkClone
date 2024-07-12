"use client";

import { Flex, Select, Text } from "@chakra-ui/react";
import cls from "./SecondaryHeader.module.scss";
import {
  ArrowIcon,
  LocationIcon,
  PhoneIcon,
} from "@/assets/icons/SecondaryHeaderIcons";
import { useState } from "react";

// const languages = {uz: "O'zbek", ru: "русский", en: "English"}

export default function SecondaryHeader() {
  const [lang, setLang] = useState('uz')

  const changeLanguage = (e) => {
    console.log("e", e); // log
    setLang(e.target.value);
  };

  const langOptions = [
    {
      value: "uz",
      label: "O'zbek",
    },
    {
      value: "ru",
      label: "Русский",
    },
    {
      value: "en",
      label: "English",
    },
  ];

  return (
    <div className={cls.secondaryHeader}>
      <Flex
        className={cls.container}
        px={15}
        py={10}
        justifyContent="space-between"
      >
        <Flex gap="24px">
          <Flex alignItems="center" gap="4px">
            <PhoneIcon />
            <Text fontSize="12px">+998 71 203 33 33</Text>
          </Flex>
          <Flex alignItems="center">
            <LocationIcon />
            <Text fontSize="12px">Toshkent</Text>
          </Flex>
        </Flex>

        <Flex gap="24px" fontSize="12px" alignItems='center'>
          <Text>Biz haqimizda</Text>
          <div className={cls.roundedRedBtn}>MediaClub</div>
          <div className={cls.roundedBlueBtn}>
            MediaBlog <ArrowIcon />
          </div>
          <Text>Yuridik shaxslar uchun</Text>
          <Text>Do'konlar</Text>
          <Text>Biz bilan bog'laning!</Text>
          {/* <Select
            className={`'basic-single' ${cls.language}`}
            classNamePrefix="select"
            defaultValue={langOptions[0]}
            name="language"
            options={langOptions}
            onChange={changeLanguage}
          /> */}
          <select value={lang} onChange={changeLanguage} className={cls.language}>
            {langOptions.map((lang, index) => (
              <option key={index} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </Flex>
      </Flex>
    </div>
  );
}

'use client'
import { Box, Flex, Select, Text } from '@chakra-ui/react';
import cls from './SecondaryHeader.module.scss';
import { ArrowIcon, LocationIcon, PhoneIcon } from '@/assets/icons/SecondaryHeaderIcons';
import { useState } from 'react';

const languages = {uz: "O'zbek", ru: "русский", en: "English"}

export default function SecondaryHeader() {
  const [lang, setLang] = useState('uz')

  const changeLanguage = (v) => {
    console.log("v", v) // log
  }

  const currentLanguage = languages?.[lang]
  return(
    <div className={cls.secondaryHeader}>
      <Flex className={cls.container} px={15} py={10} justifyContent='space-between' >
        
        <Flex gap='24px'>
          <Flex alignItems='center' gap='4px'>
            <PhoneIcon />
            <Text fontSize='12px'>+998 71 203 33 33</Text>
          </Flex>
          <Flex alignItems='center'>
            <LocationIcon />
            <Text fontSize='12px'>Toshkent</Text>
          </Flex>
        </Flex>
        
        <Flex>
          <Text>Biz haqimizda</Text>
          <div className={cls.roundedRedBtn}>MediaClub</div>
          <div className={cls.roundedBlueBtn}>MediaBlog <ArrowIcon /></div>
          <Text>Yuridik shaxslar uchun</Text>
          <Text>Do'konlar</Text>
          <Text>Biz bilan bog'laning!</Text>
          <Select variant='flushed' placeholder={currentLanguage} value={lang} onChange={changeLanguage}>
            <option value="uz">O'zbek</option>
            <option value="ru">Руский</option>
            <option value="en">English</option>
          </Select>
        </Flex>
      </Flex>
    </div>
  )
}
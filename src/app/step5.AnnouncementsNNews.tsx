"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  useDisclosure,
  VStack,
  Text,
  Divider,
  Icon,
  Switch,
  Checkbox,
  Image,
} from "@chakra-ui/react";

import "./page.module.css";
import HeaderContent from "@/components/HeaderContent";
import { GiTicket } from "react-icons/gi";
import { BsCloudDownload, BsFillCheckCircleFill } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import { useState } from "react";

type Props = {
  activeStep: number;
  goToNext(): void;
  goToPrevious(): void;
};
const AnnouncementsNNews = ({ activeStep, goToNext, goToPrevious }: Props) => {
  const {
    isOpen: stepIsOpen,
    onOpen: stepOnOpen,
    onClose: stepOnClose,
  } = useDisclosure();
  const Indicator = () => {
    return (
      <HStack display={activeStep == 3 ? "none" : "flex"}>
        {[1, 2, 3, 4, 5].map((i, _) => (
          <Box
            w={{ base: 2, md: 6 }}
            h={{ base: 2, md: 1 }}
            bg={activeStep >= i ? "blue.500" : "gray.200"}
            borderRadius="full"
            key={_}
          />
        ))}
      </HStack>
    );
  };
  return (
    <>
      <VStack h={"100%"} justifyContent="space-between">
        <HeaderContent
          title={"ติดตามข่าวประชาสัมพันธ์"}
          title2={"กิจกรรมต้อนรับนักศึกษาใหม่"}
        />
        <VStack
          mt={{ base: 4, md: 4 }}
          spacing={4}
          flex={1}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <VStack w={"100%"} spacing={6}>
            <Text color="#1d1d1f" fontWeight={500} fontSize="xl">
              Line : @kkusu
            </Text>

            <Box
              h={{ base: "200px", md: "200px" }}
              w={{ base: "200px", md: "200px" }}
            >
              <a href="https://lin.ee/AiB0hoP">
                <Image
                  src={"/linesu.png"}
                  alt={"line su"}
                  h="full"
                  borderRadius="lg"
                />
              </a>
            </Box>
            <Divider />
            <Box>
              <Text mt={2}>
                นักศึกษาที่สนใจเข้าร่วมกิจกรรม Welcome KKU Freshmen โดย
                มหาวิทยาลัยขอนแก่น วันที่ 15 มิ.ย. 2566 สามารถจองเวลารอบได้ที่
              </Text>
              <a href="https://sac-old.kku.ac.th/q/">
                <Image
                  src={"/sac-freshmen.jpg"}
                  alt={"line su"}
                  h="full"
                  borderRadius="lg"
                  height={{ base: "140px", md: "180px" }}
                  // height={{ base: "200px", md: "200px" }}
                />
              </a>
              <Text mt={2} color="blue">
                <a href="https://sac-old.kku.ac.th/q/">
                  @กองพัฒนาศึกษาและศิษย์เก่าสัมพันธ์
                </a>
              </Text>
            </Box>
          </VStack>
          <HStack justifyContent={"space-between"} w={"100%"}>
            <Button
              variant="ghost"
              onClick={goToPrevious}
              size={{ base: "sm", md: "md" }}
              w={20}
              py={6}
            >
              ก่อนหน้า
            </Button>
            <Indicator />
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={stepIsOpen}
              size={{ base: "sm", md: "md" }}
              onClick={goToNext}
              w={20}
              isDisabled
              py={6}
            >
              ต่อไป
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default AnnouncementsNNews;

// const clearLocalStorage = () => {
//   if (typeof window !== "undefined") {
//     localStorage.clear();
//   }
// }

// return (
//  <>
//   <button onClick={() => clearLocalStorage()}>clear</button>
//  </>
// )
